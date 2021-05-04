const question = document.querySelector('#question');
const choices = document.querySelectorAll('.choice-text');
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {};
let acceptingAnswers = true; 
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [];

//fetch를 이용해 json 파일 받아오기
fetch("question.json")
    .then( res => {
        console.log(res);
        return res.json(); //json파일을 읽고 JSON 객체 형태로 파싱
    })
    .then( loadedQuestion => {
        questions = loadedQuestion;
        startGame(); //게임 실행
    })
    .catch ( err => {
        console.error(err);
    });

//CONSTANTS
const CORRECT_BOUNS = 20;
const MAX_QUESTIONS = 5;

//새 게임 시작
startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [ ...questions ];
    getNewQuestion();
};

//새로운 문제 출력
getNewQuestion = () => {

    //window.location.assign 새로운 브라우저 불러오기
    if(availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS){
        localStorage.setItem('mostRecentScore', score);
        return window.location.assign("./end.html");
    }

    questionCounter++;

    //Update the Progress Text
    progressText.innerText = `Question ${questionCounter} / ${MAX_QUESTIONS}`;

    //Update the Progress Bar
    progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

    //문제를 랜덤으로 내기
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerHTML = currentQuestion.question;

    //choices는 .choice-text가 모여있는 배열임 forEach를 통해 배열을 단순 순회
    choices.forEach( choice => {
        const number = choice.dataset['number'];
        choice.innerHTML = currentQuestion['choice' + number ];
    });

    //availableQuestions에서 방금 출제한 questionIndex를 제거함
    availableQuestions.splice(questionIndex, 1);

    acceptingAnswers = true;
}

choices.forEach( choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return;

        acceptingAnswers = false;

        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset["number"]; //data-number="1"에서 1을 의미

        let classToApply = 
            selectedAnswer == currentQuestion.answer ?
            'correct' : 'incorrect';

        if (classToApply === 'correct'){
            incrementScore(CORRECT_BOUNS);
        }

        selectedChoice.parentElement.classList.add(classToApply);
        
        setTimeout( () => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();
        },1000);
    })
});

//점수 증가
incrementScore = num => {
    score = score + num;
    scoreText.innerText = score;
}