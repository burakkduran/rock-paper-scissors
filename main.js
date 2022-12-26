let computerChoice;

function getComputerChoice() {
  randomNumber = Math.floor(Math.random() * 3) + 1;
  switch (randomNumber) {
    case 1:
      computerChoice = "Rock";
      break;
    case 2:
      computerChoice = "Paper";
      break;
    case 3:
      computerChoice = "Scissors";
      break;
  }
  return computerChoice;
}

function playRound(computerChoice,playerChoice) {
    
}