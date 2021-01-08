// start screen for easy quiz
let easyView = document.querySelector('.easy-view');
let mainVeiw = document.querySelector('.main-view');
let easyBtn = document.querySelector('.easy-btn');
easyBtn.addEventListener('click', startEasyQuiz);



function startEasyQuiz(event) {
    event.preventDefault();
    mainVeiw.style.display = "none";
    easyView.classList.add('.open');
    showQuestions();
}

function showQuestions() {
    console.log("Hello");
}
