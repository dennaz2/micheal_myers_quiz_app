//import questions
import { easyQuestions } from './easy.js';
import { hardQuestions } from './hard.js';
// console.log(easyQuestions);
// console.log(hardQuestions);

//Define variables
let easyView = document.querySelector('.easy-view');
let mainVeiw = document.querySelector('.main-view');
let easyBtn = document.querySelector('.easy-btn');
let hardView = document.querySelector('.hard-view');
let hardBtn = document.querySelector('.hard-btn');

// start screen for easy quiz
easyBtn.addEventListener('click', startEasyQuiz);

function startEasyQuiz(event) {
    event.preventDefault();
    mainVeiw.style.display = "none";
    easyView.classList.add('open');
    showEasyQuestions();
}

function showEasyQuestions() {
    console.log("Hello");
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