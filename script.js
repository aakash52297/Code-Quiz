var questions = [
    {
        question: "Q1",
        answers: ["a1: answer 1", "a2: answer 2", "a3: answer 3", "a4: answer 4"],
        correctAnswer: "a1: answer 1"
    },
    {
        question: "Q2",
        answers: ["a1: answer 1", "a2: answer 2", "a3: answer 3", "a4: answer 4"],
        correctAnswer: "a1: answer 1"
    },
    {
        question: "Q3",
        answers: ["a1: answer 1", "a2: answer 2", "a3: answer 3", "a4: answer 4"],
        correctAnswer: "a1: answer 1"
    },
    {
        question: "Q4",
        answers: ["a1: answer 1", "a2: answer 2", "a3: answer 3", "a4: answer 4"],
        correctAnswer: "a1: answer 1"
    },
    {
        question: "Q5",
        answers: ["a1: answer 1", "a2: answer 2", "a3: answer 3", "a4: answer 4"],
        correctAnswer: "a1: answer 1"
    }
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
    // hide start page
    startPageEl.setAttribute("class"); 
}

startEl.onclick = beginQuiz();