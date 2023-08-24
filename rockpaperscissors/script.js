// let scissors;
// let rock;
// let paper;
let players = document.querySelectorAll(".player");
const hands = ["rock", "paper", "scissors"];

let playerChoice = "";
let computerChoice = "";

let myRand;


document.addEventListener("DOMContentLoaded", start);

function start() {
  console.log("start function");
  playerChooses();
}

function playerChooses() {
  document.querySelector(".rock").addEventListener("click", computerChooses);
  document.querySelector(".paper").addEventListener("click", computerChooses);
  document.querySelector(".scissors").addEventListener("click", computerChooses);
}

function showHand() {
  // console.log(`clicked button class: ${playerChoice}`);
  players.forEach((player) => {
    player.classList.remove("scissors");
    player.classList.remove("paper");
    player.classList.remove("rock");
  });
  document.querySelector("#player1").classList.add(playerChoice);
  document.querySelector("#player2").classList.add(computerChoice);
  shake();
}

function shake() {
  // hands.forEach((player) => player.classList.remove("shake"));
  players.forEach((player) => player.classList.add("shake"));
  addEventListener("animationend", removeShake);
  addEventListener("animationend", determineResult);
}

function removeShake() {
  players.forEach((player) => player.classList.remove("shake"));
}

function computerChooses() {
  playerChoice = event.target.classList;
  myRand = Math.floor(Math.random() * 3);
  computerChoice = hands[myRand];
  // console.log(myRand, computerChoice);
  showHand(playerChoice, computerChoice);
}

function determineResult() {
  playerChoice = `${playerChoice}`;
  computerChoice = `${computerChoice}`;
  if (playerChoice == computerChoice) {
    draw();
  } else if ((playerChoice === "rock" && computerChoice === "scissors") || (playerChoice === "scissors" && computerChoice === "paper") || (playerChoice === "paper" && computerChoice === "rock")) {
    playerWin();
  } else {
    playerLoss();
  }
}

function playerWin() {
  console.log("you won!");
  document.querySelector("#draw").classList.add("hidden");
  document.querySelector("#lose").classList.add("hidden");
  document.querySelector("#win").classList.remove("hidden");
}

function playerLoss() {
  console.log("you lost :(");
  document.querySelector("#draw").classList.add("hidden");
  document.querySelector("#win").classList.add("hidden");
  document.querySelector("#lose").classList.remove("hidden");
}

function draw() {
  document.querySelector("#lose").classList.add("hidden");
  document.querySelector("#win").classList.add("hidden");
  document.querySelector("#draw").classList.remove("hidden");
  console.log("It's a draw!");
}
