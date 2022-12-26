let computerChoice;
let playerChoice = "scissors";
getComputerChoice();
playRound(computerChoice, playerChoice);

function getComputerChoice() {
  randomNumber = Math.floor(Math.random() * 3) + 1;
  switch (randomNumber) {
    case 1:
      computerChoice = "rock";
      break;
    case 2:
      computerChoice = "paper";
      break;
    case 3:
      computerChoice = "scissors";
      break;
  }
}

function playRound(computerChoice, playerChoice) {
  if (computerChoice == playerChoice) {
    console.log("Draw");
  } else if (computerChoice == "rock" && playerChoice == "scissors") {
    console.log("Rock beats Scissors ! You Lost");
  } else if (computerChoice == "rock" && playerChoice == "paper") {
    console.log("Paper beats Rock ! You Win");
  } else if (computerChoice == "paper" && playerChoice == "rock") {
    console.log("Paper beats Rock ! You Lost");
  } else if (computerChoice == "paper" && playerChoice == "scissors") {
    console.log("Scissors beats Rock ! You Win");
  } else if (computerChoice == "scissors" && playerChoice == "paper") {
    console.log("Scissors beats Paper ! You Lost");
  } else if (computerChoice == "scissors" && playerChoice == "rock") {
    console.log("Rock beats Scissors ! You Win");
  }
  console.log(`Computer choice = ${computerChoice}
Player choice = ${playerChoice} `)
}
