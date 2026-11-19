/**
 * 마음사이 부모 자기이해검사 - 기관 운영용 백엔드
 * 관리 시트에서 STATUS=OPEN/CLOSED, MAX_USERS=200으로 통제합니다.
 */

const CONFIG_SHEET = '관리';
const RESPONSE_SHEET = '응답';

function getBook_(){
  return SpreadsheetApp.getActiveSpreadsheet();
}

function setupSystem(){
  const ss = getBook_();

  let config = ss.getSheetByName(CONFIG_SHEET);
  if (!config) config = ss.insertSheet(CONFIG_SHEET);
  config.clear();

  const rows = [
    ['설정', '값', '설명'],
    ['STATUS', 'OPEN', 'OPEN이면 검사 가능, CLOSED이면 즉시 마감'],
    ['MAX_USERS', 200, '최대 완료 인원'],
    ['INSTITUTION_NAME', '기관명 입력', '보고서 및 관리용'],
    ['CLOSED_MESSAGE', '본 기관의 검사 참여가 종료되었습니다.', '마감 시 참여자 화면 안내'],
    ['CREATED_AT', new Date(), '설정 생성일']
  ];

  config.getRange(1,1,rows.length,3).setValues(rows);
  config.setFrozenRows(1);
  config.autoResizeColumns(1,3);

  let responses = ss.getSheetByName(RESPONSE_SHEET);
  if (!responses) responses = ss.insertSheet(RESPONSE_SHEET);
  responses.clear();
  responses.getRange(1,1,1,1).setValue('respondent_id');
  responses.setFrozenRows(1);

  return '설정 완료';
}

function getConfig_(){
  const sheet = getBook_().getSheetByName(CONFIG_SHEET);
  if (!sheet) throw new Error('관리 시트가 없습니다. setupSystem()을 먼저 실행하세요.');

  const values = sheet.getDataRange().getValues();
  const map = {};

  for (let i=1; i<values.length; i++){
    const key = String(values[i][0] || '').trim();
    if (key) map[key] = values[i][1];
  }

  return {
    status:String(map.STATUS || 'CLOSED').toUpperCase(),
    maxUsers:Number(map.MAX_USERS || 0),
    institutionName:String(map.INSTITUTION_NAME || ''),
    closedMessage:String(map.CLOSED_MESSAGE || '검사 참여가 종료되었습니다.')
  };
}

function getCompletedCount_(){
  const sheet = getBook_().getSheetByName(RESPONSE_SHEET);
  if (!sheet) return 0;
  return Math.max(0,sheet.getLastRow()-1);
}

function getStatus_(){
  const config = getConfig_();
  const completed = getCompletedCount_();
  const maxUsers = Math.max(0,config.maxUsers);
  const full = maxUsers > 0 && completed >= maxUsers;
  const open = config.status === 'OPEN' && !full;

  return {
    ok:true,
    open:open,
    reason:open ? 'open' : (full ? 'full' : 'closed'),
    completed:completed,
    max_users:maxUsers,
    remaining:maxUsers > 0 ? Math.max(0,maxUsers-completed) : null,
    institution_name:config.institutionName,
    message:open ? '검사에 참여할 수 있습니다.' : config.closedMessage
  };
}

function sanitizeCallback_(name){
  const value = String(name || 'callback');
  return /^[A-Za-z_$][0-9A-Za-z_$\.]*$/.test(value) ? value : 'callback';
}

function jsonp_(obj,callback){
  const cb = sanitizeCallback_(callback);
  return ContentService
    .createTextOutput(cb + '(' + JSON.stringify(obj) + ');')
    .setMimeType(ContentService.MimeType.JAVASCRIPT);
}

function json_(obj){
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

function findRespondentRow_(respondentId){
  if (!respondentId) return -1;

  const sheet = getBook_().getSheetByName(RESPONSE_SHEET);
  if (!sheet || sheet.getLastRow() < 2) return -1;

  const header = sheet.getRange(1,1,1,sheet.getLastColumn()).getValues()[0];
  const idx = header.indexOf('respondent_id');
  if (idx < 0) return -1;

  const values = sheet.getRange(2,idx+1,sheet.getLastRow()-1,1).getValues();

  for (let i=0; i<values.length; i++){
    if (String(values[i][0]) === String(respondentId)) return i+2;
  }
  return -1;
}

function ensureHeaders_(record){
  const sheet = getBook_().getSheetByName(RESPONSE_SHEET);
  const currentLastCol = Math.max(1,sheet.getLastColumn());
  let headers = sheet.getRange(1,1,1,currentLastCol).getValues()[0];
  headers = headers.filter((v,i)=>i===0 || v!=='');

  const required = ['institution_name','server_saved_at',...Object.keys(record)];
  required.forEach(key=>{
    if(!headers.includes(key)) headers.push(key);
  });

  sheet.getRange(1,1,1,headers.length).setValues([headers]);
  return headers;
}

function saveRecord_(record){
  const lock = LockService.getScriptLock();
  lock.waitLock(15000);

  try{
    const existingRow = findRespondentRow_(record.respondent_id);
    if(existingRow > 0){
      return {ok:true,duplicate:true,row:existingRow,status:getStatus_()};
    }

    const status = getStatus_();
    if(!status.open){
      return {
        ok:false,
        reason:status.reason,
        message:status.message,
        status:status
      };
    }

    const config = getConfig_();
    const sheet = getBook_().getSheetByName(RESPONSE_SHEET);
    const enriched = Object.assign({},record,{
      institution_name:config.institutionName,
      server_saved_at:new Date().toISOString()
    });

    const headers = ensureHeaders_(enriched);
    const row = headers.map(key=>enriched[key] !== undefined ? enriched[key] : '');
    sheet.appendRow(row);

    return {
      ok:true,
      duplicate:false,
      row:sheet.getLastRow(),
      status:getStatus_()
    };

  }finally{
    lock.releaseLock();
  }
}

function doGet(e){
  const p = (e && e.parameter) || {};
  const action = String(p.action || 'status');

  try{
    if(action === 'status'){
      return jsonp_(getStatus_(),p.callback);
    }

    if(action === 'lookup'){
      const id = String(p.respondent_id || '');
      const row = findRespondentRow_(id);

      return jsonp_({
        ok:true,
        found:row > 0,
        row:row > 0 ? row : null,
        status:getStatus_()
      },p.callback);
    }

    return jsonp_({ok:false,message:'지원하지 않는 요청입니다.'},p.callback);

  }catch(err){
    return jsonp_({
      ok:false,
      message:String(err && err.message ? err.message : err)
    },p.callback);
  }
}

function doPost(e){
  try{
    const raw = e && e.parameter ? e.parameter.payload : '';
    if(!raw) return json_({ok:false,message:'payload가 없습니다.'});

    const record = JSON.parse(raw);
    return json_(saveRecord_(record));

  }catch(err){
    return json_({
      ok:false,
      message:String(err && err.message ? err.message : err)
    });
  }
}
