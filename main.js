let computerChoice;
let playerChoice;
let computerScore = 0;
let playerScore = 0;
game();

function getComputerChoice() {
  randomNumber = Math.floor(Math.random() * 3) + 1;
  switch (randomNumber) {
    case 1:
      return "rock";
    case 2:
      return "paper";
    case 3:
      return "scissors";
  }
}

function playRound(computerChoice, playerChoice) {
  playerChoice = prompt("Rock ? Paper ? Scissors ?").toLowerCase();
  computerChoice = getComputerChoice();
  if (computerChoice == playerChoice) {
    console.log("Draw");
  } else if (computerChoice == "rock" && playerChoice == "scissors") {
    console.log("Rock beats Scissors ! You Lost");
    computerScore += 1;
  } else if (computerChoice == "rock" && playerChoice == "paper") {
    console.log("Paper beats Rock ! You Win");
    playerScore += 1;
  } else if (computerChoice == "paper" && playerChoice == "rock") {
    console.log("Paper beats Rock ! You Lost");
    computerScore += 1;
  } else if (computerChoice == "paper" && playerChoice == "scissors") {
    console.log("Scissors beats Rock ! You Win");
    playerScore += 1;
  } else if (computerChoice == "scissors" && playerChoice == "paper") {
    console.log("Scissors beats Paper ! You Lost");
    computerScore += 1;
  } else if (computerChoice == "scissors" && playerChoice == "rock") {
    console.log("Rock beats Scissors ! You Win");
    playerScore += 1;
  }
    console.log(`Computer choice = ${computerChoice}
  Player choice = ${playerChoice} `);
  console.log(`Computer score = ${computerScore}
  Player score = ${playerScore} `);
}

function game() {

  for (let i = 0; i < 5; i++) {
    playRound(computerChoice, playerChoice);
  }
  
}
