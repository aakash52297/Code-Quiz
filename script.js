//Questions and answers
var questions = [
    {
        question: "What is an array?",
        answers: ["a1: An ordered list of values", "a2: Bucket of fruits", "a3: A computer", "a4: A new song by 50 cent"],
        correctAnswer: "a1: An ordered list of values"
    },
    {
        question: "What is a string?",
        answers: ["a1: A type of cheese", "a2: Stores a series of characters", "a3: A vegetable", "a4: A brand new toy"],
        correctAnswer: "a2: Stores a series of charracters"
    },
    {
        question: "What is a function?",
        answers: ["a1: A math problem", "a2: A type of food", "a3: Set of statements that perfoms a task", "a4: A car company"],
        correctAnswer: "a3: Set of statements that perfoms a task"
    },
    {
        question: "What is a variable?",
        answers: ["a1: A video game", "a2: A candy bar", "a3: An imaginary word", "a4: Anything that can vary"],
        correctAnswer: "a4: Anything that can vary"
    },
]
var timerId; 
//variables to hold dom elements
var timerEl = document.getElementById("time");
var questionsEl = document.getElementById("questions");
var answerChoiceEl = document.getElementById("answer-choices");
var submitEl = document.getElementById("submit");
var startEl = document.getElementById("start-button");
var initalsEl = document.getElementById("initials");
var feedbackEl = document.getElementById("feedback");
var startPageEl = document.getElementById("start-page");

function beginQuiz(){
    //hide start page
    startPageEl.setAttribute("class"); 
}

startEl.onclick = beginQuiz();