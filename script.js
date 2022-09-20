'use strict';

let rightNumber = Math.trunc(Math.random() * 20) + 1;
console.log(rightNumber);

let score = 5;
let highscore = 0;
const check = document.querySelector('.check');
let inputNumber = document.querySelector('.guess');
console.log(check);

document.querySelector('.score').textContent = score;
const displayMessage = message => {
  document.querySelector('.message').textContent = message;
};

check.addEventListener([`click`], e => {
  const guess = Number(document.querySelector(`.guess`).value);
  if (!guess) {
    displayMessage(`Enter a number, one must!`);
  } else if (guess === rightNumber) {
    displayMessage('You are correcto! 💪🏽');
    document.querySelector(`.number`).textContent = rightNumber;
    document.body.style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    score--;
    document.querySelector(`.score`).textContent = score;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore + 1;
    }
  } else if (guess !== rightNumber) {
    if (score > 1) {
      displayMessage(guess > rightNumber ? `Think Lower!` : `Think Higher`);
      score--;
      document.querySelector(`.score`).textContent = score;
    } else {
      displayMessage(`Try again!`);
      document.querySelector(`.score`).textContent = 0;
      document.body.style.backgroundColor = 'red';
    }
  }
});

const reload = document.querySelector('.again');
reload.addEventListener('click', () => {
  score = 5;
  rightNumber = Math.trunc(Math.random() * 20);
  console.log(rightNumber);

  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.body.style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
