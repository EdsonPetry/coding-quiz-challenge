// Global variables
let startBtn = document.querySelector("#start-btn");
let startPage = document.querySelector(".start-page");
let quizPage = document.querySelector(".quiz-div");
let optionBtn = document.querySelector(".answerBtn");
let endPage = document.querySelector(".end-game");
let currentQuestionIndex = 0;
let choicesEl = document.querySelector("#choices");
let timer;
let score = 0;
let saveScoreBtn = document.querySelector("#save-score-btn");
let initialsInput = document.querySelector("#initials-input");

startBtn.addEventListener("click", startQuiz);
saveScoreBtn.addEventListener("click", saveScore);

// Starts quiz and timer
function startQuiz() {
  startPage.classList.add("hide");
  quizPage.classList.remove("hide");
  let fiveMinutes = 60 * 5;
  let display = document.querySelector("#time");
  startTimer(fiveMinutes, display);
  displayQuestion();
}

function displayQuestion() {
  choicesEl.innerHTML = "";
  let currentQuestion = questions[currentQuestionIndex];
  let titleEl = document.querySelector("#question-display");
  titleEl.textContent = currentQuestion.question;
  for (let i = 0; i < currentQuestion.choices.length; i++) {
    let choice = currentQuestion.choices[i];
    let choiceBtn = document.createElement("button");
    choiceBtn.setAttribute("class", "choice");
    choiceBtn.setAttribute("value", choice);
    choiceBtn.textContent = choice;
    choicesEl.appendChild(choiceBtn);
  }
}

choicesEl.addEventListener("click", questionClick);

function questionClick(event) {
  let buttonEl = event.target;
  if (!buttonEl.matches(".choice")) {
    return;
  }
  if (buttonEl.value !== questions[currentQuestionIndex].answer) {
    timer = timer - 10;
    quizPage.setAttribute("style", "background-color:red");
  } else {
    quizPage.setAttribute("style", "background-color:green");
    score++;
  }
  currentQuestionIndex++;
  if (currentQuestionIndex === questions.length || timer <= 0) {
    endQuiz();
  } else {
    displayQuestion();
  }
}

// Timer and countdown, if timer equals 0:00 then display end game screen
function startTimer(duration, display) {
  timer = duration;
  setInterval(function () {
    if (timer <= 0) {
      clearInterval(this);
      timesUp();
      return;
    }
    let minutes = parseInt(timer / 60, 10);
    let seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = minutes + ":" + seconds;
    timer--;
  }, 1000);
}

function timesUp() {
  endQuiz();
}

function endQuiz() {
  quizPage.classList.add("hide");
  endPage.classList.remove("hide");
}

function saveScore() {
  let initials = initialsInput.value.trim();
  if (initials !== "") {
    let highScores = JSON.parse(localStorage.getItem("highScores")) || [];
    let newScore = {
      score: score,
      initials: initials,
    };

    highScores.push(newScore);
    highScores.sort((a, b) => b.score - a.score);
    highScores.splice(10);

    localStorage.setItem("highScores", JSON.stringify(highScores));

    displayHighScores();
  }
}

function displayHighScores() {
  let highScoresList = document.querySelector("#high-scores");
  let highScores = JSON.parse(localStorage.getItem("highScores")) || [];

  highScoresList.innerHTML = highScores
    .map((score) => {
      return `<li>${score.initials} - ${score.score}</li>`;
    })
    .join("");

  endPage.classList.add("hide");
  highScoresList.classList.remove("hide");
}

let restartBtn = document.querySelector("#restart");
let highScoresBtn = document.querySelector("#high-scores-btn");

restartBtn.addEventListener("click", restartQuiz);
highScoresBtn.addEventListener("click", displayHighScores);

function restartQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  timer = 0;
  endPage.classList.add("hide");
  startPage.classList.remove("hide");
}
