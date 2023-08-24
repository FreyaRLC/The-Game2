let scissors;
let rock;
let paper;
let players = document.querySelectorAll(".player");
const hands = ["rock", "paper", "scissors"];

let playerChoice = "";
let computerChoice = "";

let myRand;

//           🤚
//        😳/
//      _/||        RESULTS ONLY SHOW IN CONSOLE LOG SO FAR!! but it technically works
//     _/¯  ¯\_

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

// function choseRock() {
//   playerChoice = "rock";
//   document.querySelector("#player1").classList.remove("scissors");
//   document.querySelector("#player1").classList.remove("paper");
//   document.querySelector("#player1").classList.add("rock");
//   shake();
//   computerChooses();
// }
// function chosePaper() {
//   playerChoice = "paper";
//   // hands.forEach((player) => player.classList.remove("shake"));
//   document.querySelector("#player1").classList.remove("rock");
//   document.querySelector("#player1").classList.remove("scissors");
//   document.querySelector("#player1").classList.add("paper");
//   shake();
//   computerChooses();
// }

// function choseScissors() {
//   playerChoice = "scissors";

//   document.querySelector("#player1").classList.remove("rock");
//   document.querySelector("#player1").classList.remove("paper");
//   document.querySelector("#player1").classList.add("scissors");
//   // hands.forEach((player) => player.classList.remove("shake"));
//   shake();
//   computerChooses();
// }

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

// if (playerChoice == "rock" && computerChoice == "scissors" || playerChoice == "paper" && computerChoice == "rock" || playerChoice == "scissors" && computerChoice == "paper"){
// playerWin();
// } else if(playerChoice == "paper" && computerChoice == "scissors" || playerChoice == "scissors" && computerChoice == "rock" || playerChoice == "rock" && computerChoice == "paper"){
//     playerLoss();
// } else(){
//     draw();
// }

// eller

// if(playerChoice == "rock" && computerChoice == "scissors"){
//     playerWin();
// }else if(playerChoice == "rock" && computerChoice == "paper"){
//     playerLoss();
// }else if(playerChoice == "paper" && computerChoice == "rock"){
//     playerWin();
// }else if(playerChoice == "paper" && computerChoice == "scissors"){
//     playerLoss();
// }else if(playerChoice == "scissors" && computerChoice == "paper"){
//     playerWin();
// }else if(playerChoice == "scissors" && computerChoice == "rock"){
//     playerLoss();
// }
// else(playerChoice === computerChoice){
//     draw();
// }
