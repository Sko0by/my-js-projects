// 'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct number';
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;
// document.querySelector('.guess').value;
// document.querySelector('.guess').value = 23;
//events
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
let winningNum = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highestScore = 0;
document.querySelector('.number').textContent = winningNum;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    displayMessage('⛔️No number!');
  } else if (guess === winningNum) {
    displayMessage('🎉🎊Correct number!');
    if (score > document.querySelector('.highscore').textContent) {
      document.querySelector('.highscore').textContent = score;
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.number').textContent = winningNum;
    }
  } else if (guess !== winningNum) {
    if (score > 1) {
      displayMessage(
        guess < winningNum
          ? '📈Choose higher number!'
          : '📉Choose lower number!'
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('you lost the game!😔');
      document.querySelector('body').style.backgroundColor = '#FF0000';
      document.querySelector('.score').textContent = '0';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  winningNum = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = 20;
  document.querySelector('.guess').value = '';
});
