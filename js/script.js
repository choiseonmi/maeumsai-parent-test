// =========================================================
// 마음사이 무료 부모유형검사 - 캠페인 버전
// Vanilla JavaScript / Basic JS
// =========================================================


// DOM 선택
const startScreen = document.querySelector('.start-screen');
const ageScreen = document.querySelector('.age-screen');
const quizScreen = document.querySelector('.quiz-screen');
const resultScreen = document.querySelector('.result-screen');

const btnStart = document.querySelector('.btn-start');
const ageOptions = document.querySelectorAll('.age-option');
const btnAgeBack = document.querySelector('.btn-age-back');
const btnPrev = document.querySelector('.btn-prev');
const btnNext = document.querySelector('.btn-next');
const btnRestart = document.querySelector('.btn-restart');

const currentNumber = document.querySelector('.current-number');
const progressBar = document.querySelector('.progress-bar');
const questionTitle = document.querySelector('.question-title');
const choiceList = document.querySelector('.choice-list');

const resultImage = document.querySelector('.result-image');
const resultAge = document.querySelector('.result-age');

const tieChoiceScreen = document.querySelector('.tie-choice-screen');
const tieChoiceList = document.querySelector('.tie-choice-list');

const onsiteResult = document.querySelector('.onsite-result');

const resultCode = document.querySelector('.result-code');
const resultKeywords = document.querySelector('.result-keywords');
const resultParentTitle = document.querySelector('.result-parent-title');
const resultStatement = document.querySelector('.result-statement');
const resultSummary = document.querySelector('.result-summary');

const sheetGuideNumber = document.querySelector('.sheet-guide-number');
const facilitatorScript = document.querySelector('.facilitator-script');

const scoreGrid = document.querySelector('.score-grid');


// 검사 버전
const TEST_VERSION = 'campaign-free-6.0-onsite';


// 9개 유형 결과 데이터
// '어떤 부모'라는 고정 라벨보다,
// '아이를 대할 때 어떤 방식을 자주 사용하는지'를 문장으로 보여줍니다.
const typeMeta = {

    1:{
        animal:'황소',
        title:'기준을 세워주는 부모',
        facilitatorStrength:'아이에게 분명한 기준과 책임감을 알려주는 힘',
        name:'기준과 책임',
        keywords:'기준 · 책임 · 원칙',
        statement:'아이를 대할 때, 해야 할 기준을 분명히 알려주고 바로잡아주는 방식을 자주 사용하고 있어요.',
        summary:'약속과 규칙을 그냥 넘기기보다 무엇이 중요한지 알려주고, 아이가 책임감 있게 생활하도록 돕는 편이에요.',
        strengths:[
            '아이에게 무엇을 지켜야 하는지 분명하게 알려줄 수 있어요.',
            '생활 속 약속과 규칙을 꾸준히 지키도록 도와줘요.',
            '잘못된 부분을 그냥 넘기지 않고 더 나은 방법을 알려줘요.'
        ]
    },

    2:{
        animal:'강아지',
        title:'따뜻하게 돌보는 부모',
        facilitatorStrength:'아이의 필요를 빠르게 알아차리고 챙겨주는 힘',
        name:'돌봄과 관계',
        keywords:'돌봄 · 관계 · 배려',
        statement:'아이를 대할 때, 필요한 것을 살피고 먼저 챙겨주는 방식을 자주 사용하고 있어요.',
        summary:'아이의 표정이나 상황을 살피며 무엇이 필요한지 빠르게 알아차리고, 힘들어 보이면 먼저 손을 내미는 편이에요.',
        strengths:[
            '아이가 힘들어하는 순간을 빠르게 알아차려요.',
            '필요한 것을 세심하게 챙기며 안정감을 줄 수 있어요.',
            '아이에게 내가 네 편이라는 느낌을 잘 전해줘요.'
        ]
    },

    3:{
        animal:'독수리',
        title:'성장을 이끌어주는 부모',
        facilitatorStrength:'아이의 가능성을 발견하고 성장하도록 돕는 힘',
        name:'성장과 성취',
        keywords:'성장 · 목표 · 성취',
        statement:'아이를 대할 때, 목표를 세우고 더 잘할 수 있도록 이끌어주는 방식을 자주 사용하고 있어요.',
        summary:'아이가 가진 가능성을 발견하고, 포기하기보다 한 단계 더 성장할 수 있는 방법을 함께 찾아주는 편이에요.',
        strengths:[
            '아이의 가능성과 잘하는 점을 발견해줘요.',
            '막막한 일을 작은 목표로 나누어 시작하게 도와줘요.',
            '실패해도 다시 해볼 수 있도록 힘을 북돋아줘요.'
        ]
    },

    4:{
        animal:'고양이',
        title:'마음을 알아주는 부모',
        facilitatorStrength:'아이의 감정과 개성을 존중하고 이해해주는 힘',
        name:'감정과 개성',
        keywords:'감정 · 개성 · 공감',
        statement:'아이를 대할 때, 감정과 마음을 먼저 이해해주려는 방식을 자주 사용하고 있어요.',
        summary:'겉으로 보이는 행동만 보기보다 아이가 왜 그런 마음이 들었는지 살피고, 아이만의 생각과 표현을 존중하는 편이에요.',
        strengths:[
            '아이의 표정과 감정 변화를 세심하게 알아차려요.',
            '아이만의 생각과 개성을 존중해줄 수 있어요.',
            '아이에게 마음을 말해도 괜찮다는 느낌을 줄 수 있어요.'
        ]
    },

    5:{
        animal:'부엉이',
        title:'차분히 이해하는 부모',
        facilitatorStrength:'성급하게 판단하지 않고 상황을 살펴보는 힘',
        name:'이해와 관찰',
        keywords:'이해 · 관찰 · 생각',
        statement:'아이를 대할 때, 바로 판단하기보다 상황을 살펴보고 이유를 이해하려는 방식을 자주 사용하고 있어요.',
        summary:'문제가 생기면 바로 결론을 내리기보다 무슨 일이 있었는지 차분히 살펴보고, 원인과 방법을 생각해보는 편이에요.',
        strengths:[
            '문제가 생겨도 한 번 더 상황을 살펴볼 수 있어요.',
            '아이 행동의 이유와 원인을 차분히 생각해요.',
            '감정적으로 몰아붙이기보다 방법을 찾아줄 수 있어요.'
        ]
    },

    6:{
        animal:'사슴',
        title:'안전을 살피는 부모',
        facilitatorStrength:'위험과 어려움을 미리 살피고 준비해주는 힘',
        name:'안전과 신뢰',
        keywords:'안전 · 신뢰 · 준비',
        statement:'아이를 대할 때, 문제가 생기지 않도록 미리 확인하고 준비해주는 방식을 자주 사용하고 있어요.',
        summary:'아이에게 위험하거나 어려운 일이 생기지 않도록 먼저 살피고, 필요한 것을 미리 준비해 안정적으로 지낼 수 있게 돕는 편이에요.',
        strengths:[
            '아이에게 생길 수 있는 위험을 미리 살펴봐요.',
            '준비해야 할 것을 꼼꼼하게 챙길 수 있어요.',
            '예상치 못한 상황에서도 아이가 안전하도록 대비해요.'
        ]
    },

    7:{
        animal:'원숭이',
        title:'경험을 열어주는 부모',
        facilitatorStrength:'새로운 경험과 가능성을 열어주는 힘',
        name:'즐거움과 가능성',
        keywords:'즐거움 · 경험 · 가능성',
        statement:'아이를 대할 때, 새로운 방법을 찾아주고 즐겁게 해볼 수 있도록 격려하는 방식을 자주 사용하고 있어요.',
        summary:'일이 잘 풀리지 않을 때도 다른 방법을 찾고, 아이가 새로운 경험을 두려워하기보다 호기심을 가질 수 있도록 도와주는 편이에요.',
        strengths:[
            '아이에게 다양한 경험과 새로운 가능성을 열어줘요.',
            '실패하거나 막혀도 다른 방법을 찾도록 도와줘요.',
            '아이와 함께 즐거운 분위기를 만드는 힘이 있어요.'
        ]
    },

    8:{
        animal:'호랑이',
        title:'든든하게 지켜주는 부모',
        facilitatorStrength:'필요한 순간 빠르게 나서 아이를 보호하는 힘',
        name:'보호와 주도',
        keywords:'보호 · 주도 · 결단',
        statement:'아이를 대할 때, 필요한 순간에는 직접 나서서 보호하고 해결해주는 방식을 자주 사용하고 있어요.',
        summary:'아이에게 실제 도움이 필요하거나 위험하다고 느끼면 머뭇거리기보다 빠르게 판단하고 직접 행동하는 편이에요.',
        strengths:[
            '아이에게 꼭 도움이 필요한 순간 빠르게 행동할 수 있어요.',
            '부당하거나 위험한 상황에서 아이를 든든하게 지켜줘요.',
            '결정이 필요한 상황에서 방향을 분명하게 잡아줘요.'
        ]
    },

    9:{
        animal:'코끼리',
        title:'편안함을 만들어주는 부모',
        facilitatorStrength:'아이와 가족이 편안하도록 관계를 조율하는 힘',
        name:'평화와 조화',
        keywords:'평화 · 조화 · 안정',
        statement:'아이를 대할 때, 갈등을 줄이고 서로 편안하게 맞춰가는 방식을 자주 사용하고 있어요.',
        summary:'아이를 급하게 몰아붙이기보다 기다려주고, 가족 사이의 의견이 다를 때도 모두가 받아들일 수 있는 방법을 찾는 편이에요.',
        strengths:[
            '아이를 재촉하기보다 기다려줄 수 있어요.',
            '가족의 서로 다른 입장을 부드럽게 조율해요.',
            '아이가 편안함을 느낄 수 있는 분위기를 만들어줘요.'
        ]
    }

};


// 연령에 따라 결과의 생활장면·조언·실제 문장을 바꿉니다.
const ageResultMeta = {

    infant:{

        1:{
            scene:'밥 먹기, 씻기, 정리하기처럼 아이가 아직 서툰 일을 할 때 “아니, 그렇게 하면 안 돼”라는 말이 자주 나오면 아이는 시도보다 실수를 더 의식할 수 있어요.',
            quote:'“나는 자꾸 틀리는 것 같아.”',
            explain:'이 시기에는 완성도보다 직접 해보는 경험이 중요해요. 기준은 필요하지만 한 번에 많은 것을 고치려고 하지 않아도 괜찮아요.',
            actions:[
                '한 번에 꼭 필요한 규칙 한 가지만 짧고 분명하게 알려주세요.',
                '고칠 점을 말하기 전에 아이가 해낸 행동을 먼저 하나 찾아 말해주세요.'
            ],
            talk:'“여기까지 네가 했네. 이 부분만 같이 다시 해보자.”'
        },

        2:{
            scene:'옷 입기, 장난감 정리, 간단한 준비를 아이가 혼자 해보려는데 답답해서 부모가 먼저 해버리면 스스로 해보는 기회가 줄어들 수 있어요.',
            quote:'“나도 내가 먼저 해보고 싶어.”',
            explain:'잘 챙겨주는 힘은 큰 장점이에요. 다만 아이가 할 수 있는 일까지 먼저 해주면 도움을 기다리는 것이 익숙해질 수 있어요.',
            actions:[
                '바로 손을 내밀기 전에 잠깐 기다리며 아이가 어디까지 하는지 지켜봐주세요.',
                '도움이 필요해 보여도 먼저 “도와줄까?”라고 물어본 뒤 도와주세요.'
            ],
            talk:'“네가 먼저 해볼래? 어려우면 내가 도와줄게.”'
        },

        3:{
            scene:'퍼즐, 글자, 숫자, 운동 같은 활동을 할 때 “조금만 더”, “다시 해보자”가 많아지면 아이는 놀이보다 잘해야 한다는 부담을 느낄 수 있어요.',
            quote:'“그냥 해보는 것도 괜찮았으면 좋겠어.”',
            explain:'성장을 돕는 힘은 좋지만, 어린 아이에게는 결과보다 해보는 과정과 즐거움도 중요해요.',
            actions:[
                '잘했는지 평가하기 전에 무엇이 재미있었는지 먼저 물어봐주세요.',
                '끝까지 하지 못해도 시도한 행동 자체를 구체적으로 칭찬해주세요.'
            ],
            talk:'“끝까지 못 해도 괜찮아. 네가 해본 게 멋진데?”'
        },

        4:{
            scene:'아이가 울거나 화를 낼 때 “속상했지?”, “화난 거지?”라고 부모가 마음을 먼저 정해주면 아이가 자신의 감정을 직접 알아가는 기회가 줄어들 수 있어요.',
            quote:'“내 마음을 내가 말해보고 싶어.”',
            explain:'아이의 마음을 알아차리는 힘은 큰 장점이에요. 다만 감정을 맞히기보다 아이가 표현할 수 있도록 기다려주는 것도 필요해요.',
            actions:[
                '아이의 표정을 보고 바로 감정 이름을 붙이기보다 “무슨 일이 있었어?”라고 물어보세요.',
                '아이가 바로 말하지 못해도 재촉하지 말고 잠시 기다려주세요.'
            ],
            talk:'“내가 짐작하지 않을게. 어떤 마음인지 말해주고 싶을 때 말해줘.”'
        },

        5:{
            scene:'아이가 울거나 떼를 쓸 때 이유를 찾고 설명하려는 마음이 앞서면 아이는 지금 필요한 위로나 반응이 늦다고 느낄 수 있어요.',
            quote:'“지금은 먼저 안아줬으면 좋겠어.”',
            explain:'상황을 차분히 보는 힘은 좋지만, 어린 아이는 이유를 설명하기 전에 먼저 안정되는 시간이 필요할 때가 많아요.',
            actions:[
                '이유를 묻기 전에 아이가 진정할 수 있도록 가까이 있어주세요.',
                '아이가 조금 안정된 뒤에 “무슨 일이 있었는지 같이 볼까?”라고 이야기해주세요.'
            ],
            talk:'“지금 많이 힘들구나. 괜찮아질 때까지 여기 있을게.”'
        },

        6:{
            scene:'놀이터, 계단, 새로운 활동에서 “조심해”, “그러다 다쳐”, “내가 해줄게”가 자주 나오면 아이는 혼자 해보는 일을 위험하게 느낄 수 있어요.',
            quote:'“나도 혼자 해볼 수 있어.”',
            explain:'안전을 살피는 것은 꼭 필요한 힘이에요. 다만 큰 위험이 아니라면 작은 시도와 실수도 아이에게 중요한 경험이 됩니다.',
            actions:[
                '위험한 행동과 서툴지만 해볼 수 있는 행동을 구분해보세요.',
                '안전한 범위에서는 아이가 먼저 해본 뒤 필요할 때 도와주세요.'
            ],
            talk:'“내가 옆에서 보고 있을게. 네가 먼저 해봐.”'
        },

        7:{
            scene:'아이가 속상해서 울 때 장난감이나 간식으로 바로 기분을 바꿔주면 아이는 속상한 마음을 충분히 표현하지 못할 수 있어요.',
            quote:'“속상한 마음도 조금 더 있어도 돼?”',
            explain:'분위기를 바꿔주는 힘은 큰 장점이에요. 하지만 기분을 바꾸기 전에 아이의 속상함을 잠깐 함께 있어주는 시간이 필요해요.',
            actions:[
                '새로운 놀이를 제안하기 전에 “속상했구나”라고 먼저 반응해주세요.',
                '아이가 조금 진정한 뒤에 다른 활동을 제안해주세요.'
            ],
            talk:'“속상했구나. 조금 울어도 괜찮아. 내가 옆에 있을게.”'
        },

        8:{
            scene:'놀이터나 또래 갈등에서 아이가 불편해 보인다고 바로 부모가 나서서 해결하면 아이가 자기 방식으로 대응해볼 기회가 줄어들 수 있어요.',
            quote:'“내가 먼저 해볼 수도 있어.”',
            explain:'필요한 순간 직접 보호하는 힘은 중요해요. 다만 즉시 위험한 상황이 아니라면 아이가 먼저 표현해볼 시간을 줄 수 있어요.',
            actions:[
                '바로 개입하기 전에 아이가 도움을 원하는지 표정과 말을 잠깐 살펴보세요.',
                '아이가 해볼 수 있는 상황이면 먼저 말하거나 행동해볼 기회를 주세요.'
            ],
            talk:'“네가 먼저 해볼래, 아니면 내가 같이 도와줄까?”'
        },

        9:{
            scene:'아이가 화를 내거나 가족끼리 부딪힐 때 빨리 달래고 상황을 끝내려고 하면 중요한 마음이나 문제가 그냥 넘어갈 수 있어요.',
            quote:'“불편한 이야기도 해도 되는 거지?”',
            explain:'편안한 분위기를 만들어주는 것은 큰 힘이에요. 다만 갈등이 사라진 것처럼 넘기기보다 조금 뒤에 다시 이야기해주는 것이 좋아요.',
            actions:[
                '아이의 감정이 가라앉을 시간을 주되 문제 자체를 없던 일로 만들지 마세요.',
                '조금 진정된 뒤 무엇이 불편했는지 짧게 다시 이야기해주세요.'
            ],
            talk:'“지금은 조금 쉬자. 괜찮아지면 아까 일을 다시 이야기해보자.”'
        }
    },


    child:{

        1:{
            scene:'숙제, 준비물, 정리정돈에서 틀린 부분을 바로 지적하는 일이 많아지면 아이는 무엇을 잘했는지보다 “또 틀렸다”는 느낌을 더 크게 받을 수 있어요.',
            quote:'“잘한 것도 먼저 봐줬으면 좋겠어.”',
            explain:'기준을 알려주는 힘은 아이의 생활습관을 만드는 데 도움이 돼요. 다만 꼭 고쳐야 할 것과 그냥 부모가 원하는 방식을 구분해보는 것도 필요해요.',
            actions:[
                '잘못한 점을 말하기 전에 아이가 스스로 한 부분을 먼저 한 가지 이야기해주세요.',
                '한 번에 여러 가지를 고치기보다 지금 꼭 필요한 한 가지만 말해주세요.'
            ],
            talk:'“여기까지는 네가 잘했네. 이 한 가지만 같이 다시 보자.”'
        },

        2:{
            scene:'숙제, 준비물, 친구 문제를 아이가 스스로 해보기 전에 부모가 먼저 챙겨주면 아이는 도움을 기다리는 것이 더 익숙해질 수 있어요.',
            quote:'“나도 먼저 해보고 싶어.”',
            explain:'세심하게 챙기는 것은 큰 장점이에요. 이제는 아이가 할 수 있는 부분을 조금씩 넘겨주는 것이 자기 힘을 키우는 데 도움이 돼요.',
            actions:[
                '준비물이나 숙제를 부모가 먼저 확인하기 전에 아이가 먼저 확인하게 해보세요.',
                '도와주기 전에 “어디까지 네가 해볼래?”라고 물어보세요.'
            ],
            talk:'“네가 먼저 해보고, 막히는 부분이 있으면 말해줘.”'
        },

        3:{
            scene:'시험점수, 수행평가, 운동 결과처럼 결과를 먼저 묻는 일이 많아지면 아이는 과정이나 노력보다 잘하는 것이 더 중요하다고 느낄 수 있어요.',
            quote:'“잘해야 인정받는 것 같아.”',
            explain:'목표를 세우고 성장하도록 돕는 힘은 좋아요. 결과를 확인하기 전에 아이가 어떤 과정을 거쳤는지도 같이 봐주세요.',
            actions:[
                '“몇 점이야?”보다 “어떤 게 제일 어려웠어?”를 먼저 물어보세요.',
                '결과와 상관없이 아이가 시도하거나 꾸준히 한 행동을 구체적으로 말해주세요.'
            ],
            talk:'“결과도 궁금하지만 네가 어떻게 해봤는지가 더 궁금해.”'
        },

        4:{
            scene:'친구 문제나 속상한 일을 들었을 때 “너 서운했구나”, “분명 화났겠다”라고 마음을 먼저 정해주면 아이는 자기 감정과 조금 다르다고 느낄 수 있어요.',
            quote:'“내 마음은 내가 말해보고 싶어.”',
            explain:'아이의 마음을 세심하게 보는 것은 큰 장점이에요. 감정을 해석해주기보다 아이가 자기 말로 설명하도록 기다려주면 더 좋아요.',
            actions:[
                '아이의 감정을 맞히려고 하기보다 “너는 어떻게 느꼈어?”라고 물어보세요.',
                '아이가 “잘 모르겠어”라고 해도 바로 답을 대신 만들어주지 마세요.'
            ],
            talk:'“내가 짐작하지 않을게. 너는 어떤 마음이었는지 들려줄래?”'
        },

        5:{
            scene:'아이가 속상한 일을 이야기할 때 사실관계나 해결방법부터 묻기 시작하면 아이는 “지금은 그냥 내 편이 필요했는데”라고 느낄 수 있어요.',
            quote:'“지금은 먼저 내 이야기를 들어줬으면 좋겠어.”',
            explain:'차분하게 문제를 정리하는 힘은 좋아요. 다만 해결책이 필요한지, 먼저 들어주기만 하면 되는지를 확인해보세요.',
            actions:[
                '질문을 이어가기 전에 아이가 이야기를 끝낼 때까지 한 번 들어주세요.',
                '해결책을 말하기 전에 “같이 방법을 찾을까, 그냥 들어줄까?”라고 물어보세요.'
            ],
            talk:'“지금은 같이 생각해볼까, 아니면 그냥 들어줄까?”'
        },

        6:{
            scene:'외출, 친구와의 약속, 새로운 활동을 할 때 확인과 걱정이 많아지면 아이는 부모가 자신을 믿지 않는다고 느낄 수 있어요.',
            quote:'“나도 스스로 해볼 수 있다고 믿어줘.”',
            explain:'안전을 살피는 힘은 꼭 필요해요. 다만 아이가 감당할 수 있는 작은 실수와 책임까지 미리 막을 필요는 없어요.',
            actions:[
                '꼭 확인해야 할 안전수칙 몇 가지만 정하고 나머지는 아이에게 맡겨보세요.',
                '문제가 생길까 먼저 막기보다 아이가 도움을 요청할 수 있다는 것을 알려주세요.'
            ],
            talk:'“필요한 약속만 확인하고, 나머지는 네가 먼저 해봐. 필요하면 도와줄게.”'
        },

        7:{
            scene:'아이가 친구 문제나 실패로 속상해할 때 “괜찮아, 다른 거 하면 되지”라고 빨리 기분을 바꿔주면 아이는 속상한 마음이 중요하지 않은 것처럼 느낄 수 있어요.',
            quote:'“속상한 이야기도 조금 더 들어줬으면 좋겠어.”',
            explain:'다른 가능성을 찾아주는 힘은 좋아요. 하지만 새로운 방법을 제안하기 전에 지금의 속상함을 충분히 들어주는 시간이 필요해요.',
            actions:[
                '바로 해결책을 제안하기 전에 아이의 이야기를 끝까지 들어주세요.',
                '“다른 방법”은 아이가 조금 진정한 다음에 함께 찾아보세요.'
            ],
            talk:'“많이 속상했겠다. 지금은 네 이야기부터 들어줄게.”'
        },

        8:{
            scene:'친구나 학교에서 문제가 생겼다는 말을 듣고 부모가 먼저 연락하거나 해결하면 아이는 자기 일인데 자기 의견이 빠졌다고 느낄 수 있어요.',
            quote:'“내 생각도 먼저 물어봐줬으면 좋겠어.”',
            explain:'필요한 순간 나서주는 힘은 아이에게 든든함을 줘요. 다만 실제 위험이 아니라면 아이가 원하는 도움의 정도를 먼저 확인해주세요.',
            actions:[
                '누군가에게 바로 연락하기 전에 아이가 원하는 것이 무엇인지 먼저 물어보세요.',
                '아이가 해볼 수 있는 부분과 부모가 도와야 할 부분을 함께 나눠보세요.'
            ],
            talk:'“내가 바로 나서기 전에 네가 원하는 도움이 뭔지 먼저 말해줘.”'
        },

        9:{
            scene:'형제나 가족 사이에 갈등이 생겼을 때 “그만하자”, “좋게 넘어가자”로 빨리 끝내면 아이는 불편한 이야기를 꺼내면 안 된다고 느낄 수 있어요.',
            quote:'“불편한 이야기도 끝까지 해도 되는 거지?”',
            explain:'갈등을 부드럽게 만드는 힘은 좋아요. 다만 갈등을 없애는 것보다 필요한 이야기를 안전하게 나누는 것이 더 중요할 때도 있어요.',
            actions:[
                '감정이 커졌다면 잠시 쉬되, 나중에 다시 이야기할 시간을 정해주세요.',
                '누가 맞는지 빨리 정하기보다 각자 무엇이 불편했는지 들어주세요.'
            ],
            talk:'“지금은 조금 쉬고, 이 이야기는 나중에 꼭 다시 해보자.”'
        }
    },


    teen:{

        1:{
            scene:'성적, 귀가시간, 휴대폰, 생활습관에서 기준을 강조하는 말이 많아지면 청소년은 내용보다 “계속 지적받는다”는 느낌을 먼저 받을 수 있어요.',
            quote:'“내 생각도 듣고 기준을 정했으면 좋겠어.”',
            explain:'분명한 기준은 여전히 필요해요. 다만 청소년기에는 부모가 정한 규칙을 따르게 하는 것보다 이유를 이해하고 함께 책임지는 경험이 중요해져요.',
            actions:[
                '규칙을 말할 때 왜 필요한지 설명하고 아이의 의견도 함께 들어보세요.',
                '부모가 원하는 방식과 실제로 꼭 지켜야 할 기준을 구분해주세요.'
            ],
            talk:'“내가 중요하게 생각하는 기준도 말할게. 네 생각도 듣고 같이 정해보자.”'
        },

        2:{
            scene:'친구, 학교, 진로 문제를 아이가 말했을 때 부모가 걱정되어 먼저 챙기거나 해결하려 하면 청소년은 간섭받는다고 느낄 수 있어요.',
            quote:'“필요할 때 내가 먼저 도움을 요청하고 싶어.”',
            explain:'언제든 도와줄 준비가 되어 있다는 느낌은 큰 힘이에요. 다만 청소년기에는 도움을 주는 방법도 아이가 선택할 수 있게 해주세요.',
            actions:[
                '무엇을 해줄지 정하기 전에 아이가 원하는 도움이 무엇인지 먼저 물어보세요.',
                '아이가 직접 할 수 있다고 하면 지켜보되, 필요하면 언제든 도울 수 있다고 알려주세요.'
            ],
            talk:'“내가 뭘 해주면 좋을까? 아니면 지금은 그냥 들어줄까?”'
        },

        3:{
            scene:'성적, 진로, 입시, 활동에서 다음 목표를 계속 제시하면 청소년은 쉬거나 헤매는 시간을 실패처럼 느낄 수 있어요.',
            quote:'“결과가 없어도 내가 노력한 건 알아줬으면 좋겠어.”',
            explain:'목표를 현실적으로 세우는 힘은 큰 장점이에요. 청소년에게는 결과뿐 아니라 자기 속도와 선택의 이유도 함께 존중받는 경험이 필요해요.',
            actions:[
                '결과를 묻기 전에 아이가 무엇을 해봤고 무엇을 배웠는지 물어보세요.',
                '부모가 원하는 목표보다 아이가 스스로 정한 목표가 무엇인지 확인해주세요.'
            ],
            talk:'“결과보다 네가 이번에 무엇을 해봤는지부터 듣고 싶어.”'
        },

        4:{
            scene:'아이가 말수가 줄거나 표정이 달라졌을 때 부모가 “무슨 일 있지?”, “너 지금 힘든 거지?”라고 계속 해석하면 오히려 마음을 숨기고 싶어질 수 있어요.',
            quote:'“말하고 싶을 때 내 말로 이야기하고 싶어.”',
            explain:'감정 변화를 알아차리는 힘은 좋아요. 청소년에게는 알아봐주는 것만큼 말하지 않을 공간도 필요할 수 있어요.',
            actions:[
                '감정을 맞히거나 계속 캐묻기보다 이야기할 준비가 될 때 듣겠다고 알려주세요.',
                '아이의 선택이나 취향이 부모와 달라도 바로 의미를 해석하지 말고 먼저 물어보세요.'
            ],
            talk:'“지금 말하고 싶지 않아도 괜찮아. 말하고 싶을 때 내가 들을게.”'
        },

        5:{
            scene:'아이가 고민을 이야기할 때 원인과 해결방법을 차분히 분석해주어도 청소년은 “내 감정보다 해결이 먼저구나”라고 느낄 수 있어요.',
            quote:'“답보다 먼저 내 마음을 알아줬으면 좋겠어.”',
            explain:'논리적으로 정리해주는 힘은 도움이 돼요. 다만 아이가 조언을 요청하지 않았다면 먼저 감정을 인정해주는 것이 대화를 이어가는 데 더 도움이 될 수 있어요.',
            actions:[
                '조언을 시작하기 전에 “내 생각을 말해도 될까?”라고 물어보세요.',
                '문제를 분석하기 전에 아이가 느낀 감정을 한 번 인정해주세요.'
            ],
            talk:'“그랬으면 정말 답답했겠다. 내 생각도 들어보고 싶으면 말해줘.”'
        },

        6:{
            scene:'귀가시간, 친구관계, 이동, 진로 선택에서 확인이 반복되면 청소년은 걱정받는 것보다 감시받는 느낌을 받을 수 있어요.',
            quote:'“나를 믿고 맡겨주는 것도 필요해.”',
            explain:'안전과 준비를 살피는 것은 여전히 중요해요. 다만 청소년기에는 약속을 정한 뒤 스스로 책임질 영역도 함께 넓혀줘야 해요.',
            actions:[
                '꼭 필요한 안전규칙과 연락기준만 함께 정하고 반복 확인은 줄여보세요.',
                '문제가 생겼을 때 먼저 책임져볼 기회를 주고 필요하면 도와주세요.'
            ],
            talk:'“우리 꼭 지킬 약속만 정하자. 그 안에서는 네가 판단해보면 좋겠어.”'
        },

        7:{
            scene:'시험 실패나 친구 문제로 힘들어할 때 “다른 것도 많아”, “괜찮아, 새로 하면 돼”라고 빠르게 넘기면 청소년은 자신의 속상함이 가볍게 취급된다고 느낄 수 있어요.',
            quote:'“지금 힘든 마음도 충분히 이야기하고 싶어.”',
            explain:'새로운 가능성을 보여주는 힘은 좋아요. 하지만 아이가 충분히 속상해한 뒤에야 다음 가능성도 받아들이기 쉬워요.',
            actions:[
                '긍정적인 이야기를 꺼내기 전에 지금 무엇이 가장 힘든지 먼저 들어주세요.',
                '새로운 대안은 아이가 원할 때 함께 찾아보세요.'
            ],
            talk:'“지금은 해결책보다 네가 얼마나 힘든지 먼저 듣고 싶어.”'
        },

        8:{
            scene:'친구, 학교, 진로 문제에서 부모가 빠르게 결정하고 나서면 청소년은 보호받는 느낌보다 자기 선택권을 빼앗겼다고 느낄 수 있어요.',
            quote:'“내 일은 내 의견부터 물어봐줬으면 좋겠어.”',
            explain:'위험한 순간 적극적으로 보호하는 힘은 중요해요. 하지만 청소년기에는 직접 결정하고 결과를 감당해보는 경험도 필요해요.',
            actions:[
                '실제 안전 문제가 아니라면 먼저 아이가 어떻게 해결하고 싶은지 물어보세요.',
                '부모가 개입해야 한다면 어디까지 개입할지 아이와 먼저 이야기해주세요.'
            ],
            talk:'“내가 나서기 전에 네가 어떻게 하고 싶은지부터 듣고 싶어.”'
        },

        9:{
            scene:'갈등이 생겼을 때 분위기가 나빠지는 것이 싫어 대화를 미루거나 “그만하자”로 끝내면 청소년은 중요한 문제를 이야기하기 어렵다고 느낄 수 있어요.',
            quote:'“불편해도 내 이야기를 끝까지 해보고 싶어.”',
            explain:'관계를 편안하게 유지하는 힘은 좋아요. 청소년과는 불편한 주제라도 다시 돌아와 이야기하는 경험이 신뢰를 만드는 데 도움이 돼요.',
            actions:[
                '대화가 격해지면 잠시 쉬되 언제 다시 이야기할지 정해주세요.',
                '의견이 달라도 아이의 말을 끝까지 들은 뒤 부모 의견을 말해주세요.'
            ],
            talk:'“우리 생각이 달라도 괜찮아. 네 이야기부터 끝까지 들어볼게.”'
        }
    }

};


// 연령별 완전균형 12문항
// 세 버전 모두 같은 유형조합과 채점체계를 사용하고,
// 상황문장만 발달단계에 맞게 바꿉니다.

const questionSets = {

    infant:[

        {
            n:1,
            text:'아이가 해야 할 일이나 약속을 자꾸 미루거나 거부할 때 나는?',
            choices:[
                {type:1, text:'지켜야 할 약속과 기준을 짧고 분명하게 알려준다.'},
                {type:2, text:'지금 무엇이 힘든지 살피고 필요한 도움을 먼저 챙긴다.'},
                {type:3, text:'아이가 할 수 있는 작은 단계부터 하나씩 해보게 돕는다.'}
            ]
        },

        {
            n:2,
            text:'아이가 어린이집이나 친구 일로 속상해할 때 나는?',
            choices:[
                {type:4, text:'아이의 표정과 말을 보며 어떤 마음이었는지 충분히 들어준다.'},
                {type:5, text:'무슨 일이 있었는지 차근차근 살펴보며 상황을 이해한다.'},
                {type:6, text:'다시 비슷한 일이 생기지 않도록 걱정되는 부분을 먼저 살핀다.'}
            ]
        },

        {
            n:3,
            text:'외출이나 놀이 계획이 갑자기 틀어졌을 때 나는?',
            choices:[
                {type:7, text:'대신 할 수 있는 재미있는 놀이를 바로 찾아본다.'},
                {type:8, text:'우선 방향을 정하고 필요한 일을 빠르게 처리한다.'},
                {type:9, text:'아이와 가족이 편할 수 있도록 상황에 맞게 조정한다.'}
            ]
        },

        {
            n:4,
            text:'아이가 내가 생각한 방법과 전혀 다르게 놀이하거나 만들고 있을 때 나는?',
            choices:[
                {type:1, text:'꼭 지켜야 할 부분이 있다면 기준을 분명하게 알려준다.'},
                {type:4, text:'아이만의 표현이나 방식으로 보고 존중해본다.'},
                {type:7, text:'새로운 방식도 경험이 될 수 있으니 일단 해보게 한다.'}
            ]
        },

        {
            n:5,
            text:'아이가 혼자 하기 어려워 보이는 일을 붙잡고 있을 때 나는?',
            choices:[
                {type:2, text:'지금 필요한 것이 무엇인지 살펴보고 필요한 부분을 도와준다.'},
                {type:5, text:'바로 손대기보다 어디에서 어려워하는지 먼저 지켜본다.'},
                {type:8, text:'도움이 꼭 필요하다고 판단되면 내가 직접 나서서 해결한다.'}
            ]
        },

        {
            n:6,
            text:'아이가 새로운 놀이·수업·활동을 시작하려고 할 때 나는?',
            choices:[
                {type:3, text:'이 경험을 통해 아이가 무엇을 배우고 성장할 수 있을지 생각한다.'},
                {type:6, text:'준비할 것과 위험하거나 걱정되는 부분이 없는지 먼저 확인한다.'},
                {type:9, text:'아이가 부담스럽지 않게 천천히 적응할 수 있도록 살펴본다.'}
            ]
        },

        {
            n:7,
            text:'집에서 지켜야 할 규칙을 두고 아이가 싫다고 버틸 때 나는?',
            choices:[
                {type:1, text:'왜 필요한 규칙인지 설명하고 중요한 기준은 유지한다.'},
                {type:5, text:'아이가 왜 싫어하는지 들어보고 상황을 충분히 살펴본다.'},
                {type:9, text:'꼭 필요한 부분은 지키면서 아이와 맞출 수 있는 방법을 찾는다.'}
            ]
        },

        {
            n:8,
            text:'아이가 처음 가는 곳이나 처음 해보는 일을 앞두고 긴장할 때 나는?',
            choices:[
                {type:2, text:'아이가 안심할 수 있도록 곁에서 필요한 것을 챙겨준다.'},
                {type:6, text:'미리 준비하거나 확인하면 좋을 부분을 함께 살펴본다.'},
                {type:7, text:'재미있을 만한 점을 이야기하며 새로운 경험을 기대하게 한다.'}
            ]
        },

        {
            n:9,
            text:'아이가 스스로 조금 어려운 일을 해보겠다고 할 때 나는?',
            choices:[
                {type:3, text:'끝까지 해볼 수 있도록 순서와 작은 목표를 함께 정해준다.'},
                {type:4, text:'아이가 왜 해보고 싶은지, 자기 방식은 무엇인지 들어본다.'},
                {type:8, text:'아이가 결정했다면 필요한 순간에는 든든하게 밀어주고 지켜준다.'}
            ]
        },

        {
            n:10,
            text:'아이가 안전과 관련된 중요한 약속을 어겼을 때 나는?',
            choices:[
                {type:1, text:'지켜야 하는 약속과 기준을 다시 분명하게 알려준다.'},
                {type:6, text:'어떤 위험이 있었는지 함께 확인하고 다음 상황에 대비한다.'},
                {type:8, text:'위험하다고 판단되면 우선 내가 직접 개입해 상황을 정리한다.'}
            ]
        },

        {
            n:11,
            text:'형제나 가족 사이에 갈등이 생겨 아이가 울거나 화를 낼 때 나는?',
            choices:[
                {type:2, text:'누가 지금 더 힘든지 살피고 필요한 부분을 먼저 챙긴다.'},
                {type:4, text:'각자가 어떤 마음이었는지 충분히 표현하도록 들어준다.'},
                {type:9, text:'서로 조금씩 맞춰 다시 편안해질 수 있는 방법을 찾는다.'}
            ]
        },

        {
            n:12,
            text:'아이가 놀이·퍼즐·과제를 하다가 막혀서 더 진행하지 못할 때 나는?',
            choices:[
                {type:3, text:'할 수 있는 작은 목표를 다시 정해 하나씩 해보게 한다.'},
                {type:5, text:'어디에서 막혔는지 원인과 방법을 먼저 살펴본다.'},
                {type:7, text:'지금 방법이 안 되면 전혀 다른 방법으로도 해보게 한다.'}
            ]
        }

    ],


    child:[

        {
            n:1,
            text:'아이가 숙제나 해야 할 일을 계속 미루고 있을 때 나는?',
            choices:[
                {type:1, text:'해야 할 약속과 기준을 다시 분명하게 알려준다.'},
                {type:2, text:'무엇이 힘든지 살피고 필요한 도움을 먼저 챙긴다.'},
                {type:3, text:'시작하기 쉬운 목표를 정해 하나씩 해보도록 돕는다.'}
            ]
        },

        {
            n:2,
            text:'아이가 친구 때문에 마음이 불편하다고 이야기할 때 나는?',
            choices:[
                {type:4, text:'그 상황에서 아이가 어떤 마음이었는지 충분히 들어본다.'},
                {type:5, text:'어떤 일이 있었는지 차근차근 정리하며 상황을 이해해본다.'},
                {type:6, text:'혹시 다시 문제가 생길 부분이 있는지 살펴보고 대비한다.'}
            ]
        },

        {
            n:3,
            text:'가족이 함께 하려던 계획이 갑자기 틀어졌을 때 나는?',
            choices:[
                {type:7, text:'대신 할 수 있는 재미있는 다른 방법을 찾아본다.'},
                {type:8, text:'우선 방향을 정하고 필요한 일을 빠르게 해결한다.'},
                {type:9, text:'가족 모두가 편할 수 있도록 서로 맞출 방법을 찾는다.'}
            ]
        },

        {
            n:4,
            text:'아이가 내가 생각했던 것과 전혀 다른 방식으로 과제나 활동을 하고 있을 때 나는?',
            choices:[
                {type:1, text:'꼭 지켜야 할 부분이 있다면 기준을 분명하게 알려준다.'},
                {type:4, text:'아이만의 생각과 표현방식으로 보고 존중해본다.'},
                {type:7, text:'새로운 방식도 경험이 될 수 있으니 일단 시도하게 해본다.'}
            ]
        },

        {
            n:5,
            text:'아이가 혼자 해결하기 어려워 보이는 문제를 만났을 때 나는?',
            choices:[
                {type:2, text:'지금 무엇이 필요한지 살펴보고 필요한 부분을 도와준다.'},
                {type:5, text:'바로 개입하기보다 어디에서 막히는지 먼저 관찰한다.'},
                {type:8, text:'아이에게 도움이 꼭 필요하다고 판단되면 내가 직접 나선다.'}
            ]
        },

        {
            n:6,
            text:'아이가 새로운 활동이나 수업을 시작하려고 할 때 나는?',
            choices:[
                {type:3, text:'이 경험이 아이의 성장에 어떻게 도움이 될지 생각한다.'},
                {type:6, text:'준비할 것과 걱정되는 부분이 없는지 먼저 확인한다.'},
                {type:9, text:'아이가 부담스럽지 않게 적응할 수 있는 속도를 살펴본다.'}
            ]
        },

        {
            n:7,
            text:'집에서 지켜야 할 규칙을 두고 아이와 의견이 다를 때 나는?',
            choices:[
                {type:1, text:'왜 필요한 규칙인지 설명하고 중요한 기준은 유지한다.'},
                {type:5, text:'서로 왜 그렇게 생각하는지 충분히 들어보고 판단한다.'},
                {type:9, text:'꼭 필요한 부분은 지키면서 서로 맞출 수 있는 방법을 찾는다.'}
            ]
        },

        {
            n:8,
            text:'아이가 처음 해보는 일을 앞두고 긴장하고 있을 때 나는?',
            choices:[
                {type:2, text:'아이가 안심할 수 있도록 옆에서 필요한 것을 챙겨준다.'},
                {type:6, text:'미리 준비하거나 확인하면 좋을 부분을 함께 살펴본다.'},
                {type:7, text:'재미있을 수 있는 부분을 이야기하며 새로운 경험을 기대하게 한다.'}
            ]
        },

        {
            n:9,
            text:'아이가 스스로 꽤 어려운 목표에 도전하고 싶다고 할 때 나는?',
            choices:[
                {type:3, text:'목표를 이루기 위해 어떤 과정을 밟으면 좋을지 함께 계획한다.'},
                {type:4, text:'아이가 정말 무엇을 원하는지, 그 선택이 아이답게 느껴지는지 이야기해본다.'},
                {type:8, text:'아이가 결정했다면 필요한 순간에는 든든하게 밀어주고 지켜준다.'}
            ]
        },

        {
            n:10,
            text:'아이가 안전과 관련된 중요한 약속을 어겼을 때 나는?',
            choices:[
                {type:1, text:'지켜야 하는 약속과 기준을 다시 분명하게 알려준다.'},
                {type:6, text:'어떤 위험이 있었는지 함께 확인하고 다음 상황에 대비한다.'},
                {type:8, text:'위험하다고 판단되면 우선 내가 직접 개입해서 상황을 정리한다.'}
            ]
        },

        {
            n:11,
            text:'형제나 가족 사이에 갈등이 생겼을 때 나는?',
            choices:[
                {type:2, text:'누가 지금 더 힘든지 살피고 필요한 부분을 먼저 챙긴다.'},
                {type:4, text:'각자가 어떤 감정을 느꼈는지 충분히 표현하도록 들어준다.'},
                {type:9, text:'서로 조금씩 맞춰 다시 편안해질 수 있는 방법을 찾는다.'}
            ]
        },

        {
            n:12,
            text:'아이가 공부나 활동을 하다가 막혀서 진도가 나가지 않을 때 나는?',
            choices:[
                {type:3, text:'작은 목표를 다시 정해서 하나씩 해결해보게 한다.'},
                {type:5, text:'어디에서 막혔는지 원인과 방법을 먼저 살펴본다.'},
                {type:7, text:'지금 방법이 안 된다면 전혀 다른 방식도 시도해보게 한다.'}
            ]
        }

    ],


    teen:[

        {
            n:1,
            text:'아이가 공부나 해야 할 일을 계속 미루고 있을 때 나는?',
            choices:[
                {type:1, text:'스스로 지켜야 할 책임과 약속을 다시 분명하게 이야기한다.'},
                {type:2, text:'요즘 힘든 일이 있는지 먼저 살피고 필요한 도움을 챙긴다.'},
                {type:3, text:'현실적으로 시작할 수 있는 목표를 정해 계획을 세워보게 한다.'}
            ]
        },

        {
            n:2,
            text:'아이가 친구나 학교 문제로 속상하다고 이야기할 때 나는?',
            choices:[
                {type:4, text:'아이의 감정과 그 일이 아이에게 어떤 의미였는지 충분히 들어본다.'},
                {type:5, text:'어떤 일이 있었는지 사실과 상황을 차분히 정리해본다.'},
                {type:6, text:'앞으로 비슷한 문제가 생길 가능성과 걱정되는 부분을 함께 살핀다.'}
            ]
        },

        {
            n:3,
            text:'가족의 일정이나 계획이 갑자기 틀어졌을 때 나는?',
            choices:[
                {type:7, text:'상황에 맞는 다른 선택이나 새로운 가능성을 바로 찾아본다.'},
                {type:8, text:'결정이 필요하다면 방향을 정하고 필요한 일을 빠르게 처리한다.'},
                {type:9, text:'가족 각자의 상황을 고려해 모두가 받아들일 수 있는 방법을 찾는다.'}
            ]
        },

        {
            n:4,
            text:'아이가 내가 생각한 진로나 방식과 전혀 다른 선택을 하려고 할 때 나는?',
            choices:[
                {type:1, text:'꼭 고려해야 할 책임과 기준이 있다면 분명하게 이야기한다.'},
                {type:4, text:'아이에게 중요한 가치와 자기다운 선택이 무엇인지 들어본다.'},
                {type:7, text:'다른 길도 경험이 될 수 있으니 가능성을 열어두고 살펴본다.'}
            ]
        },

        {
            n:5,
            text:'아이가 혼자 해결하기 어려워 보이는 문제를 겪고 있을 때 나는?',
            choices:[
                {type:2, text:'아이에게 지금 필요한 것이 무엇인지 먼저 묻고 도울 부분을 챙긴다.'},
                {type:5, text:'바로 개입하기보다 상황을 충분히 파악하고 원인을 살펴본다.'},
                {type:8, text:'보호가 꼭 필요하다고 판단되면 내가 직접 나서서 해결한다.'}
            ]
        },

        {
            n:6,
            text:'아이가 새로운 활동·진로·도전을 시작하려고 할 때 나는?',
            choices:[
                {type:3, text:'이 선택이 아이의 목표와 성장에 어떻게 이어질지 함께 생각한다.'},
                {type:6, text:'준비가 충분한지, 예상되는 위험이나 문제가 없는지 먼저 확인한다.'},
                {type:9, text:'아이가 부담을 감당할 수 있는 속도인지 살피며 자연스럽게 적응하게 한다.'}
            ]
        },

        {
            n:7,
            text:'귀가시간이나 휴대폰 등 집안 규칙을 두고 아이와 의견이 다를 때 나는?',
            choices:[
                {type:1, text:'왜 필요한 규칙인지 설명하고 중요한 기준은 분명하게 유지한다.'},
                {type:5, text:'아이의 생각과 내 생각을 충분히 들어보고 합리적으로 판단한다.'},
                {type:9, text:'꼭 필요한 부분은 지키면서 서로 받아들일 수 있는 방법을 찾는다.'}
            ]
        },

        {
            n:8,
            text:'아이가 새로운 환경이나 중요한 일을 앞두고 긴장하고 있을 때 나는?',
            choices:[
                {type:2, text:'아이가 필요할 때 기대고 도움을 요청할 수 있도록 곁을 지켜준다.'},
                {type:6, text:'미리 준비하거나 점검하면 좋을 부분을 함께 확인한다.'},
                {type:7, text:'새로운 경험에서 얻을 수 있는 재미와 가능성을 이야기해준다.'}
            ]
        },

        {
            n:9,
            text:'아이가 스스로 높은 목표나 어려운 도전을 선택했을 때 나는?',
            choices:[
                {type:3, text:'목표를 이루기 위한 현실적인 과정과 계획을 함께 세워본다.'},
                {type:4, text:'그 목표가 아이에게 왜 중요한지, 정말 원하는 선택인지 들어본다.'},
                {type:8, text:'아이가 결정했다면 책임지고 해볼 수 있도록 든든하게 밀어준다.'}
            ]
        },

        {
            n:10,
            text:'아이가 안전과 관련된 중요한 약속을 어겼을 때 나는?',
            choices:[
                {type:1, text:'지켜야 할 책임과 약속의 기준을 다시 분명하게 이야기한다.'},
                {type:6, text:'어떤 위험이 있었는지 확인하고 다음에는 어떻게 대비할지 함께 정한다.'},
                {type:8, text:'실제 위험이 크다고 판단되면 우선 내가 직접 개입해 상황을 정리한다.'}
            ]
        },

        {
            n:11,
            text:'가족 사이에 의견충돌이 생겨 분위기가 불편해졌을 때 나는?',
            choices:[
                {type:2, text:'누가 지금 가장 힘든지 살피고 필요한 도움을 먼저 챙긴다.'},
                {type:4, text:'각자가 어떤 감정을 느꼈는지 충분히 말할 수 있도록 들어준다.'},
                {type:9, text:'서로 받아들일 수 있는 지점을 찾아 관계를 다시 편안하게 만든다.'}
            ]
        },

        {
            n:12,
            text:'아이가 공부나 자신의 목표에서 막혀 진전이 없을 때 나는?',
            choices:[
                {type:3, text:'현실적인 작은 목표를 다시 정해 하나씩 성취해보게 한다.'},
                {type:5, text:'어디에서 막히는지 원인과 필요한 정보를 먼저 분석해본다.'},
                {type:7, text:'지금 방식이 맞지 않다면 다른 방법이나 새로운 선택을 찾아보게 한다.'}
            ]
        }

    ]

};


// 상태값
let currentIndex = 0;
let answers = {};
let displayQuestions = [];
let selectedAge = '';
let selectedAgeGroup = '';


// 배열 섞기
function shuffleArray(array){

    const copied = [...array];

    for(let i = copied.length - 1; i > 0; i--){

        const randomIndex =
            Math.floor(
                Math.random() * (i + 1)
            );

        const temp = copied[i];

        copied[i] =
            copied[randomIndex];

        copied[randomIndex] =
            temp;

    }

    return copied;

}


// 검사 시작 시 선택지 순서를 한 번만 섞음
function prepareQuestions(){

    const questions =
        questionSets[selectedAgeGroup];

    displayQuestions =
        questions.map((question)=>{

            return {
                ...question,
                choices:
                    shuffleArray(
                        question.choices
                    )
            };

        });

}


// 질문 표시
function showQuestion(){

    const question =
        displayQuestions[currentIndex];

    currentNumber.textContent =
        currentIndex + 1;

    progressBar.style.width =
        ((currentIndex + 1) / displayQuestions.length * 100) + '%';

    questionTitle.textContent =
        question.text;

    choiceList.innerHTML = '';


    question.choices.forEach((choice,index)=>{

        const button =
            document.createElement('button');

        const letter =
            String.fromCharCode(65 + index);

        button.type = 'button';
        button.classList.add('choice-item');

        button.innerHTML = `
            <span class="choice-letter">${letter}</span>
            ${choice.text}
        `;


        const savedAnswer =
            answers[question.n];


        if(
            savedAnswer &&
            savedAnswer.type === choice.type
        ){
            button.classList.add('on');
        }


        button.addEventListener('click',()=>{

            selectChoice(
                question,
                choice,
                letter
            );

        });


        choiceList.appendChild(button);

    });


    btnPrev.disabled =
        currentIndex === 0;

    btnNext.disabled =
        !answers[question.n];


    if(currentIndex === displayQuestions.length - 1){

        btnNext.textContent =
            '결과 보기';

    }else{

        btnNext.textContent =
            '다음';

    }

}


// 선택
function selectChoice(question,choice,letter){

    answers[question.n] = {
        type:choice.type,
        displayLabel:letter,
        text:choice.text
    };


    const buttons =
        document.querySelectorAll(
            '.choice-item'
        );

    buttons.forEach((button)=>{
        button.classList.remove('on');
    });


    // 현재 선택된 유형을 찾아 표시
    const currentChoices =
        displayQuestions[currentIndex].choices;

    const selectedIndex =
        currentChoices.findIndex((item)=>{
            return item.type === choice.type;
        });


    if(buttons[selectedIndex]){
        buttons[selectedIndex].classList.add('on');
    }


    btnNext.disabled = false;

}


// 유형 점수 계산
function calculateScores(){

    const scores = {
        1:0, 2:0, 3:0,
        4:0, 5:0, 6:0,
        7:0, 8:0, 9:0
    };


    Object.values(answers)
    .forEach((answer)=>{

        scores[answer.type]++;

    });


    return scores;

}


// 결과 순위 만들기
function getRanking(scores){

    const ranking = [];

    for(let type = 1; type <= 9; type++){

        ranking.push({
            type:type,
            score:scores[type]
        });

    }


    ranking.sort((a,b)=>{
        return b.score - a.score;
    });


    return ranking;

}


// 결과 출력
function showResult(){

    const scores =
        calculateScores();

    const ranking =
        getRanking(scores);

    const topScore =
        ranking[0].score;

    const topTypes =
        ranking
        .filter((item)=>{
            return item.score === topScore;
        })
        .map((item)=>{
            return item.type;
        });


    resultAge.textContent =
        selectedAge + ' 자녀를 떠올리며 응답한 결과';

    onsiteResult.classList.add('hide');
    tieChoiceScreen.classList.add('hide');
    tieChoiceList.innerHTML = '';


    // 최고점이 하나면 바로 최종 결과
    if(topTypes.length === 1){

        renderOnsiteResult(
            topTypes[0]
        );

    }else{

        // 최고점 동점이면 오늘 받아갈 대표 결과지 한 장을 선택
        renderTieChoices(
            topTypes
        );

    }


    showScoreDebug(scores);


    quizScreen.classList.add('hide');
    resultScreen.classList.remove('hide');


    const record =
        buildCampaignRecord(
            scores,
            ranking,
            topTypes
        );

    console.log(
        '캠페인 부모 양육성향 검사 저장용 데이터',
        record
    );


    window.scrollTo({
        top:0,
        behavior:'smooth'
    });

}


// 최종 현장용 결과
function renderOnsiteResult(type){

    const data =
        typeMeta[type];

    const ageData =
        ageResultMeta[selectedAgeGroup][type];

    tieChoiceScreen.classList.add('hide');
    onsiteResult.classList.remove('hide');


    resultImage.src =
        `./images/type0${type}.png`;

    resultImage.alt =
        data.animal;


    resultCode.textContent =
        String(type).padStart(2,'0');

    resultKeywords.textContent =
        data.keywords;

    resultParentTitle.textContent =
        data.title;

    resultStatement.textContent =
        data.statement;

    resultSummary.textContent =
        data.summary;


    sheetGuideNumber.textContent =
        String(type).padStart(2,'0') +
        '번 결과지';


    facilitatorScript.textContent =
        '이 결과는 ' +
        String(type).padStart(2,'0') +
        '번, ' +
        data.title +
        '예요. ' +
        data.statement +
        ' ' +
        data.facilitatorStrength +
        '이 큰 편입니다. 다만 이 방식이 너무 강해지면 아이는 ' +
        ageData.quote +
        '라고 느낄 수도 있어요. 결과지에 아이 연령에 맞는 행동팁과 실제 대화문이 정리되어 있으니 함께 보시면 좋아요.';

}


// 동점 결과 선택
function renderTieChoices(types){

    tieChoiceScreen.classList.remove('hide');
    onsiteResult.classList.add('hide');

    types.forEach((type)=>{

        const data =
            typeMeta[type];

        const ageData =
            ageResultMeta[selectedAgeGroup][type];

        const button =
            document.createElement('button');

        button.type = 'button';
        button.classList.add('tie-choice-btn');

        button.innerHTML = `
            <span class="tie-choice-img">
                <img src="./images/type0${type}.png" alt="${data.animal}">
            </span>

            <span class="tie-choice-text">
                <small>${String(type).padStart(2,'0')} · ${data.name}</small>
                <strong>${data.title}</strong>
                <p>${data.statement}</p>
            </span>

            <span class="tie-choice-arrow">›</span>
        `;


        button.addEventListener('click',()=>{

            renderOnsiteResult(type);

            console.log(
                '동점 결과지 대표선택:',
                type
            );

            window.scrollTo({
                top:0,
                behavior:'smooth'
            });

        });


        tieChoiceList.appendChild(button);

    });

}


// 가검사용 9유형 점수 확인
function showScoreDebug(scores){

    scoreGrid.innerHTML = '';

    for(let type = 1; type <= 9; type++){

        const item =
            document.createElement('div');

        item.classList.add('score-item');

        item.innerHTML = `
            <span>${type}유형</span>
            <strong>${scores[type]}</strong>
        `;

        scoreGrid.appendChild(item);

    }

}


// 향후 Google Sheets 저장용 데이터
function buildCampaignRecord(scores,ranking,topTypes){

    const record = {
        test_version:TEST_VERSION,
        child_age:selectedAge,
        question_group:selectedAgeGroup,
        submitted_at:new Date().toISOString(),
        top_types:topTypes.join(','),
        top_score:ranking[0].score,
        second_score:ranking[1].score,
        top_second_gap:
            ranking[0].score -
            ranking[1].score,
        tie:
            topTypes.length > 1
    };


    for(let type = 1; type <= 9; type++){

        record[`type_${type}_score`] =
            scores[type];

    }


    displayQuestions.forEach((question)=>{

        const answer =
            answers[question.n];

        const number =
            String(question.n)
            .padStart(2,'0');

        record[`q${number}_choice`] =
            answer ?
            answer.displayLabel :
            '';

        record[`q${number}_type`] =
            answer ?
            answer.type :
            '';

    });


    return record;

}


// 시작
btnStart.addEventListener('click',()=>{

    startScreen.classList.add('hide');
    ageScreen.classList.remove('hide');

    window.scrollTo(0,0);

});


// 연령 선택
ageOptions.forEach((button)=>{

    button.addEventListener('click',()=>{

        selectedAge =
            button.dataset.age;

        selectedAgeGroup =
            button.dataset.group;


        prepareQuestions();

        currentIndex = 0;
        answers = {};


        ageScreen.classList.add('hide');
        quizScreen.classList.remove('hide');

        showQuestion();

        window.scrollTo(0,0);

    });

});


// 연령 화면에서 뒤로가기
btnAgeBack.addEventListener('click',()=>{

    ageScreen.classList.add('hide');
    startScreen.classList.remove('hide');

    window.scrollTo(0,0);

});


// 이전
btnPrev.addEventListener('click',()=>{

    if(currentIndex > 0){

        currentIndex--;

        showQuestion();

        window.scrollTo({
            top:0,
            behavior:'smooth'
        });

    }

});


// 다음 / 결과
btnNext.addEventListener('click',()=>{

    const question =
        displayQuestions[currentIndex];


    if(!answers[question.n]){
        return;
    }


    if(currentIndex < displayQuestions.length - 1){

        currentIndex++;

        showQuestion();

        window.scrollTo({
            top:0,
            behavior:'smooth'
        });

    }else{

        showResult();

    }

});


// 다시 검사
btnRestart.addEventListener('click',()=>{

    currentIndex = 0;
    answers = {};
    displayQuestions = [];
    selectedAge = '';
    selectedAgeGroup = '';

    resultScreen.classList.add('hide');
    quizScreen.classList.add('hide');
    ageScreen.classList.add('hide');
    startScreen.classList.remove('hide');

    window.scrollTo({
        top:0,
        behavior:'smooth'
    });

});
