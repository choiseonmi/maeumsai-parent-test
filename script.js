/* =========================================
   마음사이 부모 자기이해 검사
========================================= */


/* =========================================
   DOM
========================================= */

const startScreen = document.querySelector('.start-screen');
const quizScreen = document.querySelector('.quiz-screen');
const confirmScreen = document.querySelector('.confirm-screen');
const resultScreen = document.querySelector('.result-screen');

const btnStart = document.querySelector('.btn-start');
const btnPrev = document.querySelector('.btn-prev');
const btnRestart = document.querySelector('.btn-restart');
const btnResultSave = document.querySelector('.btn-result-save');

const questionText = document.querySelector('.question-text');
const answerButtons = document.querySelectorAll('.answer-btn');

const currentNumber = document.querySelector('.current-number');
const remainingNumber = document.querySelector('.remaining-number');
const progressFill = document.querySelector('.progress-fill');

const confirmQuestionText = document.querySelector('.confirm-question');
const confirmCurrent = document.querySelector('.confirm-current');
const confirmTotal = document.querySelector('.confirm-total');
const confirmButtons = document.querySelectorAll('.confirm-answer-list button');

const resultTypeCard = document.querySelector('.result-type-card');
const resultTypeTitle = document.querySelector('.result-type-title');
const resultTypeMotive = document.querySelector('.result-type-motive');
const resultTypeChips = document.querySelector('.result-type-chips');

const attitudeStrengthTitle = document.querySelector('.attitude-strength-title');
const attitudeStrengthMeaning = document.querySelector('.attitude-strength-meaning');
const attitudeStrengthText = document.querySelector('.attitude-strength-text');
const attitudeStrengthGuide = document.querySelector('.attitude-strength-guide');

const attitudeCautionBox = document.querySelector('.attitude-caution');
const attitudeCautionTitle = document.querySelector('.attitude-caution-title');
const attitudeCautionMeaning = document.querySelector('.attitude-caution-meaning');
const attitudeCautionText = document.querySelector('.attitude-caution-text');
const attitudeCautionGuide = document.querySelector('.attitude-caution-guide');

const attitudeBalanceText = document.querySelector('.attitude-balance-text');
const attitudeOverviewItems = document.querySelectorAll('.attitude-overview-item');

const batteryHeading = document.querySelector('.battery-heading');
const batteryName = document.querySelector('.battery-name');
const batteryState = document.querySelector('.battery-state');
const batteryMeaning = document.querySelector('.battery-meaning');
const batterySign = document.querySelector('.battery-sign');
const batteryText = document.querySelector('.battery-text');
const batteryNumber = document.querySelector('.battery-number');
const batteryLineFill = document.querySelector('.battery-line-fill');

const resultSummaryText = document.querySelector('.result-summary-text');
const resultChildQuote = document.querySelector('.result-child-quote');
const resultChildReason = document.querySelector('.result-child-reason');
const resultChildAction = document.querySelector('.result-child-action');

const practiceList = document.querySelector('.practice-list');
const practiceSelected = document.querySelector('.practice-selected');
const practiceSelectedTitle = document.querySelector('.practice-selected-title');
const practiceSelectedText = document.querySelector('.practice-selected-text');

const captureArea = document.querySelector('.capture-area');
const captureTypeCard = document.querySelector('.capture-type-card');
const captureTypeTitle = document.querySelector('.capture-type-title');
const captureTypeChips = document.querySelector('.capture-type-chips');
const captureSummaryText = document.querySelector('.capture-summary-text');
const captureChildText = document.querySelector('.capture-child-text');
const captureBatteryName = document.querySelector('.capture-battery-name');
const captureBatteryPercent = document.querySelector('.capture-battery-percent');
const capturePracticeTitle = document.querySelector('.capture-practice-title');


/* =========================================
   카드 이미지 경로
   images 폴더에 type01.png ~ type09.png를 넣어주세요.
========================================= */

const typeCardImages = {
    1:"./images/type01.png",
    2:"./images/type02.png",
    3:"./images/type03.png",
    4:"./images/type04.png",
    5:"./images/type05.png",
    6:"./images/type06.png",
    7:"./images/type07.png",
    8:"./images/type08.png",
    9:"./images/type09.png"
};


/* =========================================
   질문 36개
========================================= */

const questions = [

    {n:1, 
        kind:"type", 
        type:6, 
        text:"아이에게 생길 수 있는 문제나 위험을 미리 생각하고 대비하는 편이다."
    },
    {n:2, 
        kind:"attitude", 
        area:"support", 
        text:"아이가 속상해할 때 잘잘못을 따지기보다 어떤 마음이었는지 먼저 들어보려 한다."
    },
    {n:3, 
        kind:"battery", 
        area:"body", 
        text:"아이를 돌보고 나면 몸에 힘이 거의 남아 있지 않다고 느낄 때가 있다."
    },
    {n:4, 
        kind:"type", 
        type:4, 
        text:"아이가 다른 아이들과 달라도 자기만의 방식대로 표현하고 자라는 것이 중요하다고 느낀다."
    },
    {n:5, 
        kind:"battery", 
        area:"responsibility", 
        text:"내가 챙기지 않으면 아이와 관련된 일이나 집안일이 제대로 돌아가지 않을 것 같다."
    },
    {n:6, 
        kind:"type", 
        type:8, 
        text:"아이에게 문제가 생기면 다른 사람을 기다리기보다 내가 먼저 나서서 해결하려는 편이다."
    },
    {n:7, 
        kind:"attitude", 
        area:"autonomy", 
        text:"아이가 스스로 할 수 있는 일은 시간이 걸리더라도 직접 해볼 수 있도록 기다려주는 편이다."
    },
    {n:8, 
        kind:"type", 
        type:2, 
        text:"아이에게 필요한 사람이 되고 있다는 느낌이 들 때 부모로서 큰 보람을 느낀다."
    },
    {n:9, 
        kind:"battery", 
        area:"emotion", 
        text:"아이를 돌보는 중 작은 일에도 쉽게 짜증이 나거나 예민해질 때가 있다."
    },
    {n:10, 
        kind:"type", 
        type:3, 
        text:"아이가 목표를 세우면 구체적으로 어떻게 해낼지 계획을 함께 세우는 편이다."
    },
    {n:11, 
        kind:"attitude", 
        area:"structure", 
        text:"우리 집에서 지켜야 할 중요한 규칙이나 약속은 아이에게 분명하게 알려주는 편이다."
    },
    {n:12, 
        kind:"battery", 
        area:"self", 
        text:"하루가 아이와 집안일로 끝나고 나를 위한 시간은 거의 없다고 느낀다."
    },
    {n:13, 
        kind:"type", 
        type:9, 
        text:"가족 분위기가 불편해지면 잘잘못을 따지기보다 먼저 분위기를 풀고 싶어진다."
    },
    {n:14, 
        kind:"attitude", 
        area:"listen", 
        text:"아이가 이야기할 때 바로 설명하거나 해결책을 말하기보다 먼저 끝까지 들어보려 한다."
    },
    {n:15, 
        kind:"battery", 
        area:"body", 
        text:"아이를 돌보며 쌓인 피로가 쉬거나 잠을 자도 충분히 풀리지 않는 느낌이 들 때가 있다."
    },
    {n:16, 
        kind:"type", 
        type:5, text:"아이에게 문제가 생기면 바로 반응하기보다 무슨 일이 있었는지 먼저 알아보려 한다."
    },
    {n:17, 
        kind:"battery", 
        area:"responsibility", 
        text:"해야 할 양육과 집안일이 계속 머릿속에 남아 있어 쉬어도 마음이 편하지 않을 때가 있다."
    },
    {n:18, 
        kind:"type", 
        type:1, 
        text:"아이가 규칙이나 기준에서 벗어나면 그냥 넘어가기보다 바로잡아주고 싶어진다."
    },
    {n:19, 
        kind:"attitude", 
        area:"autonomy",
        text:"위험하지 않은 일이라면 결과가 마음에 들지 않더라도 아이가 직접 선택하고 경험하도록 두는 편이다."
    },
    {n:20, 
        kind:"type", 
        type:7, 
        text:"아이와 새로운 장소나 놀이, 경험을 함께 시도하는 것을 좋아한다."
    },
    {n:21, 
        kind:"battery", 
        area:"emotion", 
        text:"아이에게 따뜻하게 반응하고 싶지만 마음의 여유가 없다고 느낄 때가 있다."
    },
    {n:22,
        kind:"type", 
        type:1, 
        text:"부모라면 힘들어도 맡은 역할과 책임은 제대로 해야 한다고 생각한다."
    },
    {n:23, 
        kind:"attitude", 
        area:"structure", 
        text:"내가 피곤하거나 기분이 좋지 않은 날에도 중요한 규칙은 되도록 비슷하게 적용하려 한다."
    },
    {n:24, 
        kind:"type", 
        type:2, 
        text:"아이가 힘들어 보이면 부탁하지 않아도 먼저 챙겨주고 싶어진다."
    },
    {n:25, 
        kind:"battery", 
        area:"relationship", 
        text:"아이를 돌보는 일을 나 혼자 감당하고 있다는 생각이 들 때가 있다."
    },
    {n:26, 
        kind:"type", 
        type:3, 
        text:"아이가 할 수 있는데도 노력하지 않는 것처럼 보이면 답답해질 때가 있다."
    },
    {n:27, 
        kind:"attitude", 
        area:"listen", 
        text:"문제가 생기면 부모가 답을 정해주기보다 아이의 생각을 물어보고 함께 방법을 찾아보는 편이다."
    },
    {n:28, 
        kind:"type", 
        type:4, 
        text:"아이의 말이나 행동 뒤에 어떤 마음이 있는지 깊이 생각하는 편이다."
    },
    {n:29, 
        kind:"battery", 
        area:"relationship", 
        text:"양육이 힘들어도 편하게 도움을 요청하거나 기대기 어렵다고 느낄 때가 있다."
    },
    {n:30, 
        kind:"type", 
        type:5, 
        text:"아이에게 문제가 생겨도 바로 개입하기보다 먼저 지켜보고 생각해보는 편이다."
    },
    {n:31, 
        kind:"type", 
        type:6, 
        text:"중요한 양육 결정을 할 때 믿을 만한 사람의 의견이나 정보를 확인해야 마음이 놓이는 편이다."
    },
    {n:32, 
        kind:"battery", 
        area:"self",
        text:"아이와 가족을 챙기다 보면 내가 하고 싶은 일은 자꾸 뒤로 미뤄진다."
    },
    {n:33, 
        kind:"type", 
        type:7, 
        text:"힘들고 답답한 분위기가 오래 이어지면 새로운 방법으로 분위기를 바꾸고 싶어진다."
    },
    {n:34, 
        kind:"type", 
        type:8, 
        text:"아이가 부당한 일을 당하면 내가 먼저 나서서 지켜줘야 한다고 느낀다."
    },
    {n:35, 
        kind:"type", 
        type:9, 
        text:"아이와 내 의견이 다를 때 한쪽 뜻을 밀어붙이기보다 서로 맞출 수 있는 방법을 찾는 편이다."
    },
    {n:36, 
        kind:"attitude", 
        area:"support", 
        text:"아이의 결과가 좋지 않아도 잘한 점이나 노력한 과정을 따로 말해주는 편이다."
    }

];


/* =========================================
   부모유형 메타
========================================= */

const typeMeta = {

    1:{
        name:"기준과 책임",
        title:"분명한 기준과 책임을 중요하게 여기는 부모",
        motive:"아이에게 필요한 기준을 알려주고 부모로서 맡은 책임을 잘 해내고 싶은 마음이 큰 편입니다.",
        chips:["기준","책임","원칙"],
        child:{
            quote:"“내 마음도 먼저 들어준 뒤 이야기해주면 좋겠어.”",
            reason:"부모님이 나를 바르게 키우고 싶어 한다는 건 알아요. 하지만 잘못한 점을 바로 고쳐주려고 할 때는 내 마음보다 실수가 먼저 보이는 것처럼 느껴질 수 있어요.",
            action:"무엇을 고쳐야 하는지 말하기 전에 내 마음을 먼저 한번 물어봐 주세요."
        },
        balance:[
            "하나쯤 그냥 지나가보기",
            "꼭 바로잡지 않아도 되는 행동 하나는 오늘은 그대로 지켜봐 주세요."
        ]
    },

    2:{
        name:"돌봄과 관계",
        title:"아이에게 필요한 사람이 되고 싶은 부모",
        motive:"아이의 필요를 빠르게 알아차리고 따뜻하게 돌봐주고 싶은 마음이 큰 편입니다.",
        chips:["돌봄","관계","배려"],
        child:{
            quote:"“나도 먼저 한번 해보고 싶어.”",
            reason:"내가 힘들기 전에 먼저 챙겨주는 것이 고맙지만, 가끔은 내가 스스로 해볼 기회가 줄어들 수도 있어요.",
            action:"바로 도와주기보다 내가 먼저 해볼지 물어봐 주세요."
        },
        balance:[
            "도와주기 전에 물어보기",
            "“도와줄까, 네가 먼저 해볼래?”라고 먼저 물어보세요."
        ]
    },

    3:{
        name:"성장과 성취",
        title:"아이의 가능성을 키워주고 싶은 부모",
        motive:"아이의 가능성을 발견하고, 노력과 실행을 통해 실제 성장으로 이어지도록 돕고 싶은 마음이 큰 편입니다.",
        chips:["성장","목표","도전"],
        child:{
            quote:"“결과뿐 아니라 내가 노력한 과정도 봐줬으면 좋겠어.”",
            reason:"부모님이 내가 잘할 수 있다고 믿어주는 것은 힘이 돼요. 하지만 결과와 목표가 계속 중요해지면 잘하지 못했을 때 실망시킨 것처럼 느껴질 수도 있어요.",
            action:"결과보다 내가 해본 노력과 과정을 먼저 이야기해 주세요."
        },
        balance:[
            "결과보다 과정을 말해주기",
            "결과가 어땠는지보다 아이가 어떤 노력을 했는지 먼저 말해보세요."
        ]
    },

    4:{
        name:"개성과 감정",
        title:"아이의 감정과 개성을 존중하고 싶은 부모",
        motive:"아이만의 감정과 개성을 소중하게 여기고 깊이 이해하고 싶은 마음이 큰 편입니다.",
        chips:["감정","개성","공감"],
        child:{
            quote:"“내 마음을 있는 그대로 들어주면 좋겠어.”",
            reason:"내 감정을 깊이 이해해주려는 부모님이 고마워요. 하지만 내가 아직 설명하고 싶지 않거나 그냥 지나가고 싶은 마음도 있을 수 있어요.",
            action:"내 마음을 해석하기 전에 내가 어떻게 느끼는지 먼저 물어봐 주세요."
        },
        balance:[
            "감정과 사실 나누어보기",
            "서운함이 올라오면 실제로 일어난 일과 내가 느낀 감정을 따로 생각해보세요."
        ]
    },

    5:{
        name:"이해와 관찰",
        title:"충분히 이해한 뒤 차분히 돕고 싶은 부모",
        motive:"상황을 충분히 살펴보고 생각한 뒤 차분하게 반응하는 것을 편하게 느낍니다.",
        chips:["관찰","이해","생각"],
        child:{
            quote:"“잠깐 쉬어도 괜찮아. 나중에 다시 이야기해주면 좋겠어.”",
            reason:"부모님이 생각을 충분히 정리한 뒤 이야기하려는 건 알아요. 하지만 말없이 멀어지면 내가 잘못한 건지 걱정될 수도 있어요.",
            action:"생각할 시간이 필요할 때는 나중에 다시 이야기하겠다고 알려주세요."
        },
        balance:[
            "연결을 끊지 않기",
            "생각할 시간이 필요할 때는 “잠깐 생각하고 다시 이야기하자.”라고 알려주세요."
        ]
    },

    6:{
        name:"안전과 신뢰",
        title:"아이에게 안전과 신뢰를 주고 싶은 부모",
        motive:"아이에게 안전한 환경을 만들어주고 중요한 일은 충분히 확인한 뒤 결정하고 싶은 마음이 큰 편입니다.",
        chips:["안전","신뢰","확인"],
        child:{
            quote:"“나도 스스로 해볼 수 있다고 믿어주면 좋겠어.”",
            reason:"부모님이 나를 걱정하고 지켜주려는 마음은 알아요. 하지만 계속 확인받거나 미리 걱정해주면 내가 잘할 수 없는 사람처럼 느껴질 때도 있어요.",
            action:"가끔은 조금 지켜봐 주고 내가 먼저 해볼 수 있는 시간을 주세요."
        },
        balance:[
            "조금 더 믿고 맡겨보기",
            "반복해서 확인하고 싶은 순간 한 번은 아이에게 맡겨보세요."
        ]
    },

    7:{
        name:"즐거움과 가능성",
        title:"아이와 새로운 가능성을 찾아가고 싶은 부모",
        motive:"아이와 즐거운 경험을 나누고 다양한 가능성을 열어주고 싶은 마음이 큰 편입니다.",
        chips:["즐거움","경험","가능성"],
        child:{
            quote:"“힘든 이야기도 조금만 더 들어줬으면 좋겠어.”",
            reason:"부모님과 즐겁게 지내는 것이 좋아요. 하지만 내가 속상한 이야기를 할 때 분위기를 빨리 바꾸려고 하면 내 마음이 충분히 받아들여지지 않은 것처럼 느껴질 수 있어요.",
            action:"해결하거나 기분을 바꾸기 전에 내 이야기를 조금 더 들어주세요."
        },
        balance:[
            "힘든 이야기에 조금 더 머물러보기",
            "분위기를 바꾸기 전에 아이의 이야기를 조금만 더 들어보세요."
        ]
    },

    8:{
        name:"보호와 주도",
        title:"필요한 순간 아이를 힘 있게 지켜주고 싶은 부모",
        motive:"필요한 순간 중심을 잡고 아이를 보호하며 문제를 해결해주고 싶은 마음이 큰 편입니다.",
        chips:["보호","주도","결단"],
        child:{
            quote:"“결정하기 전에 내 생각도 먼저 물어봐주면 좋겠어.”",
            reason:"부모님이 나를 지켜주고 문제를 해결해주는 건 든든해요. 하지만 모든 방향을 먼저 정해주면 내 생각을 말할 기회가 줄어들 수 있어요.",
            action:"결정하기 전에 내가 어떻게 하고 싶은지 한번 물어봐 주세요."
        },
        balance:[
            "결정 전에 한 번 묻기",
            "내가 방향을 정하기 전에 “넌 어떻게 하고 싶어?”라고 물어보세요."
        ]
    },

    9:{
        name:"평화와 조화",
        title:"가족의 평화와 편안함을 지키고 싶은 부모",
        motive:"가족이 편안하고 조화롭게 지내는 것을 중요하게 여기는 편입니다.",
        chips:["평화","조화","안정"],
        child:{
            quote:"“불편한 일이 있어도 나중에 다시 이야기해주면 좋겠어.”",
            reason:"우리 가족이 편안하게 지내도록 해주는 것이 좋아요. 하지만 갈등을 빨리 끝내려고 하면 내가 속상했던 마음이 그냥 지나간 것처럼 느껴질 수도 있어요.",
            action:"분위기가 괜찮아진 뒤라도 필요한 이야기는 다시 한번 나눠주세요."
        },
        balance:[
            "필요한 이야기는 다시 꺼내기",
            "갈등이 생겨도 꼭 필요한 이야기는 짧게라도 다시 이야기해보세요."
        ]
    }

};


/* =========================================
   배터리 메타
========================================= */

const batteryMeta = {

    body:{
        name:"몸의 배터리",
        meaning:"아이를 돌보고 일상을 유지하는 데 필요한 신체적인 에너지와 회복 상태를 살펴보는 영역이에요.",
        state:"몸이 먼저 쉬고 싶다고 말하고 있어요",
        sign:"쉽게 피곤해지거나, 쉬어도 개운하지 않고, 아이와 함께하는 활동이 평소보다 버겁게 느껴질 수 있어요.",
        text:"몸의 에너지가 줄어들면 마음의 여유도 함께 줄어들 수 있어요. 평소라면 괜찮았을 작은 일에도 예민해지거나 기다려주는 힘이 부족해질 수 있습니다.",
        charge:[
            "쉬는 시간을 먼저 확보하기",
            "오늘 15분이라도 아이 돌봄이나 집안일에서 잠시 벗어나는 시간을 먼저 만들어보세요."
        ]
    },

    emotion:{
        name:"마음의 배터리",
        meaning:"아이의 감정을 받아주고, 내 감정을 조절하는 데 필요한 마음의 여유를 살펴보는 영역이에요.",
        state:"마음의 여유가 많이 줄어들고 있어요",
        sign:"평소보다 쉽게 짜증이 나거나, 아이의 반복되는 말과 행동이 더 크게 느껴질 수 있어요.",
        text:"마음의 에너지가 부족하면 아이의 감정을 이해하고 싶어도 먼저 반응하거나 빨리 상황을 끝내고 싶어질 수 있어요.",
        charge:[
            "감정이 커졌을 때 잠깐 멈추기",
            "바로 훈육하거나 해결하려 하지 말고 잠깐 멈춰 내 감정부터 확인해보세요."
        ]
    },

    responsibility:{
        name:"책임의 배터리",
        meaning:"부모로서 해야 할 일, 챙겨야 할 일, 놓치면 안 된다고 느끼는 부담의 정도를 살펴보는 영역이에요.",
        state:"‘내가 해야 한다’는 마음이 에너지를 많이 쓰고 있어요",
        sign:"쉬는 시간에도 해야 할 일이 계속 떠오르거나, 내가 챙기지 않으면 일이 제대로 되지 않을 것처럼 느껴질 수 있어요.",
        text:"책임감이 커질수록 부모 역할을 잘 해내기 위해 더 많은 일을 스스로 떠안게 될 수 있어요. 그러다 보면 쉬고 있어도 마음은 계속 일하고 있는 상태가 될 수 있습니다.",
        charge:[
            "오늘 할 일 하나 덜 하기",
            "오늘 꼭 하지 않아도 되는 일 하나를 정해 내려놓아보세요."
        ]
    },

    relationship:{
        name:"관계의 배터리",
        meaning:"양육을 혼자 감당하지 않고 다른 사람에게 기대거나 도움을 주고받을 수 있는 정도를 살펴보는 영역이에요.",
        state:"혼자 버티는 시간이 길어지고 있어요",
        sign:"주변에 사람이 있어도 결국 내가 다 해야 한다고 느끼거나, 힘들어도 도움을 요청하기 어려울 수 있어요.",
        text:"양육은 관계 속에서 이루어지기 때문에 혼자 감당하는 시간이 길어지면 정서적인 부담도 함께 커질 수 있어요.",
        charge:[
            "구체적인 도움 하나 요청하기",
            "“좀 도와줘”보다 필요한 도움을 한 가지 구체적으로 부탁해보세요."
        ]
    },

    self:{
        name:"나의 배터리",
        meaning:"부모라는 역할을 넘어 ‘나 자신’으로 지낼 수 있는 시간과 여유가 얼마나 남아 있는지 살펴보는 영역이에요.",
        state:"부모 역할 뒤로 ‘나’를 자주 미뤄두고 있어요",
        sign:"내가 하고 싶은 일은 계속 뒤로 밀리고, 하루가 아이와 가족을 위한 일로만 채워지는 느낌이 들 수 있어요.",
        text:"나를 위한 시간이 부족해지면 부모 역할을 잘하고 있어도 점점 지치거나 답답함을 느낄 수 있어요. 나를 돌보는 시간도 양육을 지속하는 데 필요한 에너지입니다.",
        charge:[
            "부모가 아닌 나를 위한 시간 만들기",
            "이번 주 30분은 부모 역할과 관계없는 나만의 시간을 만들어보세요."
        ]
    }

};


/* =========================================
   양육태도 메타
========================================= */

const attitudeMeta = {

    support:{
        name:"정서적 지지",

        meaning:"아이의 감정과 노력을 먼저 알아주고, 아이가 마음을 표현할 수 있도록 받아주는 태도를 살펴보는 영역이에요.",

        strength:[
            "아이의 마음을 먼저 살피는 편이에요",
            "잘못이나 결과보다 아이의 감정과 노력을 먼저 알아주려는 모습이 잘 나타납니다."
        ],

        caution:[
            "아이의 마음보다 행동이나 결과가 먼저 보일 수 있어요",
            "문제가 생겼을 때 아이가 왜 그랬는지보다 잘못한 행동이나 결과에 먼저 시선이 갈 수 있습니다."
        ],

        guide:"아이의 행동을 바로잡기 전에 먼저 마음을 확인해보는 것이 도움이 됩니다.",

        charge:[
            "마음부터 확인하기",
            "행동을 바로잡기 전에 “지금 어떤 마음이야?”라고 먼저 물어보세요."
        ]
    },

    autonomy:{
        name:"자율성 존중",

        meaning:"아이가 스스로 선택하고 시도하며 경험할 수 있도록 기다려주는 태도를 살펴보는 영역이에요.",

        strength:[
            "아이에게 스스로 해볼 시간을 주는 편이에요",
            "조금 느리거나 서툴러도 직접 선택하고 경험할 수 있도록 기다려주는 모습이 잘 나타납니다."
        ],

        caution:[
            "아이보다 먼저 도와주거나 결정해줄 수 있어요",
            "아이가 스스로 해볼 수 있는 순간에도 부모가 먼저 개입하는 일이 생길 수 있습니다."
        ],

        guide:"아이의 선택이 완벽하지 않아도 안전한 범위 안에서는 직접 해볼 기회를 주는 것이 중요합니다.",

        charge:[
            "한 번 기다리기",
            "바로 도와주기 전에 “어디까지 네가 해보고 싶어?”라고 물어보세요."
        ]
    },

    structure:{
        name:"기준·일관성",

        meaning:"가정에서 필요한 규칙과 약속을 분명하게 알려주고, 상황에 따라 크게 흔들리지 않도록 유지하는 태도를 살펴보는 영역이에요.",

        strength:[
            "규칙과 약속을 분명하게 알려주는 편이에요",
            "아이에게 필요한 기준을 비교적 명확하게 알려주고 비슷하게 적용하려는 모습이 잘 나타납니다."
        ],

        caution:[
            "상황에 따라 기준이 달라질 수 있어요",
            "피곤하거나 바쁜 날에는 평소와 다르게 규칙이나 약속을 적용할 수 있습니다."
        ],

        guide:"많은 규칙보다 꼭 필요한 몇 가지를 정하고 일관되게 적용하는 것이 아이에게 안정감을 줄 수 있어요.",

        charge:[
            "중요한 약속 하나 지키기",
            "꼭 필요한 약속 한두 가지를 정하고 비슷한 기준으로 유지해보세요."
        ]
    },

    listen:{
        name:"대화와 경청",

        meaning:"아이의 말을 끝까지 듣고, 부모가 답을 정하기보다 아이의 생각을 함께 나누는 태도를 살펴보는 영역이에요.",

        strength:[
            "아이의 이야기를 듣고 함께 풀어가려는 편이에요",
            "바로 답을 주기보다 아이의 생각을 듣고 함께 방법을 찾으려는 모습이 잘 나타납니다."
        ],

        caution:[
            "아이의 말을 다 듣기 전에 해결방법이 먼저 나올 수 있어요",
            "아이의 생각을 충분히 듣기 전에 부모의 설명이나 해결방법을 먼저 말할 수 있습니다."
        ],

        guide:"해결책보다 질문을 먼저 건네면 아이가 자기 생각을 더 잘 표현할 수 있어요.",

        charge:[
            "답보다 질문을 먼저 하기",
            "해결방법을 말하기 전에 “너는 어떻게 생각해?”라고 먼저 물어보세요."
        ]
    }

};


/* =========================================
   통합 결과 45개
========================================= */

const integrated45 = {

    1:{
        body:"바르게 잘 해내고 싶은 마음이 큰 부모예요. 그런데 몸이 지치면 아이의 실수나 흐트러진 모습이 더 크게 보이고, 바로잡는 말이 많아질 수 있어요.",
        emotion:"아이에게 좋은 기준을 알려주고 싶은 부모예요. 하지만 마음의 여유가 줄어들면 작은 잘못에도 예민해지고, 아이보다 먼저 문제점을 보게 될 수 있어요.",
        responsibility:"부모로서 맡은 역할을 제대로 하고 싶은 마음이 큰 편이에요. 그래서 ‘내가 해야 한다’는 부담이 커질수록 아이에게도 더 높은 기준을 요구할 수 있어요.",
        relationship:"가족을 책임감 있게 챙기려는 부모예요. 그런데 양육을 혼자 감당한다고 느끼면 해야 할 일과 기준을 더 혼자 떠안게 될 수 있어요.",
        self:"부모 역할을 잘하고 싶은 마음이 큰 만큼 나를 위한 시간이 뒤로 밀리기 쉬워요. 나를 위한 여유가 줄어들수록 아이에게도 기준과 해야 할 일이 먼저 보일 수 있어요."
    },

    2:{
        body:"아이에게 필요한 것을 잘 챙겨주고 싶은 부모예요. 하지만 몸이 지치면 계속 챙겨주고 싶어도 체력이 따라주지 않아 부담이 커질 수 있어요.",
        emotion:"아이의 마음과 필요를 잘 살피고 싶은 부모예요. 그런데 마음의 여유가 줄어들면 계속 챙겨주고 싶어도 따뜻하게 반응하기 어려운 순간이 늘어날 수 있어요.",
        responsibility:"아이가 필요로 하는 것을 놓치고 싶지 않은 부모예요. 그래서 책임감이 커질수록 아이가 스스로 할 수 있는 일까지 먼저 챙겨주게 될 수 있어요.",
        relationship:"아이와의 관계를 중요하게 여기는 부모예요. 하지만 양육을 혼자 감당한다고 느끼면 다른 사람을 돌보는 일도 점점 버겁게 느껴질 수 있어요.",
        self:"가족을 먼저 챙기는 것이 자연스러운 부모예요. 그래서 나를 위한 시간이 오래 부족해지면 돌봄을 계속하면서도 점점 지칠 수 있어요."
    },

    3:{
        body:"아이가 성장하고 해내는 것을 도와주고 싶은 부모예요. 하지만 몸이 지치면 기다릴 여유가 줄어 아이에게 더 빨리 하라고 재촉할 수 있어요.",
        emotion:"아이의 가능성을 실제 성장으로 연결하고 싶은 부모예요. 그런데 마음의 여유가 줄어들면 과정보다 결과가 먼저 보이고, 기대만큼 하지 않을 때 답답함이 커질 수 있어요.",
        responsibility:"부모로서 아이의 성장을 잘 이끌어야 한다는 마음이 큰 편이에요. 그래서 책임의 부담이 커지면 아이에게도 ‘더 잘해야 한다’는 메시지가 강해질 수 있어요.",
        relationship:"아이의 성장을 적극적으로 돕고 싶은 부모예요. 그런데 양육을 혼자 감당한다고 느끼면 아이를 돕는 일까지 혼자 책임지려는 부담이 커질 수 있어요.",
        self:"아이의 성장과 목표를 잘 지원하고 싶은 부모예요. 그런데 가족을 챙기느라 내가 하고 싶은 일이 계속 뒤로 밀리면 부모 역할 밖의 나를 위한 시간이 부족해질 수 있어요."
    },

    4:{
        body:"아이의 감정과 개성을 깊이 이해하고 싶은 부모예요. 하지만 몸이 지치면 아이의 감정을 충분히 받아줄 여유가 줄어들 수 있어요.",
        emotion:"아이의 마음과 깊이 연결되고 싶은 부모예요. 그런데 마음의 여유가 줄어들면 아이의 말이나 반응을 평소보다 더 예민하게 받아들일 수 있어요.",
        responsibility:"아이의 감정과 개성을 충분히 이해해주고 싶은 부모예요. 그런데 해야 할 일이 계속 머릿속에 남아 있으면 아이의 마음을 여유 있게 살펴볼 시간이 줄어들 수 있어요.",
        relationship:"아이의 마음과 관계를 깊이 살피는 부모예요. 그런데 양육을 혼자 감당한다고 느끼면 관계를 세심하게 살필 여유가 줄어들 수 있어요.",
        self:"자신의 감정과 내면을 중요하게 여기는 부모예요. 그런데 부모 역할에 집중하느라 나를 위한 시간이 줄어들면 내 감정과 욕구를 돌아볼 여유도 부족해질 수 있어요."
    },

    5:{
        body:"충분히 살펴보고 생각한 뒤 반응하는 부모예요. 하지만 몸이 지치면 차분히 상황을 살펴보고 생각할 여유가 줄어들 수 있어요.",
        emotion:"상황을 먼저 이해하고 생각하려는 부모예요. 그런데 마음의 여유가 줄어들면 아이의 감정을 차분히 받아주기 어려운 순간이 생길 수 있어요.",
        responsibility:"충분히 이해한 뒤 차분하게 돕고 싶은 부모예요. 하지만 책임이 많아지면 생각해야 할 일과 역할이 늘어나 차분하게 판단할 여유가 줄어들 수 있어요.",
        relationship:"생각할 시간과 여유를 중요하게 여기는 부모예요. 그런데 도움받을 관계가 부족하면 양육을 혼자 감당한다는 느낌이 더 커질 수 있어요.",
        self:"혼자 생각하고 정리하는 시간이 중요한 부모예요. 나를 위한 시간이 부족해지면 생각을 정리하고 회복할 여유가 줄어들 수 있어요."
    },

    6:{
        body:"아이에게 안전하고 안정적인 환경을 만들어주고 싶은 부모예요. 하지만 몸이 지치면 평소보다 걱정이 많아지고 작은 위험에도 예민하게 반응할 수 있어요.",
        emotion:"아이를 지키고 실수 없이 돌보고 싶은 마음이 큰 부모예요. 그런데 마음의 여유가 줄어들면 아직 일어나지 않은 일까지 걱정하거나 반복해서 확인할 수 있어요.",
        responsibility:"믿을 수 있는 부모가 되고 싶은 마음이 큰 편이에요. 그래서 책임감이 커질수록 모든 것을 내가 확인해야 안심되고, 아이의 일도 평소보다 더 자주 확인하려 할 수 있어요.",
        relationship:"믿고 의지할 수 있는 관계를 중요하게 여기는 부모예요. 그런데 양육을 혼자 감당한다고 느끼면 중요한 일을 더 직접 확인하고 챙기려 할 수 있어요.",
        self:"가족을 위해 미리 준비하고 대비하는 힘이 큰 부모예요. 하지만 나를 위한 여유가 줄어들면 쉬는 시간에도 걱정과 해야 할 일을 계속 생각하게 될 수 있어요."
    },

    7:{
        body:"아이와 즐겁고 다양한 경험을 함께하고 싶은 부모예요. 하지만 몸이 지치면 평소 좋아하던 놀이와 외출도 부담스럽게 느껴질 수 있어요.",
        emotion:"밝고 긍정적인 분위기를 만들고 싶은 부모예요. 그런데 마음이 지치면 무겁거나 반복되는 문제를 오래 다루기보다 빨리 다른 이야기로 넘어가고 싶어질 수 있어요.",
        responsibility:"아이에게 다양한 경험과 가능성을 열어주고 싶은 부모예요. 하지만 해야 할 일이 계속 쌓이면 새로운 경험을 즐길 마음의 여유가 줄어들 수 있어요.",
        relationship:"즐겁게 연결되고 새로운 방법을 찾는 부모예요. 그런데 양육을 혼자 감당한다고 느끼면 평소처럼 관계에서 즐거움을 찾기 어려울 수 있어요.",
        self:"새로운 경험과 자유로운 시간을 중요하게 여기는 부모예요. 그런데 부모 역할로 나만의 시간이 줄어들면 반복되는 일상이 평소보다 더 답답하게 느껴질 수 있어요."
    },

    8:{
        body:"필요한 순간 아이를 힘 있게 지켜주고 싶은 부모예요. 하지만 몸이 지치면 기다릴 여유가 줄어 아이에게 더 빠른 행동을 요구할 수 있어요.",
        emotion:"문제가 생기면 중심을 잡고 해결하려는 부모예요. 그런데 마음의 여유가 부족하면 아이의 감정을 듣기보다 해결부터 하려는 반응이 강해질 수 있어요.",
        responsibility:"가족의 문제를 내가 책임지고 해결해야 한다는 마음이 큰 부모예요. 그래서 책임이 쌓일수록 다른 사람에게 맡기기보다 직접 챙기고 결정하려 할 수 있어요.",
        relationship:"가족을 지키고 이끌고 싶은 부모예요. 그런데 양육을 혼자 감당한다고 느끼면 도움을 요청하기보다 스스로 더 많은 일을 떠맡게 될 수 있어요.",
        self:"필요한 순간 먼저 나서서 가족을 지키려는 부모예요. 하지만 내 시간이 계속 뒤로 밀리면 가족의 문제를 계속 내가 챙기고 해결하려는 흐름이 이어질 수 있어요."
    },

    9:{
        body:"가족이 편안하게 지내는 것을 중요하게 생각하는 부모예요. 하지만 몸이 지치면 가족의 분위기를 살피고 조율하는 데 쓸 에너지도 줄어들 수 있어요.",
        emotion:"갈등보다 평화를 중요하게 생각하는 부모예요. 그런데 마음의 여유가 줄어들면 아이와 불편한 이야기를 꺼내기보다 그냥 넘어가고 싶어질 수 있어요.",
        responsibility:"가족이 편안하게 지내도록 조율하려는 부모예요. 하지만 해야 할 일이 계속 쌓이면 여러 사람의 필요를 맞추면서 책임까지 감당하는 일이 부담스러울 수 있어요.",
        relationship:"가족관계가 편안하게 이어지는 것을 중요하게 여기는 부모예요. 그런데 관계에서 지치면 갈등을 피하려다 자신의 힘든 마음을 충분히 말하지 못할 수 있어요.",
        self:"가족의 편안함을 중요하게 여기는 부모예요. 그래서 가족을 먼저 생각하는 시간이 길어지면 내가 하고 싶은 일을 자꾸 뒤로 미루게 될 수 있어요."
    }

};


/* =========================================
   추가 확인 질문
========================================= */

const confirmQuestions = {

    1:[
        {type:1,text:"아이에게 무언가를 가르칠 때 무엇이 옳고 필요한지 분명하게 알려주고 싶은 편이다."},
        {type:1,text:"아이에게 기준을 요구하려면 부모인 나부터 그 기준을 지켜야 한다고 생각한다."}
    ],

    2:[
        {type:2,text:"아이가 나에게 도움을 요청하면 내가 필요한 사람이 된 것 같아 보람을 느낀다."},
        {type:2,text:"아이에게 필요한 것이 보이면 부탁받기 전이라도 먼저 챙겨주고 싶어진다."}
    ],

    3:[
        {type:3,text:"아이에게 가능성이 보이면 더 잘해낼 수 있도록 구체적인 목표를 세워주고 싶어진다."},
        {type:3,text:"아이의 노력과 계획이 실제 성과로 이어질 때 큰 보람을 느낀다."}
    ],

    4:[
        {type:4,text:"아이의 취향이나 표현이 남들과 달라도 그 아이만의 모습으로 지켜주고 싶다."},
        {type:4,text:"아이의 말이나 표정에 담긴 감정의 의미를 오래 생각하는 편이다."}
    ],

    5:[
        {type:5,text:"아이에게 문제가 생기면 해결책을 말하기 전에 충분히 알아보고 생각할 시간이 필요하다."},
        {type:5,text:"감정적으로 바로 반응하기보다 생각을 정리한 뒤 이야기하는 편이다."}
    ],

    6:[
        {type:6,text:"아이와 관련된 중요한 일을 결정하기 전에 생길 수 있는 문제를 여러 가지로 생각해보는 편이다."},
        {type:6,text:"확실하지 않은 상황에서는 믿을 만한 정보를 확인해야 마음이 놓인다."}
    ],

    7:[
        {type:7,text:"답답한 상황에서도 새로운 방법이나 가능성을 찾으면 마음이 한결 편해진다."},
        {type:7,text:"아이에게 가능한 한 다양한 경험과 선택지를 보여주고 싶은 편이다."}
    ],

    8:[
        {type:8,text:"문제가 생기면 누군가 해결해주기를 기다리기보다 내가 방향을 잡는 편이다."},
        {type:8,text:"아이가 약한 입장에 놓여 있으면 내가 나서서 보호해야 한다는 마음이 강해진다."}
    ],

    9:[
        {type:9,text:"가족 사이에 불편한 분위기가 오래 이어지는 것을 힘들어하는 편이다."},
        {type:9,text:"내 의견을 관철하기보다 모두가 받아들일 수 있는 방법을 찾는 편이다."}
    ]

};


/* =========================================
   상태값
========================================= */

const answers = {};
const confirmAnswers = [];

let currentQuestion = 0;
let currentConfirmQuestion = 0;
let currentResult = null;
let confirmList = [];


/* =========================================
   시작
========================================= */

btnStart.addEventListener('click',()=>{

    startScreen.classList.add('hide');
    quizScreen.classList.remove('hide');

    currentQuestion = 0;

    showQuestion();

});


/* =========================================
   질문 표시
========================================= */

function showQuestion(){

    const question = questions[currentQuestion];

    questionText.textContent = question.text;

    currentNumber.textContent = currentQuestion + 1;

    const remain = questions.length - currentQuestion - 1;

    if(remain === 0){
        remainingNumber.textContent = "마지막 문항";
    }else{
        remainingNumber.textContent = remain + "문항 남음";
    }


    const progress =
        ((currentQuestion + 1) / questions.length) * 100;

    progressFill.style.width = progress + "%";


    answerButtons.forEach((button)=>{

        button.classList.remove('on');

        const savedAnswer = answers[question.n];

        if(savedAnswer === Number(button.dataset.score)){
            button.classList.add('on');
        }

    });


    if(currentQuestion === 0){
        btnPrev.style.visibility = "hidden";
    }else{
        btnPrev.style.visibility = "visible";
    }

}


/* =========================================
   답변
========================================= */

answerButtons.forEach((button)=>{

    button.addEventListener('click',()=>{

        const score = Number(button.dataset.score);
        const question = questions[currentQuestion];

        answers[question.n] = score;


        answerButtons.forEach((item)=>{
            item.classList.remove('on');
        });

        button.classList.add('on');


        setTimeout(()=>{

            if(currentQuestion < questions.length - 1){

                currentQuestion++;
                showQuestion();

            }else{

                finishMainTest();

            }

        },200);

    });

});


btnPrev.addEventListener('click',()=>{

    if(currentQuestion > 0){

        currentQuestion--;
        showQuestion();

    }

});


/* =========================================
   유형 계산
========================================= */

function getTypeScores(){

    const scores = {
        1:0,2:0,3:0,4:0,5:0,
        6:0,7:0,8:0,9:0
    };


    questions.forEach((question)=>{

        if(question.kind === "type"){

            scores[question.type] +=
                answers[question.n];

        }

    });


    return scores;

}


function getTypeRanking(scores){

    const ranking = [];


    for(let type in scores){

        ranking.push({
            type:Number(type),
            score:scores[type]
        });

    }


    ranking.sort((a,b)=>{
        return b.score - a.score;
    });


    return ranking;

}


function getTypeResult(ranking){

    const first = ranking[0];
    const second = ranking[1];

    const gap = first.score - second.score;

    let state = "single";


    if(gap === 0){
        state = "tie";
    }else if(gap === 1){
        state = "close";
    }


    return {
        first:first,
        second:second,
        gap:gap,
        state:state
    };

}


/* =========================================
   태도 계산
========================================= */

function getAttitudeScores(){

    const scores = {
        support:0,
        autonomy:0,
        structure:0,
        listen:0
    };


    questions.forEach((question)=>{

        if(question.kind === "attitude"){

            scores[question.area] +=
                answers[question.n];

        }

    });


    return scores;

}


function getAttitudeResult(scores){

    const ranking = [];


    for(let area in scores){

        ranking.push({
            area:area,
            score:scores[area]
        });

    }


    ranking.sort((a,b)=>{
        return b.score - a.score;
    });


    const highestScore = ranking[0].score;
    const lowestScore = ranking[ranking.length - 1].score;

    const strengthAreas = [];
    const cautionAreas = [];


    ranking.forEach((item)=>{

        if(item.score === highestScore){
            strengthAreas.push(item);
        }

        if(item.score === lowestScore){
            cautionAreas.push(item);
        }

    });


    const gap = highestScore - lowestScore;


    return {
        strength:strengthAreas[0],
        strengthAreas:strengthAreas,

        caution:
            gap <= 1
            ? null
            : cautionAreas[0],

        cautionAreas:
            gap <= 1
            ? []
            : cautionAreas,

        ranking:ranking,
        gap:gap
    };

}


/* =========================================
   배터리 계산
========================================= */

function getBatteryScores(){

    const totals = {
        body:0,
        emotion:0,
        responsibility:0,
        relationship:0,
        self:0
    };

    const counts = {
        body:0,
        emotion:0,
        responsibility:0,
        relationship:0,
        self:0
    };


    questions.forEach((question)=>{

        if(question.kind === "battery"){

            totals[question.area] +=
                answers[question.n];

            counts[question.area]++;

        }

    });


    const scores = {};


    for(let area in totals){

        const average =
            totals[area] / counts[area];

        const percent =
            Math.round(
                ((5 - average) / 4) * 100
            );


        scores[area] = {
            average:average,
            percent:percent
        };

    }


    return scores;

}


function getBatteryResult(scores){

    const ranking = [];


    for(let area in scores){

        ranking.push({
            area:area,
            percent:scores[area].percent
        });

    }


    ranking.sort((a,b)=>{
        return a.percent - b.percent;
    });


    const lowestPercent = ranking[0].percent;
    const focusAreas = [];


    ranking.forEach((item)=>{

        if(item.percent - lowestPercent <= 5){
            focusAreas.push(item);
        }

    });


    return {
        focus:ranking[0],
        focusAreas:focusAreas,
        ranking:ranking
    };

}


/* =========================================
   전체 계산
========================================= */

function calculateResult(){

    const typeScores = getTypeScores();
    const typeRanking = getTypeRanking(typeScores);
    const typeResult = getTypeResult(typeRanking);

    const attitudeScores = getAttitudeScores();
    const attitudeResult = getAttitudeResult(attitudeScores);

    const batteryScores = getBatteryScores();
    const batteryResult = getBatteryResult(batteryScores);


    return {

        type:{
            scores:typeScores,
            ranking:typeRanking,
            first:typeResult.first,
            second:typeResult.second,
            gap:typeResult.gap,
            state:typeResult.state
        },

        attitude:{
            scores:attitudeScores,
            strength:attitudeResult.strength,
            strengthAreas:attitudeResult.strengthAreas,
            caution:attitudeResult.caution,
            cautionAreas:attitudeResult.cautionAreas,
            ranking:attitudeResult.ranking,
            gap:attitudeResult.gap
        },

        battery:{
            scores:batteryScores,
            focus:batteryResult.focus,
            focusAreas:batteryResult.focusAreas,
            ranking:batteryResult.ranking
        }

    };

}


/* =========================================
   기본 검사 종료
========================================= */

function finishMainTest(){

    currentResult = calculateResult();


    if(currentResult.type.gap <= 1){

        startConfirmTest();

    }else{

        currentResult.type.final = {
            type:currentResult.type.first.type,
            secondType:currentResult.type.second.type,
            state:"single"
        };

        showFinalResult();

    }

}


/* =========================================
   추가 확인 질문
========================================= */

function startConfirmTest(){

    quizScreen.classList.add('hide');
    confirmScreen.classList.remove('hide');

    confirmAnswers.length = 0;


    const firstType = currentResult.type.first.type;
    const secondType = currentResult.type.second.type;


    confirmList = [
        confirmQuestions[firstType][0],
        confirmQuestions[secondType][0],
        confirmQuestions[firstType][1],
        confirmQuestions[secondType][1]
    ];


    currentConfirmQuestion = 0;

    showConfirmQuestion();

}


function showConfirmQuestion(){

    const question =
        confirmList[currentConfirmQuestion];


    confirmQuestionText.textContent =
        question.text;


    confirmCurrent.textContent =
        currentConfirmQuestion + 1;

    confirmTotal.textContent =
        confirmList.length;

}


confirmButtons.forEach((button)=>{

    button.addEventListener('click',()=>{

        const score = Number(button.dataset.score);
        const question = confirmList[currentConfirmQuestion];


        confirmAnswers.push({
            type:question.type,
            score:score
        });


        currentConfirmQuestion++;


        if(currentConfirmQuestion < confirmList.length){

            showConfirmQuestion();

        }else{

            finishConfirmTest();

        }

    });

});


function finishConfirmTest(){

    const firstType = currentResult.type.first.type;
    const secondType = currentResult.type.second.type;

    let firstScore = currentResult.type.first.score;
    let secondScore = currentResult.type.second.score;


    confirmAnswers.forEach((answer)=>{

        if(answer.type === firstType){
            firstScore += answer.score;
        }

        if(answer.type === secondType){
            secondScore += answer.score;
        }

    });


    if(firstScore > secondScore){

        currentResult.type.final = {
            type:firstType,
            secondType:secondType,
            state:"single"
        };

    }else if(secondScore > firstScore){

        currentResult.type.final = {
            type:secondType,
            secondType:firstType,
            state:"single"
        };

    }else{

        currentResult.type.final = {
            type:firstType,
            secondType:secondType,
            state:"tie"
        };

    }


    showFinalResult();

}


/* =========================================
   결과 화면
========================================= */

function showFinalResult(){

    startScreen.classList.add('hide');
    quizScreen.classList.add('hide');
    confirmScreen.classList.add('hide');

    resultScreen.classList.remove('hide');


    showTypeResult();
    showAttitudeResult();
    showBatteryResult();
    showIntegratedResult();
    showChildResult();
    showPracticeOptions();
    updateCaptureResult();


    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

}


/* =========================================
   카드 이미지 처리
========================================= */

function setTypeCardImage(imageElement,type){

    imageElement.style.display = "block";

    imageElement.onerror = ()=>{

        imageElement.style.display = "none";

    };

    imageElement.onload = ()=>{

        imageElement.style.display = "block";

    };

    imageElement.src =
        typeCardImages[type];

}


/* =========================================
   부모유형 결과
========================================= */

function showTypeResult(){

    const finalType = currentResult.type.final;
    const mainType = finalType.type;

    resultTypeChips.innerHTML = "";

    setTypeCardImage(
        resultTypeCard,
        mainType
    );


    if(finalType.state === "single"){

        const meta = typeMeta[mainType];

        resultTypeTitle.textContent =
            meta.title;

        resultTypeMotive.textContent =
            meta.motive;


        meta.chips.forEach((chip)=>{

            const span =
                document.createElement('span');

            span.textContent = chip;

            resultTypeChips.appendChild(span);

        });


    }else{

        const firstMeta =
            typeMeta[finalType.type];

        const secondMeta =
            typeMeta[finalType.secondType];


        resultTypeTitle.textContent =
            firstMeta.name +
            " + " +
            secondMeta.name;


        resultTypeMotive.textContent =
            "두 가지 부모성향이 비슷하게 함께 나타나고 있어요.";


        firstMeta.chips.forEach((chip)=>{

            const span =
                document.createElement('span');

            span.textContent = chip;

            resultTypeChips.appendChild(span);

        });


        secondMeta.chips.forEach((chip)=>{

            const span =
                document.createElement('span');

            span.textContent = chip;

            resultTypeChips.appendChild(span);

        });

    }

}


/* =========================================
   양육태도
========================================= */

function showAttitudeResult(){

    const strengthAreas =
        currentResult.attitude.strengthAreas;

    const cautionAreas =
        currentResult.attitude.cautionAreas;


    attitudeBalanceText.textContent = "";


    attitudeOverviewItems.forEach((item)=>{

        item.classList.remove(
            'is-strength',
            'is-caution'
        );

    });


    const strengthToShow =
        strengthAreas.slice(0,2);

    const strengthNames = [];


    strengthToShow.forEach((item)=>{

        strengthNames.push(
            attitudeMeta[item.area].name
        );


        const overviewItem =
            document.querySelector(
                `.attitude-overview-item[data-area="${item.area}"]`
            );

        if(overviewItem){
            overviewItem.classList.add(
                'is-strength'
            );
        }

    });


    attitudeStrengthTitle.textContent =
        strengthNames.join(" · ");


    if(strengthToShow.length === 1){

        const meta =
            attitudeMeta[strengthToShow[0].area];

        attitudeStrengthMeaning.textContent =
            meta.meaning;

        attitudeStrengthText.textContent =
            meta.strength[1];

        attitudeStrengthGuide.textContent =
            meta.guide;

    }else{

        attitudeStrengthMeaning.textContent =
            "두 가지 양육태도가 비슷하게 강점으로 나타나고 있어요.";

        attitudeStrengthText.textContent =
            "아이를 대하는 방식에서 두 영역의 장점이 함께 나타나는 편입니다.";

        attitudeStrengthGuide.textContent =
            "두 강점을 상황에 맞게 자연스럽게 활용해보세요.";

    }


    if(cautionAreas.length === 0){

        attitudeCautionBox.classList.add('hide');

        attitudeBalanceText.textContent =
            "네 가지 양육태도가 비교적 고르게 나타나고 있어요. 특정한 한 영역보다 상황에 맞게 여러 방식을 함께 사용하고 있는 편입니다.";

        return;

    }


    attitudeCautionBox.classList.remove('hide');


    const cautionToShow =
        cautionAreas.slice(0,2);

    const cautionNames = [];


    cautionToShow.forEach((item)=>{

        cautionNames.push(
            attitudeMeta[item.area].name
        );


        const overviewItem =
            document.querySelector(
                `.attitude-overview-item[data-area="${item.area}"]`
            );

        if(overviewItem){
            overviewItem.classList.add(
                'is-caution'
            );
        }

    });


    attitudeCautionTitle.textContent =
        cautionNames.join(" · ");


    if(cautionToShow.length === 1){

        const meta =
            attitudeMeta[cautionToShow[0].area];

        attitudeCautionMeaning.textContent =
            meta.meaning;

        attitudeCautionText.textContent =
            meta.caution[1];

        attitudeCautionGuide.textContent =
            meta.guide;

    }else{

        attitudeCautionMeaning.textContent =
            "두 가지 영역을 조금 더 의식해보면 아이와의 관계에 도움이 될 수 있어요.";

        attitudeCautionText.textContent =
            "한 번에 모두 바꾸기보다 일상에서 한 가지 반응부터 천천히 시도해보세요.";

        attitudeCautionGuide.textContent =
            "두 영역 중 지금 가장 필요한 한 가지 행동을 골라 이번 주에 먼저 실천해보세요.";

    }

}


/* =========================================
   배터리
========================================= */

function showBatteryResult(){

    const focusAreas =
        currentResult.battery.focusAreas;

    const displayAreas =
        focusAreas.slice(0,2);


    if(displayAreas.length === 1){

        const item = displayAreas[0];
        const meta = batteryMeta[item.area];


        batteryHeading.textContent =
            "가장 먼저 충전이 필요한 배터리";

        batteryName.textContent =
            meta.name;

        batteryState.textContent =
            meta.state;

        batteryMeaning.textContent =
            meta.meaning;

        batterySign.textContent =
            meta.sign;

        batteryText.textContent =
            meta.text;

        batteryNumber.textContent =
            item.percent + "%";

        batteryLineFill.style.width =
            item.percent + "%";


    }else{

        const first = displayAreas[0];
        const second = displayAreas[1];

        const firstMeta =
            batteryMeta[first.area];

        const secondMeta =
            batteryMeta[second.area];


        batteryHeading.textContent =
            "함께 충전이 필요한 배터리";

        batteryName.textContent =
            firstMeta.name +
            " + " +
            secondMeta.name;

        batteryState.textContent =
            "두 영역에서 비슷한 정도의 에너지 소모가 나타나고 있어요.";

        batteryMeaning.textContent =
            firstMeta.meaning +
            " 또한 " +
            secondMeta.meaning;

        batterySign.textContent =
            firstMeta.sign +
            " 동시에 " +
            secondMeta.sign;

        batteryText.textContent =
            "두 영역이 비슷하게 낮게 나타났어요. 한 가지만 먼저 해결하려 하기보다 몸과 마음, 역할과 관계처럼 서로 연결된 부담을 함께 살펴보는 것이 도움이 될 수 있어요.";

        batteryNumber.textContent =
            first.percent + "%";

        batteryLineFill.style.width =
            first.percent + "%";

    }

}


/* =========================================
   통합 결과
========================================= */

function showIntegratedResult(){

    const mainType =
        currentResult.type.final.type;

    const mainBattery =
        currentResult.battery.focus.area;


    resultSummaryText.textContent =
        integrated45[mainType][mainBattery];

}


/* =========================================
   아이 시점
========================================= */

function showChildResult(){

    const mainType =
        currentResult.type.final.type;

    const childData =
        typeMeta[mainType].child;

    resultChildQuote.textContent =
        childData.quote;

    resultChildReason.textContent =
        childData.reason;

    resultChildAction.textContent =
        childData.action;

}


/* =========================================
   실천
========================================= */

function getPracticeOptions(){

    const options = [];

    const mainType =
        currentResult.type.final.type;

    const batteryArea =
        currentResult.battery.focus.area;


    options.push({

        category:"type",

        title:
            typeMeta[mainType].balance[0],

        text:
            typeMeta[mainType].balance[1]

    });


    options.push({

        category:"battery",

        title:
            batteryMeta[batteryArea].charge[0],

        text:
            batteryMeta[batteryArea].charge[1]

    });


    if(currentResult.attitude.caution){

        const area =
            currentResult.attitude.caution.area;


        options.push({

            category:"attitude",

            title:
                attitudeMeta[area].charge[0],

            text:
                attitudeMeta[area].charge[1]

        });

    }


    return options;

}


function getCategoryName(category){

    if(category === "type"){
        return "부모성향";
    }

    if(category === "battery"){
        return "나의 충전";
    }

    if(category === "attitude"){
        return "아이와의 관계";
    }

}


function showPracticeOptions(){

    const options =
        getPracticeOptions();

    practiceList.innerHTML = "";

    practiceSelected.classList.add('hide');

    capturePracticeTitle.textContent =
        "아직 선택하지 않았어요";


    options.forEach((option)=>{

        const button =
            document.createElement('button');


        button.type = "button";

        button.classList.add(
            'practice-item'
        );


        button.innerHTML = `

            <span class="practice-category">
                ${getCategoryName(option.category)}
            </span>

            <strong>
                ${option.title}
            </strong>

            <p>
                ${option.text}
            </p>

        `;


        button.addEventListener(
            'click',
            ()=>{

                selectPractice(
                    option,
                    button
                );

            }
        );


        practiceList.appendChild(button);

    });

}


function selectPractice(option,button){

    const buttons =
        document.querySelectorAll(
            '.practice-item'
        );


    buttons.forEach((item)=>{
        item.classList.remove('on');
    });


    button.classList.add('on');

    practiceSelected.classList.remove('hide');

    practiceSelectedTitle.textContent =
        option.title;

    practiceSelectedText.textContent =
        option.text;

    capturePracticeTitle.textContent =
        option.title;

}


/* =========================================
   저장 이미지 내용 업데이트
========================================= */

function updateCaptureResult(){

    const mainType =
        currentResult.type.final.type;

    const batteryArea =
        currentResult.battery.focus.area;

    const typeData =
        typeMeta[mainType];

    const batteryData =
        batteryMeta[batteryArea];


    setTypeCardImage(
        captureTypeCard,
        mainType
    );


    captureTypeTitle.textContent =
        typeData.title;


    captureTypeChips.innerHTML = "";


    typeData.chips.forEach((chip)=>{

        const span =
            document.createElement('span');

        span.textContent = chip;

        captureTypeChips.appendChild(span);

    });


    captureSummaryText.textContent =
        integrated45[mainType][batteryArea];


    captureChildText.textContent =
        typeData.child.quote;


    captureBatteryName.textContent =
        batteryData.name;


    captureBatteryPercent.textContent =
        currentResult.battery.focus.percent + "%";

}


/* =========================================
   결과 이미지 저장
========================================= */

btnResultSave.addEventListener('click',()=>{

    if(
        capturePracticeTitle.textContent ===
        "아직 선택하지 않았어요"
    ){

        alert(
            "이번 주 실천 한 가지를 먼저 선택해주세요."
        );

        return;

    }


    saveResultImage();

});


async function saveResultImage(){

    if(typeof html2canvas === "undefined"){

        alert(
            "이미지 저장 기능을 불러오지 못했어요. 인터넷 연결을 확인해주세요."
        );

        return;

    }


    btnResultSave.disabled = true;

    btnResultSave.innerHTML = `
        <span class="material-symbols-outlined">hourglass_top</span>
        이미지를 만들고 있어요...
    `;


    try{

        if(document.fonts){
            await document.fonts.ready;
        }


        if(
            captureTypeCard &&
            captureTypeCard.src
        ){

            try{
                await captureTypeCard.decode();
            }catch(error){
                console.log(
                    "카드 이미지 로딩 확인:",
                    error
                );
            }

        }


        const canvas =
            await html2canvas(
                captureArea,
                {
                    scale:1.5,
                    backgroundColor:"#F7F4EF",
                    useCORS:true,
                    allowTaint:false,
                    logging:false
                }
            );


        const blob =
            await new Promise((resolve)=>{

                canvas.toBlob(
                    resolve,
                    "image/png"
                );

            });


        if(!blob){
            throw new Error(
                "이미지 생성에 실패했습니다."
            );
        }


        const url =
            URL.createObjectURL(blob);


        const link =
            document.createElement('a');


        link.href = url;

        link.download =
            "마음사이_부모검사결과.png";


        document.body.appendChild(link);

        link.click();

        link.remove();


        setTimeout(()=>{

            URL.revokeObjectURL(url);

        },1000);


        resetSaveButton();


    }catch(error){

        console.error(
            "결과 이미지 저장 오류:",
            error
        );


        resetSaveButton();


        alert(
            "결과 이미지를 만드는 중 문제가 발생했어요. 브라우저를 새로고침한 뒤 다시 시도해주세요."
        );

    }

}


function resetSaveButton(){

    btnResultSave.disabled = false;

    btnResultSave.innerHTML = `
        <span class="material-symbols-outlined">image</span>
        검사결과 이미지 저장
    `;

}


/* =========================================
   다시 검사
========================================= */

btnRestart.addEventListener('click',()=>{

    for(let key in answers){
        delete answers[key];
    }


    confirmAnswers.length = 0;

    currentQuestion = 0;
    currentConfirmQuestion = 0;

    currentResult = null;
    confirmList = [];


    resultScreen.classList.add('hide');
    startScreen.classList.remove('hide');


    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});
