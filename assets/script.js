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
var choice1 = document.querySelector("#a1");
var choice2 = document.querySelector("#a2");
var choice3 = document.querySelector("#a3");
var choice4 = document.querySelector("#a4");