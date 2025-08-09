const choices = ["rock", "paper", "scissor"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");

let playerScore = 0;
let computerScore = 0;

function playGame(playChoice) {
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  let result = "";

  if (playChoice === computerChoice) {
    result = "It's a tie!";
  } else {
    switch (playChoice) {
      case "rock":
        result = computerChoice === "scissor" ? "You Won!" : "You Lose!";
        break;
      case "paper":
        result = computerChoice === "rock" ? "You Won!" : "You Lose!";
        break;
      case "scissor":
        result = computerChoice === "paper" ? "You Won!" : "You Lose!";
        break;
    }
  }

  playerDisplay.textContent = `Player: ${playChoice}`;
  computerDisplay.textContent = `Computer: ${computerChoice}`;
  resultDisplay.textContent = result;

  resultDisplay.classList.remove("greenText", "redText");
  switch (result) {
    case "You Won!":
      resultDisplay.classList.add("greenText");
      playerScore++;
      playerScoreDisplay.textContent = playerScore;
      break;
    case "You Lose!":
      resultDisplay.classList.add("redText");
      computerScore++;
      computerScoreDisplay.textContent = computerScore;
      break;
  }
}
