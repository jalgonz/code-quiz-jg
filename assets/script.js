//Array of Questions 
var questions = [
    {
        question: "Commonly used data types do NOT include:",
        answers: ["1. Booleans", "2. Numbers", "3. Strings", "4. Alerts"],
        correct: "4"
    },
    {
        question: "Arrays in Javascript can be used to store ____.",
        answers: ["1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above"],
        correct: "4"
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answers: ["1. Javascript", "2. terminal/bash", "3. for loops", "4. console.log"],
        correct: "4"
    },
    {
        question: "String values must be enclosed within ____ when being assigned to variables.",
        answers: ["1. commmas", "2. curly brackets", "3. quotes", "4. parentheses"],
        correct: "3"
    },
    {
        question: "The condition in an if / else statement is enclosed within ____.",
        answers: ["1. quotes", "2. curly brackets", "3. parentheses", "4. square brackets"],
        correct: "3"
    }
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
var correctIncorrect = document.querySelector("#correct-incorrect");

//End Screen
var endEl = document.querySelector("#end");
var scoreEl = document.querySelector("#score");
var intitalsInput = document.querySelector("#initials");

//Highscore Screen
var highscoreEl = document.querySelector("#highscore");
var highscoreListEl = document.querySelector("#highscore-list");
var scoreList = [];

//Buttons
var startBtn = document.querySelector("#start-btn");
var choice1Btn = document.querySelector("#a1");
var choice2Btn = document.querySelector("#a2");
var choice3Btn = document.querySelector("#a3");
var choice4Btn = document.querySelector("#a4");
var choiceBtnAll = document.querySelectorAll("button.choiceBtn")
var submitScoreBtn = document.querySelector("#submit-score");
var goBackBtn = document.querySelector("#go-back");
var clearScoresBtn = document.querySelector("#clear-scores");
var viewHighscoresBtn = document.querySelector("#view-highscores");

//FUNCTIONS

//Timer
function startTimer(){
    var timerInterval = setInterval(function () {
        timeLeft--;
        timeEl.textContent = "Time left: " + timeLeft;

        if(timeLeft <= 0 || questionsAwnsered === questions.length) {
            clearInterval(timerInterval);
            questionsEl.style.display = "none";
            endEl.style.display = "block";
            scoreEl.textContent = timeLeft;
        }
    }, 1000);
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
function showQuestions(id) {
    if (id < questions.length) {
        questionsEl.textContent = questions[id].question;
        choice1Btn.textContent = questions[id].answers[0];
        choice1Btn.textContent = questions[id].answers[1];
        choice3Btn.textContent = questions[id].answers[2];
        choice4Btn.textContent = questions[id].answers[3];
    }
}

// Determines if answer is correct and subtracts time if answer is wrong
function gradeAnswer(event) {
    event.preventDefault();

    correctIncorrect.style.display = "block";
    var declareCorrectIncorrect = document.createElement("p");
    correctIncorrect.appendChild(declareCorrectIncorrect);

    if (questions[questionsAwnsered].correct === event.target.value) {
        declareCorrectIncorrect.textContent = "Correct";
    } else {
        timeLeft = timeLeft - 15;
        declareCorrectIncorrect.textContent = "Incorrect";
    }

    if (questionsAwnsered < questions.length) {
        questionsAwnsered++;
    }

    showQuestions(questionsAwnsered)
}

//Add highscore to local storage
function addHighScore(event) {
    event.preventDefault();

    endEl.style.display = "none";
    highscoreEl.style.display = "block";

    scoreList.push({ initials: intitalsInput, score: timeLeft });


    scoreList = scoreList.sort((a, b) => {
        if (a.score < b.score) {
          return 1;
        } else {
          return -1;
        }
      });
    
    highscoreListEl.innerHTML="";
    for (let i = 0; i < scoreList.length; i++) {
        let li = document.createElement("li");
        li.textContent = `${scoreList[i].initials}: ${scoreList[i].score}`;
        highscoreListEl.append(li);
    }

   storeScores();
   displayScores();
} 

function storeScores() {
    localStorage.setItem("scoreList", JSON.stringify(scoreList));
}

function displayScores() {
    let storedScoreList = JSON.parse(localStorage.getItem("scoreList"));

    if (storedScoreList !== null) {
        scoreList = storedScoreList;
    }
}

function clearHighcoreList() {
    localStorage.clear();
    highscoreListEl.innerHTML="";
}

// EVENT LISTENERS

//Start Quiz
startBtn.addEventListener("click", startQuiz);

//View Highscores
viewHighscoresBtn.addEventListener("click", function () {
    if (highscoreEl.style.display === "none") {
        highscoreEl.style.display = "block";
    } else if (highscoreEl.style.display === "block") {
        highscoreEl.style.display = "none";
    } else {
        return alert("No highscores yet, start quiz to add your score.");
    }
});

//Clear highscores
clearScoresBtn.addEventListener("click", clearHighcoreList);

//Validates answers
choiceBtnAll.forEach(item => {
    item.addEventListener("click", gradeAnswer);
});

//Submits score 
submitScoreBtn.addEventListener("click", addHighScore);

//Return to Start Screen\
goBackBtn.addEventListener("click", function () {
    highscoreEl.style.display = "none";
    startEl.style.display = "block";
    timeLeft = 90;
    timeEl.textContent = "Time Left: " + timeLeft;
});