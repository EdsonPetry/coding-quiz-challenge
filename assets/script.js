// Variables
const hidePage = document.querySelector(".hidePage");
const startButton = document.querySelector("#startQuizBtn");
const showQuestions = document.querySelector(".questions");
const question1 = document.querySelector("#question1");

const points = "";
let timer = document.querySelector(".timer");
var count = 300;

// Event listeners
startButton.addEventListener("click", startQuiz);

// Functions to complete tasks
function startQuiz() {
  // Hides home page
  hidePage.style.display = "none";
  // Shows question 1
  showQuestions.style.display = "grid";
  startCountdown();
}



function startCountdown() {
  timer = setInterval(function () {
    count--;
    timer.innerText = "Remaining time: " + count;

    if (count === 0) {
      clearInterval(timer);
    }
  }, 1000);
}

// QUESTIONS
const questions = [
  {
    question:
      "What language should you use to build the structure for your website?",
    answers: [
      { text: "HTML", correct: true },
      { text: "JavaScript", correct: false },
      { text: "CSS", correct: false },
      { text: "Python", correct: false },
    ],
  },

  {
    question: "How do you select an ID in your HTML from your stylesheet?",
    answers: [
      { text: "#", correct: true },
      { text: ".", correct: false },
      { text: ".getElementByID", correct: false },
      { text: ";", correct: false },
    ],
  },

  {
    question: "Which of the follow is a valid HTML tag?",
    answers: [
      { text: "h1", correct: false },
      { text: "<>", correct: false },
      { text: "<h1>", correct: true },
      { text: ">h1,", correct: false },
    ],
  },

  {
    question:
      "Which of the following is an example of metadata about a webpage?",
    answers: [
      { text: "The title of the webpage", correct: true },
      { text: "The body of the webpage", correct: false },
      { text: "An <h1> tag on the webpage", correct: false },
      { text: "All of the above", correct: false },
    ],
  },

  {
    question: "What does the <br> tag do?",
    answers: [
      { text: "Creates a line break on the webpage", correct: true },
      { text: "Creates a horizontal line on the webpage", correct: false },
      { text: "Bolds text", correct: false },
      { text: "None of the above", correct: false },
    ],
  },
];

/* 
GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and score
*/
