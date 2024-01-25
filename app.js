"use strict";
const number = document.querySelector(".number");
const checkBtn = document.querySelector(".check");
const message = document.querySelector(".message");
const gameScore = document.querySelector(".score");
const body = document.querySelector("body");
const againBtn = document.querySelector(".again");
const highestScore=document.querySelector('.highscore');

let score = 20;
let highScore=0;
let secretNum = Math.trunc(Math.random() * 20) + 1;
//const randomNum = (number.textContent = secretNum);
checkBtn.addEventListener("click", function () {
  const guessNum = Number(document.querySelector(".guess").value);

  if (!guessNum) {
    message.textContent = "no Number";
  } else if (guessNum === secretNum) {
    number.textContent = secretNum;
    body.style.backgroundColor = "lightgreen";
    message.textContent = "😍correct Number🍻";
    if( score>highScore){
      highScore=score;
      highestScore.textContent=highScore
    }
  } else if (guessNum > secretNum) {
    if (score > 1) {
      message.textContent = "Too High 📈";
      score--;
      gameScore.textContent = score;
    } else {
      message.textContent = "you lost game😩";
    }
  } else if (guessNum < secretNum) {
    if (score > 1) {
      message.textContent = "Too Low📉";
      score--;
      gameScore.textContent = score;
    } else {
      message.textContent = "you lost game😩";
    }
  }
});
againBtn.addEventListener("click", function () {
  score = 20;
  secretNum = Math.trunc(Math.random() * 20) + 1;
  number.textContent = "?";
  message.textContent = "Start guessing...";
  document.querySelector(".guess").value = "";
  gameScore.textContent = score;
  body.style.backgroundColor='#222'

});
