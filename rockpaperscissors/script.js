let scissors;
let rock;
let paper;
let hands = document.querySelectorAll(".player");

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
  document.querySelector(".rock").addEventListener("click", choseRock);
  document.querySelector(".paper").addEventListener("click", chosePaper);
  document.querySelector(".scissors").addEventListener("click", choseScissors);
}

function choseRock() {
  playerChoice = "rock";
  document.querySelector("#player1").classList.remove("scissors");
  document.querySelector("#player1").classList.remove("paper");
  document.querySelector("#player1").classList.add("rock");
  shake();
  computerChooses();
}
function chosePaper() {
  playerChoice = "paper";
  // hands.forEach((player) => player.classList.remove("shake"));
  document.querySelector("#player1").classList.remove("rock");
  document.querySelector("#player1").classList.remove("scissors");
  document.querySelector("#player1").classList.add("paper");
  shake();
  computerChooses();
}

function choseScissors() {
  playerChoice = "scissors";

  document.querySelector("#player1").classList.remove("rock");
  document.querySelector("#player1").classList.remove("paper");
  document.querySelector("#player1").classList.add("scissors");
  // hands.forEach((player) => player.classList.remove("shake"));
  shake();
  computerChooses();
}

function shake() {
  // hands.forEach((player) => player.classList.remove("shake"));
  hands.forEach((player) => player.classList.add("shake"));
  addEventListener("animationend", removeClasses);
}

function removeClasses() {
  hands.forEach((player) => player.classList.remove("shake"));
}

function computerChooses() {
  myRand = Math.floor(Math.random() * 3) + 1;
  if (myRand == 1) {
    computerChoice = "rock";
  } else if (myRand == 2) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }
  console.log(myRand);
  determineResult();
}

function determineResult() {
  if ((playerChoice == "rock" && computerChoice == "scissors") || (playerChoice == "paper" && computerChoice == "rock") || (playerChoice == "scissors" && computerChoice == "paper")) {
    playerWin();
  } else if ((playerChoice == "paper" && computerChoice == "scissors") || (playerChoice == "scissors" && computerChoice == "rock") || (playerChoice == "rock" && computerChoice == "paper")) {
    playerLoss();
  } else {
    draw();
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
