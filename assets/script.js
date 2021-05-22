//Array of Questions 
var questions = 

// Declare Variables

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

//Functions

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

