
let computerChoice="";
let playerChoice="";
let computerScore = 0;
let playerScore = 0;



document.querySelector("#rock").addEventListener("click", () => {
  playRound("rock");
});
document.querySelector("#paper").addEventListener("click", () => {
  playRound("paper");
});
document.querySelector("#scissors").addEventListener("click", () => {
  playRound("scissors");
});
document.querySelector("#reset").addEventListener("click", () => {
  restartGame();
});

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3) + 1;
  switch (randomNumber) {
    case 1:
      computerChoice = "rock";
    case 2:
      computerChoice = "paper";
    case 3:
      computerChoice = "scissors";
  }
}

function playRound(playerChoice) {
  computerChoice = getComputerChoice();
  if (computerChoice == playerChoice) {
    document.querySelector("#status").innerHTML = "Draw";
  } else if (computerChoice == "rock" && playerChoice == "scissors") {
    document.querySelector("#status").innerHTML = "Rock beats Scissors ! You Lost";
    computerScore += 1;
  } else if (computerChoice == "rock" && playerChoice == "paper") {
    document.querySelector("#status").innerHTML = "Paper beats Rock ! You Win";
    playerScore += 1;
  } else if (computerChoice == "paper" && playerChoice == "rock") {
    document.querySelector("#status").innerHTML = "Paper beats Rock ! You Lost";
    computerScore += 1;
  } else if (computerChoice == "paper" && playerChoice == "scissors") {
    document.querySelector("#status").innerHTML = "Scissors beats Paper ! You Win";
    playerScore += 1;
  } else if (computerChoice == "scissors" && playerChoice == "paper") {
    document.querySelector("#status").innerHTML = "Scissors beats Paper ! You Lost";
    computerScore += 1;
  } else if (computerChoice == "scissors" && playerChoice == "rock") {
    document.querySelector("#status").innerHTML = "Rock beats Scissors ! You Win";
    playerScore += 1;
  };

  scoreCounter();
  chooseWinner(playerScore , computerScore);

  // desicionShower(playerChoice, computerChoice);
}

function desicionShower(playerChoice , computerChoice) {
  desicionClear();
  if (computerChoice == "rock") {
    document.getElementById("computerChoice").classList.add("fa-hand-rock");
  } else if (computerChoice == "paper") {
    document.getElementById("computerChoice").classList.add("fa-hand-paper");
  } else if (computerChoice == "scissors") {
    document.getElementById("computerChoice").classList.add("fa-hand-scissors");
  } 

  if (playerChoice == "rock") {
    document.getElementById("yourChoice").classList.add("fa-hand-rock");
  } else if (computerChoice == "paper") {
    document.getElementById("yourChoice").classList.add("fa-hand-paper");
  } else if (computerChoice == "scissors") {
    document.getElementById("yourChoice").classList.add("fa-hand-scissors");
  } 


  console.log(playerChoice);
  console.log(computerChoice);

  
}

function desicionClear() {
  document.getElementById("yourChoice").classList.remove("fa-hand-rock");
  document.getElementById("yourChoice").classList.remove("fa-hand-paper");
  document.getElementById("yourChoice").classList.remove("fa-hand-scissors");
  document.getElementById("computerChoice").classList.remove("fa-hand-rock");
  document.getElementById("computerChoice").classList.remove("fa-hand-paper");
  document.getElementById("computerChoice").classList.remove("fa-hand-scissors");
}

function scoreCounter() {
  document.querySelector("#computerScore").innerHTML = computerScore;
  document.querySelector("#playerScore").innerHTML = playerScore;
}

function chooseWinner(player, computer) {
  if (player === 5) {
    document.querySelector("#winner").innerHTML = "You Win !!";
    closeButton()
  }
  if (computer === 5) {
    document.querySelector("#winner").innerHTML = "Computer Win !!";
    closeButton()
  }
}

function restartGame() {
  playerScore = 0;
  computerScore = 0;
  document.querySelector("#computerScore").innerHTML = computerScore;
  document.querySelector("#playerScore").innerHTML = playerScore;
  document.querySelector("#winner").innerHTML = "";
  openButton();
  desicionClear()
}

function closeButton() {
  document.querySelector("#rock").setAttribute("disabled", "")
  document.querySelector("#paper").setAttribute("disabled", "")
  document.querySelector("#scissors").setAttribute("disabled", "")
}

function openButton() {
  document.querySelector("#rock").removeAttribute("disabled")
  document.querySelector("#paper").removeAttribute("disabled")
  document.querySelector("#scissors").removeAttribute("disabled")
}
