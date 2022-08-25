let humanScoreText = document.getElementById("score1").innerText;
let humanScore = 0;
let cpuScoreText = document.getElementById("score2").innerText;
let cpuScore = 0;
const scissorsButton = document.getElementById("scissors");
const paperButton = document.getElementById("paper");
const stoneButton = document.getElementById("stone");

function getComputerChoice() {
  const cpuChoices = ["Scissors", "Paper", "Stone"];
  return cpuChoices[(Math.random()) * cpuChoices.length | 0];
}

function playRound(element) {
  let roundValue = 0;
  cpuChoice = getComputerChoice();
  console.log(`Player clicked ${element.value}`);
  if (element.value == "Scissors") {
    if (cpuChoice == "Scissors") {
      roundValue = 0;
    }
    else if (cpuChoice == "Paper") {
      roundValue = 1;
    }
    else if (cpuChoice == "Stone") {
      roundValue = -1;
    }
  }
  if (element.value == "Paper") {
    if (cpuChoice == "Scissors") {
      roundValue = -1;
    }
    else if (cpuChoice == "Paper") {
      roundValue = 0;
    }
    else if (cpuChoice == "Stone") {
      roundValue = 1;
    }
  }
  if (element.value == "Stone") {
    if (cpuChoice == "Scissors") {
      roundValue = 1;
    }
    else if (cpuChoice == "Paper") {
      roundValue = -1;
    }
    else if (cpuChoice == "Stone") {
      roundValue = 0;
    }
  }
  switch(roundValue) {
    case 1: 
      console.log("Player won the round.")
      humanScore+=1;
      document.getElementById("score1").innerText = String(humanScore);
      document.getElementById("roundStatus").innerText = "You win this round!";
      break;
      case 0:
        console.log("It's a draw!");
        document.getElementById("roundStatus").innerText = "It's a draw!";
        break;
        case -1:
          console.log("Computer won the round.");
          cpuScore+=1;
          document.getElementById("score2").innerText = String(cpuScore);
          document.getElementById("roundStatus").innerText = "Computer wins this round!";
      break;
  }
  checkComplete();
}

function checkComplete() {
  if (humanScore == 5) {
    alert("WE HAVE DEFEATED THE MACHINES!");
    resetValues();
  }
  else if (cpuScore == 5){
    alert("COMPUTERS WILL TAKE OVER HUMANITY");
    resetValues();
  }
}

function resetValues() {
  humanScore = 0;
  cpuScore = 0;
  document.getElementById("score1").innerText = "0";
  document.getElementById("score2").innerText = "0";
  document.getElementById("roundStatus").innerText = "Click any button to play again.";

}
