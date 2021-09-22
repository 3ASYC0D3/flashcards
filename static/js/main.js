const showAnswer = document.getElementById('showAnswer');
const nextCard = document.getElementById('nextCard');
const restart = document.querySelector('.end-button-container');
const start = document.querySelector('.btn-start');
let question = document.querySelector('.question');
let answer = document.querySelector('.answer');
let questionNumber = document.querySelector('.question-number');
let currentCard = 0;
const questionMax = 50;


start.addEventListener('click', (e) => {
    document.querySelector('.start-button-container').style.display = 'none';
    document.querySelector('.button-container').classList.remove('invisible');
    document.querySelector(`#card-no-${currentCard}`).classList.remove('invisible');
});

nextCard.addEventListener('click', (e) => {
    if(currentCard + 1 < questionMax){
        document.querySelector(`#card-no-${currentCard}`).classList.add('invisible');
        document.querySelector(`#card-no-${currentCard + 1}`).classList.remove('invisible');
        currentCard++;
    } else {
        document.querySelector(`#card-no-${currentCard}`).classList.add('invisible');
        document.querySelector('.button-container').classList.add('invisible');
        document.querySelector('.end-button-container').classList.remove('invisible');
    }
});

showAnswer.addEventListener('click', (e) => {
	document.querySelector(`#answer-no-${currentCard}`).classList.remove('invisible');
});

