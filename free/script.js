const $=(s)=>document.querySelector(s), $$=(s)=>[...document.querySelectorAll(s)];
const screens={start:$('.start-screen'),age:$('.age-screen'),quiz:$('.quiz-screen'),tie:$('.tie-screen'),result:$('.result-screen')};
const typeMeta={
1:{animal:'황소',title:'기준을 세워주는 부모',keywords:'기준 · 책임 · 원칙',statement:'아이에게 필요한 기준을 분명히 알려주고 바로잡아주는 방식을 자주 사용하고 있어요.',strength:'기준과 약속을 분명하게 알려주는 힘',balance:'충분히 잘하는 것과 완벽하게 하는 것은 다릅니다.',quote:'“내 마음도 먼저 들어준 뒤 이야기해주면 좋겠어.”',tie:'아이에게 필요한 기준과 약속을 분명히 알려주고, 잘못된 부분은 바로잡아주려는 편이다.'},
2:{animal:'강아지',title:'따뜻하게 돌보는 부모',keywords:'돌봄 · 관계 · 배려',statement:'아이에게 필요한 것을 살피고 먼저 챙겨주는 방식을 자주 사용하고 있어요.',strength:'아이의 필요를 빠르게 알아차리고 챙겨주는 힘',balance:'잘 돌보는 것과 대신해주는 것은 다릅니다.',quote:'“나도 먼저 한번 해보고 싶어.”',tie:'아이에게 필요한 것이 무엇인지 먼저 살피고, 힘들어 보이면 도와주려는 편이다.'},
3:{animal:'독수리',title:'성장을 이끌어주는 부모',keywords:'성장 · 목표 · 성취',statement:'아이에게 목표를 세우고 더 잘할 수 있도록 이끌어주는 방식을 자주 사용하고 있어요.',strength:'아이의 가능성을 발견하고 성장하도록 돕는 힘',balance:'성장에는 결과뿐 아니라 과정도 포함됩니다.',quote:'“결과뿐 아니라 내가 노력한 과정도 봐줬으면 좋겠어.”',tie:'아이가 더 잘할 수 있도록 목표를 세우고, 해낼 방법을 함께 찾아주는 편이다.'},
4:{animal:'고양이',title:'마음을 알아주는 부모',keywords:'감정 · 개성 · 공감',statement:'아이의 감정과 마음을 먼저 이해해주려는 방식을 자주 사용하고 있어요.',strength:'아이의 감정과 개성을 존중하고 이해해주는 힘',balance:'아이의 감정을 이해하는 것과 대신 느끼는 것은 다릅니다.',quote:'“내 마음을 있는 그대로 들어주면 좋겠어.”',tie:'아이의 행동보다 그 안의 감정과 마음을 먼저 이해하려는 편이다.'},
5:{animal:'부엉이',title:'차분히 이해하는 부모',keywords:'이해 · 관찰 · 생각',statement:'바로 판단하기보다 상황을 살펴보고 이유를 이해하려는 방식을 자주 사용하고 있어요.',strength:'성급하게 판단하지 않고 상황을 살펴보는 힘',balance:'충분히 생각하는 것과 반응을 미루는 것은 다릅니다.',quote:'“잠깐 쉬어도 괜찮아. 나중에 다시 이야기해주면 좋겠어.”',tie:'바로 판단하거나 개입하기보다 상황과 이유를 충분히 살펴보는 편이다.'},
6:{animal:'사슴',title:'안전을 살피는 부모',keywords:'안전 · 신뢰 · 준비',statement:'문제가 생기지 않도록 미리 확인하고 준비해주는 방식을 자주 사용하고 있어요.',strength:'위험과 어려움을 미리 살피고 준비해주는 힘',balance:'안전을 지켜주는 것과 모든 위험을 없애는 것은 다릅니다.',quote:'“나도 스스로 해볼 수 있다고 믿어주면 좋겠어.”',tie:'문제가 생기지 않도록 미리 위험을 살피고 필요한 것을 준비하는 편이다.'},
7:{animal:'원숭이',title:'경험을 열어주는 부모',keywords:'즐거움 · 경험 · 가능성',statement:'새로운 방법을 찾아주고 즐겁게 해볼 수 있도록 격려하는 방식을 자주 사용하고 있어요.',strength:'새로운 경험과 가능성을 열어주는 힘',balance:'즐겁게 해주는 것과 힘든 감정을 없애주는 것은 다릅니다.',quote:'“힘든 이야기도 조금만 더 들어줬으면 좋겠어.”',tie:'막히거나 힘든 상황에서는 새로운 방법이나 다른 가능성을 찾아보는 편이다.'},
8:{animal:'호랑이',title:'든든하게 지켜주는 부모',keywords:'보호 · 주도 · 결단',statement:'필요한 순간에는 직접 나서서 보호하고 해결해주는 방식을 자주 사용하고 있어요.',strength:'필요한 순간 빠르게 나서 아이를 보호하는 힘',balance:'지켜주는 것과 대신 결정하는 것은 다릅니다.',quote:'“결정하기 전에 내 생각도 먼저 물어봐주면 좋겠어.”',tie:'아이가 어려움을 겪으면 필요한 순간에는 내가 직접 나서서 해결해주는 편이다.'},
9:{animal:'코끼리',title:'편안함을 만들어주는 부모',keywords:'평화 · 조화 · 안정',statement:'갈등을 줄이고 서로 편안하게 맞춰가는 방식을 자주 사용하고 있어요.',strength:'아이와 가족이 편안하도록 관계를 조율하는 힘',balance:'평화를 만드는 것과 불편함을 덮어두는 것은 다릅니다.',quote:'“불편한 일이 있어도 나중에 다시 이야기해주면 좋겠어.”',tie:'갈등이 커지지 않도록 서로 맞출 수 있는 방법을 찾고 편안하게 조율하는 편이다.'}
};
const questions=[
{q:'아이가 숙제나 해야 할 일을 계속 미루고 있을 때 나는?',c:[[1,'해야 할 약속과 기준을 다시 분명하게 알려준다.'],[2,'무엇이 힘든지 살피고 필요한 도움을 먼저 챙긴다.'],[3,'시작하기 쉬운 목표를 정해 하나씩 해보도록 돕는다.']]},
{q:'아이가 친구 때문에 마음이 불편하다고 이야기할 때 나는?',c:[[4,'그 상황에서 아이가 어떤 마음이었는지 충분히 들어본다.'],[5,'어떤 일이 있었는지 차근차근 정리하며 상황을 이해해본다.'],[6,'혹시 다시 문제가 생길 부분이 있는지 살펴보고 대비한다.']]},
{q:'가족이 함께 하려던 계획이 갑자기 틀어졌을 때 나는?',c:[[7,'대신 할 수 있는 재미있는 다른 방법을 찾아본다.'],[8,'우선 방향을 정하고 필요한 일을 빠르게 해결한다.'],[9,'가족 모두가 편할 수 있도록 서로 맞출 방법을 찾는다.']]},
{q:'아이가 내가 생각했던 것과 전혀 다른 방식으로 과제나 활동을 하고 있을 때 나는?',c:[[1,'꼭 지켜야 할 부분이 있다면 기준을 분명하게 알려준다.'],[4,'아이만의 생각과 표현방식으로 보고 존중해본다.'],[7,'새로운 방식도 경험이 될 수 있으니 일단 시도하게 해본다.']]},
{q:'아이가 혼자 해결하기 어려워 보이는 문제를 만났을 때 나는?',c:[[2,'지금 무엇이 필요한지 살펴보고 필요한 부분을 도와준다.'],[5,'바로 개입하기보다 어디에서 막히는지 먼저 관찰한다.'],[8,'아이에게 도움이 꼭 필요하다고 판단되면 내가 직접 나선다.']]},
{q:'아이가 새로운 활동이나 수업을 시작하려고 할 때 나는?',c:[[3,'이 경험이 아이의 성장에 어떻게 도움이 될지 생각한다.'],[6,'준비할 것과 걱정되는 부분이 없는지 먼저 확인한다.'],[9,'아이가 부담스럽지 않게 적응할 수 있는 속도를 살펴본다.']]},
{q:'집에서 지켜야 할 규칙을 두고 아이와 의견이 다를 때 나는?',c:[[1,'왜 필요한 규칙인지 설명하고 중요한 기준은 유지한다.'],[5,'서로 왜 그렇게 생각하는지 충분히 들어보고 판단한다.'],[9,'꼭 필요한 부분은 지키면서 서로 맞출 수 있는 방법을 찾는다.']]},
{q:'아이가 처음 해보는 일을 앞두고 긴장하고 있을 때 나는?',c:[[2,'아이가 안심할 수 있도록 옆에서 필요한 것을 챙겨준다.'],[6,'미리 준비하거나 확인하면 좋을 부분을 함께 살펴본다.'],[7,'재미있을 수 있는 부분을 이야기하며 새로운 경험을 기대하게 한다.']]},
{q:'아이가 스스로 꽤 어려운 목표에 도전하고 싶다고 할 때 나는?',c:[[3,'목표를 이루기 위해 어떤 과정을 밟으면 좋을지 함께 계획한다.'],[4,'아이가 정말 무엇을 원하는지, 그 선택이 아이답게 느껴지는지 이야기해본다.'],[8,'아이가 결정했다면 필요한 순간에는 든든하게 밀어주고 지켜준다.']]},
{q:'아이가 안전과 관련된 중요한 약속을 어겼을 때 나는?',c:[[1,'지켜야 하는 약속과 기준을 다시 분명하게 알려준다.'],[6,'어떤 위험이 있었는지 함께 확인하고 다음 상황에 대비한다.'],[8,'위험하다고 판단되면 우선 내가 직접 개입해서 상황을 정리한다.']]},
{q:'형제나 가족 사이에 갈등이 생겼을 때 나는?',c:[[2,'누가 지금 더 힘든지 살피고 필요한 부분을 먼저 챙긴다.'],[4,'각자가 어떤 감정을 느꼈는지 충분히 표현하도록 들어준다.'],[9,'서로 조금씩 맞춰 다시 편안해질 수 있는 방법을 찾는다.']]},
{q:'아이가 공부나 활동을 하다가 막혀서 진도가 나가지 않을 때 나는?',c:[[3,'작은 목표를 다시 정해서 하나씩 해결해보게 한다.'],[5,'어디에서 막혔는지 원인과 방법을 먼저 살펴본다.'],[7,'지금 방법이 안 된다면 전혀 다른 방식도 시도해보게 한다.']]}
];
let age='',index=0,answers=[],display=[],tied=[],tieIndex=0,tieWinner=null;
function show(name){Object.values(screens).forEach(s=>s.classList.add('hide'));screens[name].classList.remove('hide');window.scrollTo({top:0,behavior:'smooth'})}
$('.btn-start').addEventListener('click',()=>show('age'));
$('.btn-age-back').addEventListener('click',()=>show('start'));
$$('.age-option').forEach(b=>b.addEventListener('click',()=>{age=b.dataset.age;index=0;answers=[];display=questions.map(x=>({q:x.q,c:[...x.c].sort(()=>Math.random()-.5)}));show('quiz');renderQ()}));
function renderQ(){const x=display[index];$('.current-number').textContent=index+1;$('.progress-bar').style.width=((index+1)/12*100)+'%';$('.question-title').textContent=x.q;const list=$('.choice-list');list.innerHTML='';x.c.forEach((a,i)=>{const b=document.createElement('button');b.className='choice-btn';b.innerHTML='<b>'+String.fromCharCode(65+i)+'</b>'+a[1];b.addEventListener('click',()=>{answers[index]=a[0];if(index<11){index++;renderQ()}else finish()});list.appendChild(b)});$('.btn-prev').style.visibility=index===0?'hidden':'visible'}
$('.btn-prev').addEventListener('click',()=>{if(index>0){index--;renderQ()}});
function finish(){const scores={1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0};answers.forEach(t=>scores[t]++);const max=Math.max(...Object.values(scores));tied=Object.keys(scores).map(Number).filter(t=>scores[t]===max);if(tied.length===1){renderResult(tied[0])}else{tieWinner=tied[0];tieIndex=1;show('tie');renderTie()}}
function renderTie(){if(tieIndex>=tied.length){renderResult(tieWinner);return}const other=tied[tieIndex];const opts=[[tieWinner,typeMeta[tieWinner].tie],[other,typeMeta[other].tie]].sort(()=>Math.random()-.5);const box=$('.tie-list');box.innerHTML='';opts.forEach((o,i)=>{const b=document.createElement('button');b.className='tie-btn';b.innerHTML='<b>'+String.fromCharCode(65+i)+'</b>'+o[1];b.addEventListener('click',()=>{tieWinner=o[0];tieIndex++;renderTie()});box.appendChild(b)})}
function renderResult(t){const m=typeMeta[t];$('.result-age').textContent='자녀 연령 · '+age;$('.result-image').src='../images/type'+String(t).padStart(2,'0')+'.png';$('.result-image').alt=m.title;$('.result-code').textContent='TYPE '+String(t).padStart(2,'0')+' · '+m.animal;$('.result-title').textContent=m.title;$('.result-keywords').textContent=m.keywords;$('.result-statement').textContent=m.statement;$('.strength-title').textContent=m.strength;$('.strength-text').textContent='이 성향은 아이를 대할 때 자연스럽게 발휘되는 나만의 강점이에요.';$('.balance-text').textContent=m.balance;$('.child-quote').textContent=m.quote;show('result')}
$('.btn-restart').addEventListener('click',()=>{age='';index=0;answers=[];tied=[];show('start')});
