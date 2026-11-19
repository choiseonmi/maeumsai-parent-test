# 마음사이 부모 자기이해검사 — 기관 실제 운영 설정

이 저장소는 36문항 유료 부모 자기이해검사의 기관 운영용 버전입니다.

## 운영 구조
참여자 링크 접속 → 서버 이용가능 여부 확인 → 기본정보 → 36문항 검사 → 추가확인(필요 시) → Google Sheets 저장 → 저장 확인 후 개인 결과 즉시 표시

## Google Sheets
1. 새 Google Sheets 생성
2. 확장 프로그램 → Apps Script
3. backend/Code.gs 전체 붙여넣기
4. setupSystem() 1회 실행
5. 관리 탭에서 INSTITUTION_NAME 입력
6. MAX_USERS는 기본 200명
7. STATUS는 OPEN / CLOSED로 직접 통제
8. Apps Script를 웹 앱으로 배포하고 /exec URL을 복사
9. js/script.js의 SERVICE_CONFIG.endpoint에 URL 입력

## 담당자 미리보기
현재는 담당자 확인을 위해 ?preview=1 접속을 허용합니다.
미리보기 응답은 Google Sheets에 저장되지 않고 이용인원도 차감하지 않습니다.
실제 운영 전에는 js/script.js의 ENABLE_PREVIEW를 false로 변경하는 것을 권장합니다.

## 개인정보
이름, 전화번호, 이메일은 수집하지 않습니다.
기관 분석에 필요한 익명 응답과 범주형 기본정보만 저장합니다.

본 검사는 교육용 부모 자기이해 자료이며 표준화된 심리검사, 임상진단, 아동학대 위험평가 도구가 아닙니다.
