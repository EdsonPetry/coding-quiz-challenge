// GIVEN I am taking a code quiz
let startBtn = document.querySelector("#start-btn");
let startPage = document.querySelector(".start-page");
let quizPage = document.querySelector(".quiz-div");
let optionBtn = document.querySelector(".answerBtn");
let endPage = document.querySelector(".end-game");
var currentQuestionIndex = 0;
let choicesEl = document.querySelector("#choices");
let timer;
/* Add event listener for startBtn so when it is clicked it runs a function called
startQuiz */
startBtn.addEventListener("click", startQuiz);
// Starts quiz and timer
function startQuiz() {
  startPage.classList.add("hide");
  quizPage.classList.remove("hide");
  // startTimer();
  displayQuestion();
}

function displayQuestion() {
  var currentQuestion = questions[currentQuestionIndex];
  var titleEl = document.querySelector("#question-display");
  titleEl.textContent = currentQuestion.question;
  for (var i = 0; i < currentQuestion.choices.length; i++) {
    var choice = currentQuestion.choices[i];
    var choiceBtn = document.createElement("button");
    choiceBtn.setAttribute("class", "class");
    choiceBtn.setAttribute("value", choice);
    choiceBtn.textContent = choice;
    choicesEl.appendChild(choiceBtn);
  }
}

function questionClick(event) {
  var buttenEl = event.target;
  if (!buttenEl.matches('.choice')) {
    return;
  } 
  if (buttenEl.value !== questions[currentQuestionIndex].answer) {
    timer = timer - 10
    // Make background color of the box red
  } else {
    // Make background color of the box green
  }
}
// Listens for click on button and checks if correct = true, if correct does not = true then subtract time from timer
// optionBtn.addEventListener('click', corrrectAnswer)
// correctAnswer() {

// }

// Timer and countsdown, if timer equals 0:00 then display end game screen
function startTimer(duration, display) {
  timer = duration,
    minutes,
    seconds;
  setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = minutes + ":" + seconds;

    if (--timer < 0) {
      timer = duration;
    }
  }, 1000);

  if (timer == 0) {
    timesUp();
  }
}
function timesUp() {
  quizPage.classList.add("hide");
  endPage.classList.remove("hide");
}

window.onload = function () {
  let fiveMinutes = 60 * 5,
    display = document.querySelector("#time");
  startTimer(fiveMinutes, display);
};

/* startQuiz function will add hide class on our start-page div and remove hide class on our
showQuiz div */
// startQuiz function will run our startTimer function and run displayQuestion function

/* Add event listener for option buttons, when option butten is clicked run checkAnswer
function, if option is wrong, display quiz div background red + subtract time from startTimer
if option is correct, display quiz div background green */
// after option is selected display next button
// set an event listener for next button
// WHEN next button is clicked next question  should pop up

//IF all answer are answer || the timer reaches 0
// THEN a highscore is displayed with the option to enter your name
// If player enters name, highscore and name get saved to a Local Database on  the browser
