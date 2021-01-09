//import questions
import { easyQuestions } from './easy.js';
import { hardQuestions } from './hard.js';

//Define variables
let easyQuiz = false;
let hardQuiz = false;
let questionView = document.querySelector('.question-view');
let mainVeiw = document.querySelector('.main-view');
let easyBtn = document.querySelector('.easy-btn');
let hardBtn = document.querySelector('.hard-btn');
let currentEasyQues = {};
let currentHardQues = {};
let questionCounter = 0;
let acceptedAns = false;

//question page variables
let questionTitle = document.querySelector('.question');
let questionNum = document.querySelector('.q-num');
let score = document.querySelector('.score');
let choices = document.querySelectorAll('.ans-choice');

// start screen for easy quiz
easyBtn.addEventListener('click', startEasyQuiz);

//Start screen for hard quiz 
hardBtn.addEventListener('click', startHardQuiz);

function startEasyQuiz(event) {
    event.preventDefault();
    mainVeiw.style.display = "none";
    questionView.classList.add('open');
    easyQuiz = true;
    showQuestions();
}

function startHardQuiz(event) {
    event.preventDefault();
    mainVeiw.style.display = "none";
    questionView.classList.add('open');
    hardQuiz = true;
    showQuestions();
}

function showQuestions() {
    //selecting a random question
    if (easyQuiz == true){
        let randomEasyQuestion = Math.floor(Math.random() * easyQuestions.length);
        currentEasyQues = easyQuestions[randomEasyQuestion];
        questionTitle.innerText = currentEasyQues.title;

        //answer choices
        choices.forEach(choice => {
            let easyQuesNum = choice.dataset["number"]; // getting the data number 
            choice.innerText = currentEasyQues["answer" + easyQuesNum];
        });
    } else {
        let randomHardQuestion = Math.floor(Math.random() * hardQuestions.length);
        currentHardQues = hardQuestions[randomHardQuestion];
        console.log(currentHardQues);
        questionTitle.innerText = currentHardQues.title;

        //answer choices
        choices.forEach(choice => {
            let hardQuesNum = choice.dataset["number"]; // getting the data number 
            choice.innerText = currentHardQues["answer" + hardQuesNum];
        });
    }
    
}

//Determine if answer choices are correct ir in-correct
