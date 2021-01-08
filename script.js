//import questions
import { easyQuestions } from './easy.js';
import { hardQuestions } from './hard.js';

//Define variables
let easyView = document.querySelector('.easy-view');
let mainVeiw = document.querySelector('.main-view');
let easyBtn = document.querySelector('.easy-btn');
let hardView = document.querySelector('.hard-view');
let hardBtn = document.querySelector('.hard-btn');
let nextBtn = document.querySelector('.next-btn');
let currentQues = {};
let questionCounter = 0;

//question page variables
let questionTitle = document.querySelector('.question');
let questionNum = document.querySelector('.q-num');
let score = document.querySelector('.score');
let choices = document.querySelectorAll('.ans-choice');

// start screen for easy quiz
easyBtn.addEventListener('click', startEasyQuiz);

function startEasyQuiz(event) {
    event.preventDefault();
    mainVeiw.style.display = "none";
    easyView.classList.add('open');
    showEasyQuestions();
}

function showEasyQuestions() {
    //selecting a random question
    let randomQuestion = Math.floor(Math.random() * easyQuestions.length);
    currentQues = easyQuestions[randomQuestion];
    questionTitle.innerText = currentQues.title;


    
}


//Start screen for hard quiz 
hardBtn.addEventListener('click', startHardQuiz);

function startHardQuiz(event) {
    event.preventDefault();
    mainVeiw.style.display = "none";
    hardView.classList.add('open');
    showHardQuestions();
}

function showHardQuestions() {
    console.log("Hello");
}