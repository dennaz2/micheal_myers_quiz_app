//import questions
import { easyQuestions } from './easy.js';
import { hardQuestions } from './hard.js';

//Define variables
let easyQuiz = false;
let questionView = document.querySelector('.question-view');
let mainVeiw = document.querySelector('.main-view');
let easyBtn = document.querySelector('.easy-btn');
let hardBtn = document.querySelector('.hard-btn');
let currentQuestion = {};
let questionCounter = 0;
let acceptedAns = false;
let score = 0;

//question view page elements
let questionTitle = document.querySelector('.question');
let questionNum = document.querySelector('.q-num');
let scoreEl = document.querySelector('.score');
let choices = document.querySelectorAll('.ans-choice');
let finalScore = document.querySelector('.final-score');

//summary page elements 
let summaryView = document.querySelector('.summary-view');
let restartBtn = document.querySelector('.restart-btn');

//Functions
function startEasyQuiz(event) {
    event.preventDefault();
    mainVeiw.classList.add('close');
    questionView.classList.add('open');
    easyQuiz = true;
    showQuestions();
}

function startHardQuiz(event) {
    event.preventDefault();
    mainVeiw.style.display = "none";
    questionView.classList.add('open');
    showQuestions();
}

function showQuestions() {
    //selecting a random question
    if (easyQuiz == true) {
        questionCounter++;
        let randomQuestion = Math.floor(Math.random() * easyQuestions.length);
        currentQuestion = easyQuestions[randomQuestion];
        console.log(currentQuestion)
        questionTitle.innerText = currentQuestion.question;

        //answer choices
        choices.forEach(choice => {
            let easyQuesNum = choice.dataset["number"]; // getting the data number 
            choice.innerText = currentQuestion["answer" + easyQuesNum];
        });
        
        easyQuestions.splice(randomQuestion, 1);
        acceptedAns = true;
        questionNum.innerText = `Question Number: ${questionCounter}`;
        scoreEl.innerText = `Score: ${score}%`;

        //We only want to do 10 questions; stop at 10
        if (questionCounter === 11) {
            summaryView.classList.add('open');
            questionView.classList.add('close');
            finalScore.innerText = `You've scored ${score}%`;
        }

    } else {
        questionCounter++;
        let randomQuestion = Math.floor(Math.random() * hardQuestions.length);
        currentQuestion = hardQuestions[randomQuestion];
        questionTitle.innerText = currentQuestion.question;

        //answer choices
        choices.forEach(choice => {
            let hardQuesNum = choice.dataset["number"]; // getting the data number 
            choice.innerText = currentQuestion["answer" + hardQuesNum];
        });

        hardQuestions.splice(randomQuestion, 1);
        acceptedAns = true;
        questionNum.innerText = `Question: ${questionCounter}`;
        scoreEl.innerText = `Score: ${score}%`;

        //We only want to do 10 questions; stop at 10
        if (questionCounter === 11) {
            summaryView.classList.add('open');
            questionView.classList.add('close');
            finalScore.innerText = `You've scored ${score}%`;
        }
    }
}

function correctOrIncorrect(event) {
    event.preventDefault;
    if (!acceptedAns) {
        return;
    }

    acceptedAns = false;
    let selectedChoice = event.target; //A reference to the object on which the event originally occured

    let selectedAns = selectedChoice.dataset["number"]; //gets the number of the choice selected from the data-number on the html element

    const isCorrect = selectedAns == currentQuestion.correctAnswer ? "correct" : "incorrect"; //uses a ternary operator to give the element correct or incorrect 
    selectedChoice.parentElement.classList.add(isCorrect);

    if (isCorrect == "correct") {
        score += 10;
    }

     //add time delay; go to the next question after time delay 
    setTimeout(() => {
        selectedChoice.parentElement.classList.remove(isCorrect);
        showQuestions();
    }, 1000);

}

// start screen for easy quiz
easyBtn.addEventListener('click', startEasyQuiz);

//Start screen for hard quiz 
hardBtn.addEventListener('click', startHardQuiz);

//Determine if answer choices are correct ir in-correct
choices.forEach(choice => {
    choice.addEventListener("click", correctOrIncorrect)
});

//Restart quiz
restartBtn.addEventListener('click', event => {
    // Reloads the page which returns you to the main page 
    document.location.reload();
})
