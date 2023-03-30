// Global variables
let startBtn = document.querySelector("#start-btn");
let startPage = document.querySelector(".start-page");
let quizPage = document.querySelector(".quiz-div");
let optionBtn = document.querySelector(".answerBtn");
let endPage = document.querySelector(".end-game");
let currentQuestionIndex = 0;
let choicesEl = document.querySelector("#choices");
let timer;

startBtn.addEventListener("click", startQuiz);
// Starts quiz and timer
function startQuiz() {
  startPage.classList.add("hide");
  quizPage.classList.remove("hide");
  countdown();
  displayQuestion();
}

function displayQuestion() {
  let currentQuestion = questions[currentQuestionIndex];
  let titleEl = document.querySelector("#question-display");
  titleEl.textContent = currentQuestion.question;
  for (let i = 0; i < currentQuestion.choices.length; i++) {
    let choice = currentQuestion.choices[i];
    let choiceBtn = document.createElement("button");
    choiceBtn.setAttribute("class", "class");
    choiceBtn.setAttribute("value", choice);
    choiceBtn.textContent = choice;
    choicesEl.appendChild(choiceBtn);
  }
}

choicesEl.addEventListener("click", questionClick);
function questionClick(event) {
  let buttenEl = event.target;
  if (!buttenEl.matches(".choice")) {
    return;
  }
  if (buttenEl.value !== questions[currentQuestionIndex].answer) {
    timer = timer - 10;
    quizPage.setAttribute("style", "background-color:red");
  } else {
    quizPage.setAttribute("style", "background-color:green");
  }
}

// Timer and countsdown, if timer equals 0:00 then display end game screen
function startTimer(duration, display) {
  let timer = duration,
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

function countdown() {
  let fiveMinutes = 60 * 5,
    display = document.querySelector("#time");
  startTimer(fiveMinutes, display);
}
