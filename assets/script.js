// QUESTIONS
const questions = [
    {
        question: 'What language should you use to build the structure for your website?',
        optionA: 'HTML',
        optionB: 'JavaScript',
        optionC: 'CSS',
        optionD: 'Python',
        correctAnswer: 'optionA'
    },

    {
        question: 'How do you select an ID in your HTML from your stylesheet?',
        optionA: '#',
        optionB: '.',
        optionC: '.getElementByID',
        optionD: ';',
        correctAnswer: 'optionA'
    },

    {
        question: 'Which of the follow is a valid HTML tag?',
        optionA: 'h1',
        optionB: '<>',
        optionC: '<h1>',
        optionD: '>h1,',
        correctAnswer: 'optionC'
    },

    {
        question: 'Which of the following is an example of metadata about a webpage?',
        optionA: 'The title of the webpage',
        optionB: 'The body of the webpage',
        optionC: 'An <h1> tag on the webpage',
        optionD: 'All of the above',
        correctAnswer: 'optionA'
    },

    {
        question: 'What does the <br> tag do?',
        optionA: 'Creates a line break on the webpage',
        optionB: 'Creates a horizontal line on the webpage',
        optionC: 'Bolds text',
        optionD: 'None of the above',
        correctAnswer: 'optionA'
    },

    {
        question: 'Inside which HTML element do we link our JavaScript file?',
        optionA: '<javascript>',
        optionB: '<js>',
        optionC: '<link>',
        optionD: '<script>',
        correctAnswer: 'optionD'
    },

    {
        question: 'Which of the follow is not a data type in JavaScript?',
        optionA: 'objects',
        optionB: 'strings',
        optionC: 'numbers',
        optionD: 'variables',
        correctAnswer: 'optionD'
    },

    { 
        question: 'Is Java the same as JavaScript',
        optionA: 'No',
        optionB: 'Yes',
        optionC: 'What',
        optionD: 'They are the same, one is just used for mobile apps.',
        correctAnswer: 'optionB'
    },

    {
        question: 'How do you call a function in JavaScript?',
        optionA: 'call myFunction()',
        optionB: 'myFunction()',
        optionC: 'call function myFunction',
        optionD: 'call.myFunction()',
        correctAnswer: 'optionB'
    },

    {
        question: 'How can you make comments within JavaScript?',
        optionA: '//This is a comment',
        optionB: '<!--This is a comment-->',
        optionC: '#This is a commment',
        optionD: '$$This is a comment$$',
        correctAnswer: 'optionA'
    }

]

console.log(questions)

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