/* const rock = 0;
const paper = 1;
const scissor = 2; */
const MAX = 3;

function getComputerChoice() {
  return returnStringRPS(getRandomInt(MAX));
}

function returnStringRPS(value) {
  switch (value) {
    case 0:
      return "rock";
      break;
    case 1:
      return "paper";
      break;
    case 2:
      return "scissor";
      break;

    default:
      break;
  }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

/* playerSelection = playerSelection.toLowerCase(); */

function getPLayerSelection() {
  var check = false;
  while (check == false) {
    var playerSelection = prompt("Rock Paper or Scissor");
    playerSelection = playerSelection.toLowerCase();
    if (
      playerSelection === "rock" ||
      playerSelection === "scissor" ||
      playerSelection === "paper"
    ) {
      check = true;
    }
  }
  return playerSelection;
}

var resultadoInd = document.getElementById("resultado");

function playRound(playerSelection, computerChoice) {
  if (typeof playerSelection === "string") {
    playerSelection = playerSelection.toLowerCase();
  }

  var win = "You Win!";
  var lose = "You Lose!";
  var draw = "It's a Tie";
  var areEqual = playerSelection === computerChoice;
  if (areEqual) {
    resultadoInd.textContent = draw;

    return 1;
  }
  switch (playerSelection) {
    case "rock":
      if (computerChoice === "scissor") {
        resultadoInd.textContent = win.concat(" Rock beats Scissor!");
        return 0;
      } else {
        resultadoInd.textContent = lose.concat(" Paper beats Rock!");
        return 2;
      }
      break;
    case "paper":
      if (computerChoice === "rock") {
        resultadoInd.textContent = lose.concat(" Paper beats Rock!");
        return 0;
      } else {
        resultadoInd.textContent =lose.concat(" Scissor beats Paper!");
        return 2;
      }
      break;
    case "scissor":
      if (computerChoice === "paper") {
        resultadoInd.textContent =lose.concat(" Scissor beats Paper!");
        return 0;
      } else {
        resultadoInd.textContent = win.concat(" Rock beats Scissor!");
        return 2;
      }
      break;
    default:
      break;
  }
}

function playGame() {
  var playerCount = 0;
  var comCount = 0;
  for (let index = 0; index < 5; index++) {
    var result = playRound(getPLayerSelection(), getComputerChoice());
    if (result == 0) {
      playerCount++;
    } else {
      if (result == 2) {
        comCount++;
      }
    }
  }
  if (playerCount > comCount) {
    return "Player Wins!";
  } else {
    if (playerCount < comCount) {
      return "Computer Wins!";
    } else {
      return "It's a Tie! Refresh and try to Win!";
    }
  }
}

function playAndShow(playerChoice)
{
  var resultado = playRound(playerChoice, getComputerChoice());
  if(resultado == 2){
    resultadoPlayer++;
  }else
  {
    if(resultado == 0)
    {
      resultadoPC++
    }
  }
  global.innerText = resultadoPlayer;
  globalPC.innerText = resultadoPC;
  if(resultadoPlayer==5||resultadoPC==5)
  {
    if(resultadoPlayer==5){
      alert('You Win!');
    }else
    {
      alert('You Lose!')
    }
    resultadoPC=0;
    resultadoPlayer=0;
    global.innerText = resultadoPlayer;
  globalPC.innerText = resultadoPC;
  }
}

var rock = document.getElementById("rock");
var paper = document.getElementById("paper");
var scissor = document.getElementById("scissor");
var global = document.getElementById('global');
var globalPC = document.getElementById('global2');



var resultadoPC = 0;
var resultadoPlayer = 0;

rock.addEventListener("click", () => {
  playAndShow(rock.id)
});



paper.addEventListener("click", () => {
  playAndShow(paper.id)
});
scissor.addEventListener("click", () => {
  playAndShow(scissor.id)
});
