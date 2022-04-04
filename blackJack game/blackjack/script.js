"use strict";
// all selectors
const player = document.querySelector(".player--0");
const dealer = document.querySelector(".player--1");
const scoreDealer = document.querySelector(".current-scoreDealer");
const scorePlayer = document.querySelector(".current-scoreYou");
let cardDealr1 = document.querySelector(".dealercardback");
let cardDealr2 = document.querySelector(".dealercardback1");
let cardDealr3 = document.querySelector(".dealercardback2");
const dealerWin = document.querySelector(".dealerWin");
let cardDealr4 = document.querySelector(".dealercardback3");
let cardDealr5 = document.querySelector(".dealercardback4");
let cardPlayer1 = document.querySelector(".dice");
let cardPlayer2 = document.querySelector(".card2");
let cardPlayer3 = document.querySelector(".card3");
let cardPlayer4 = document.querySelector(".card4");
let cardPlayer5 = document.querySelector(".card5");
const allDealerCards = document.querySelector(".dealercardback");
const allPlayerCards = document.querySelector(".card");
const btnNew = document.querySelector(".btn--new");
const btnHit = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const bustt = document.querySelector(".busted");
const youWin = document.querySelector(".youWin");
//values to make life easier
let currentValue = 0;
let currentValueDealer = 0; /////// FIX MEEEE
let currentTurn = 1;
let scoreCalc = function () {
  if (cardNumberPlayer <= 10) {
    scorePlayer.textContent += cardNumberPlayer;
  } else if (cardNumberPlayer > 10 && cardNumberPlayer <= 14) {
    scorePlayer.textContent += 10;
  }
};
// reset fanction
let scores, currentScore, activePlayer, playing;
const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;
  currentValue = 0;
  currentTurn = 1;
  scoreDealer.textContent = 0;
  scorePlayer.textContent = 0;
  bustt.classList.add("hidden");
  dealerWin.classList.add("hidden");
  youWin.classList.add("hidden");
  cardPlayer1.classList.add("hidden");
  cardPlayer2.classList.add("hidden");
  cardPlayer3.classList.add("hidden");
  cardPlayer4.classList.add("hidden");
  cardPlayer5.classList.add("hidden");
  cardDealr1.classList.add("hidden");
  cardDealr2.classList.add("hidden");
  cardDealr3.classList.add("hidden");
  cardDealr4.classList.add("hidden");
  cardDealr5.classList.add("hidden");
};
init();
// hit button logic
btnHit.addEventListener("click", function () {
  if (playing === true) {
    let cardNumberPlayer = Math.trunc(Math.random() * 14) + 1;
    let facePlayer = Math.trunc(Math.random() * 4) + 1;
    let cardNumberDealer = Math.trunc(Math.random() * 14) + 1;
    let faceDealer = Math.trunc(Math.random() * 4) + 1;
    let cardNumberPlayer2 = Math.trunc(Math.random() * 14) + 1;
    let facePlayer2 = Math.trunc(Math.random() * 4) + 1;
    let cardNumberDealer2 = Math.trunc(Math.random() * 14) + 1;
    let faceDealer2 = Math.trunc(Math.random() * 4) + 1;
    if (currentTurn === 1) {
      if (cardNumberDealer2 === 1) {
        cardNumberDealer2 = 11;
      }
      if (cardNumberPlayer2 === 1) {
        cardNumberPlayer2 = 11;
      }
      if (cardNumberDealer === 1) {
        cardNumberDealer = 11;
      }
      if (cardNumberPlayer === 1) {
        cardNumberPlayer = 11;
      }
      cardDealr1.src = `/PNG-cards-1.3/${cardNumberDealer}_of_${faceDealer}.png`;
      cardDealr2.src = `/PNG-cards-1.3/${cardNumberDealer2}_of_${faceDealer2}.png`;
      cardPlayer1.src = `/PNG-cards-1.3/${cardNumberPlayer}_of_${facePlayer}.png`;
      cardPlayer2.src = `/PNG-cards-1.3/${cardNumberPlayer2}_of_${facePlayer2}.png`;
      cardDealr1.classList.remove("hidden");
      cardDealr2.classList.remove("hidden");
      cardPlayer1.classList.remove("hidden");
      cardPlayer2.classList.remove("hidden");
      if (cardNumberDealer2 >= 12) {
        cardNumberDealer2 = 10;
      }
      if (cardNumberDealer >= 12) {
        cardNumberDealer = 10;
      }
      if (cardNumberPlayer2 >= 12) {
        cardNumberPlayer2 = 10;
      }
      if (cardNumberPlayer >= 12) {
        cardNumberPlayer = 10;
      }
      currentTurn += 1;
      currentValue = cardNumberPlayer + cardNumberPlayer2;
      currentValueDealer = cardNumberDealer + cardNumberDealer2;
      scoreDealer.textContent = currentValueDealer;
      scorePlayer.textContent = currentValue;
      if (currentValue > 21) {
        playing = false;
        bustt.classList.remove("hidden");
      }
    } else if (currentTurn === 2) {
      if (cardNumberPlayer === 1) {
        cardNumberPlayer = 11;
      }

      cardPlayer3.src = `/PNG-cards-1.3/${cardNumberPlayer}_of_${facePlayer}.png`;
      cardPlayer3.classList.remove("hidden");
      if (cardNumberPlayer >= 12) {
        cardNumberPlayer = 10;
      }
      currentTurn += 1;
      currentValue += cardNumberPlayer;
      scorePlayer.textContent = currentValue;
      if (currentValue > 21) {
        playing = false;
        bustt.classList.remove("hidden");
      }
    } else if (currentTurn === 3) {
      if (cardNumberPlayer === 1) {
        cardNumberPlayer = 11;
      }

      cardPlayer4.src = `/PNG-cards-1.3/${cardNumberPlayer}_of_${facePlayer}.png`;
      cardPlayer4.classList.remove("hidden");
      if (cardNumberPlayer >= 12) {
        cardNumberPlayer = 10;
      }
      currentTurn += 1;
      currentValue += cardNumberPlayer;
      scorePlayer.textContent = currentValue;
      if (currentValue > 21) {
        playing = false;
        bustt.classList.remove("hidden");
      }
    } else if (currentTurn === 4) {
      if (cardNumberPlayer === 1) {
        cardNumberPlayer = 11;
      }

      cardPlayer5.src = `/PNG-cards-1.3/${cardNumberPlayer}_of_${facePlayer}.png`;
      cardPlayer5.classList.remove("hidden");
      if (cardNumberPlayer >= 12) {
        cardNumberPlayer = 10;
      }
      currentValue += cardNumberPlayer;
      scorePlayer.textContent = currentValue;
      if (currentValue > 21) {
        playing = false;
        bustt.classList.remove("hidden");
      }
    }
  }
});
// hold button logic
btnHold.addEventListener("click", function () {
  playing = false;
  console.log(typeof scoreDealer.textContent);
  let currentDealerTurn = 0;
  // while (currentValueDealer <= 18 && currentValueDealer <= 21) {
  const holdBtn = function () {
    if (
      currentValueDealer <= 18 &&
      currentValueDealer < currentValue &&
      currentDealerTurn === 0
    ) {
      let cardNumberDealer = Math.trunc(Math.random() * 14) + 1;
      let faceDealer = Math.trunc(Math.random() * 4) + 1;
      if (cardNumberDealer === 1) {
        cardNumberDealer = 11;
      }
      cardDealr3.src = `/PNG-cards-1.3/${cardNumberDealer}_of_${faceDealer}.png`;
      cardDealr3.classList.remove("hidden");
      if (cardNumberDealer >= 12) {
        cardNumberDealer = 10;
      }
      currentValueDealer += cardNumberDealer;
      scoreDealer.textContent = currentValueDealer;
      currentDealerTurn += 1;
    } else if (
      currentValueDealer <= 18 &&
      currentValueDealer < currentValue &&
      currentDealerTurn === 1
    ) {
      cardNumberDealer = Math.trunc(Math.random() * 14) + 1;
      faceDealer = Math.trunc(Math.random() * 4) + 1;
      if (cardNumberDealer === 1) {
        cardNumberDealer = 11;
      }
      cardDealr4.src = `/PNG-cards-1.3/${cardNumberDealer}_of_${faceDealer}.png`;
      cardDealr4.classList.remove("hidden");
      if (cardNumberDealer >= 12) {
        cardNumberDealer = 10;
      }
      currentValueDealer += cardNumberDealer;
      scoreDealer.textContent = currentValueDealer;
      currentDealerTurn += 1;
    } else if (
      currentValueDealer <= 18 &&
      currentValueDealer < currentValue &&
      currentDealerTurn === 2
    ) {
      cardNumberDealer = Math.trunc(Math.random() * 14) + 1;
      faceDealer = Math.trunc(Math.random() * 4) + 1;
      if (cardNumberDealer === 1) {
        cardNumberDealer = 11;
      }
      cardDealr5.src = `/PNG-cards-1.3/${cardNumberDealer}_of_${faceDealer}.png`;
      cardDealr5.classList.remove("hidden");
      if (cardNumberDealer >= 12) {
        cardNumberDealer = 10;
      }
      currentValueDealer += cardNumberDealer;
      scoreDealer.textContent = currentValueDealer;
      currentDealerTurn += 1;
    } else if (currentValueDealer > currentValue && currentValueDealer <= 21) {
      dealerWin.classList.remove("hidden");
      playing = false;
    } else if (
      (currentValueDealer >= 18 && currentValueDealer < currentValue) ||
      currentValue === 21
    ) {
      youWin.classList.remove("hidden");
    } else if (currentValueDealer > 21) {
      youWin.classList.remove("hidden");
    }
    console.log(scoreDealer.textContent, scorePlayer.textContent);
  };
  holdBtn();
  holdBtn();
  holdBtn();
  holdBtn();
});
btnNew.addEventListener("click", function () {
  init();
});
