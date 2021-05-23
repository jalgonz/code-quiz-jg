//Array of Questions 
var questions = [
    {
        question: "Commonly used data types do NOT include:",
        answers: ["1. Booleans", "2. Numbers", "3. Strings", "4. Alerts"],
        correct: "4"
    },
    {
        question: 
        answers:
        correct:
    },
    {
        question: 
        answers:
        correct:
    },
    {
        question: 
        answers:
        correct:
    },
    {
        question: 
        answers:
        correct:
    },
    {
        question: 
        answers:
        correct:
    },
];

//VARIABLES

//Timer
var timeEl = document.querySelector("p.timer");
var timeLeft = 90;

//Start Screen
var startEl = document.querySelector("#start-screen");

//Question Screen
var questionsEl = document.querySelector("#question-screen");
var randomQuestionEl = document.querySelector("#random-question");
var questionsAwnsered = 0;
var correctIncorrect = document.querySelector("correct-incorrect");

//End Screen
var endEl = document.querySelector("#end");
var scoreEl = document.querySelector("#score");
var intitalsInput = document.querySelector("initials");

//Highscore Screen
var highscoreEL = document.querySelector("#highscore");
var highscoreListEl = document.querySelector("highscore-list");
var scoreList = [];

//Buttons
var startBtn = document.querySelector("#start-btn");
//answer button? 
var choice1Btn = document.querySelector("#a1");
var choice2Btn = document.querySelector("#a2");
var choice3Btn = document.querySelector("#a3");
var choice4Btn = document.querySelector("#a4");
var submitScoreBtn = document.querySelector("#submit-score");
var goBackBtn = document.querySelector("#go-back");
var clearScoresBtn = document.querySelector("#clear-scores");
var viewHighscoresBtn = document.querySelector("#view-highscores");

//FUNCTIONS

//Timer
function startTimer(){
    var timerInterval = setInterval(function (){
        timeLeft--;
        timeEl.textContent = "Time left: " + timeLeft;

        if(timeLeft <= 0 || questionsAwnsered === questions.length) {
            clearInterval(timerInterval);
            questionsEl.style.display = "none";
            endEl.style.display = "block";
            scoreEl.textContent = secondsLeft;
        }
    },1000)
}

//Starts quiz and timer, and hides start screen
function startQuiz() {
    startEl.style.display = "none";
    questionsEl.style.display = "block";
    questionsAwnsered = 0;

    startTimer();
    showQuestions(questionsAwnsered);
}

//Shows questions
function showQuestions(questionsAwnsered) {
    if (questionsAwnsered < questions.length) {
        questionsEl.textContent = questions[id].question;
        choice1Btn.textContent = questions[id].answers[0];
        choice1Btn.textContent = questions[id].answers[1];
        choice3Btn.textContent = questions[id].answers[2];
        choice4Btn.textContent = questions[id].answers[3];
    }
}
// Event Listeners
startBtn.addEventListener("click", )