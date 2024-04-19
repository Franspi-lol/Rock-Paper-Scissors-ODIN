const rock = 0;
const paper = 1;
const scissor = 2;
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
  
  
  var check = false
  while (check== false)
  {
    var playerSelection = prompt("Rock Paper or Scissor");
    playerSelection = playerSelection.toLowerCase();
    if (
        playerSelection === "rock" ||
        playerSelection === "scissor" ||
        playerSelection === "paper"
      ) {
        check = true
      }
  }
  return playerSelection;
  
}

function playRound(playerSelection, computerChoice) {
  if (typeof playerSelection === "string") {
    playerSelection = playerSelection.toLowerCase();
  }

  var win = "You Win!";
  var lose = "You Lose!";
  var draw = "It's a Tie";
  var areEqual = playerSelection === computerChoice;
  if (areEqual) {
    console.log(draw);
    return 1;
  }
  switch (playerSelection) {
    case "rock":
      if (computerChoice === "scissor") {
        console.log(win.concat(" Rock beats Scissor!"));
        return 0;
      } else {
        console.log(lose.concat(" Paper beats Rock!"));
        return 2;
      }
      break;
    case "paper":
      if (computerChoice === "rock") {
        console.log(win.concat(" Paper beats Rock!"));
        return 0;
      } else {
        console.log(lose.concat(" Scissor beats Paper!"));
        return 2 ;
      }
      break;
    case "scissor":
      if (computerChoice === "paper") {
        console.log(win.concat(" Scissor beats Paper!"));
        return 0;
      } else {
        console.log(lose.concat(" Rock beats Scissor!"));
        return 2;
      }
      break;
    default:
      break;
  }
}
/* console.log(playRound(getPLayerSelection(), getComputerChoice())); */
/* playRound(getPLayerSelection(), getComputerChoice()) */
console.log(playGame());
function playGame()
{
    var playerCount = 0
    var comCount = 0
    for (let index = 0; index < 5; index++) {
        var result = playRound(getPLayerSelection(), getComputerChoice())
        if (result==0) {
            playerCount++
        }else
        {
            if (result==2) {
                comCount++
            }
        }
    }
    if (playerCount>comCount)
    {
        return "Player Wins!"
    }else
    {
        if(playerCount<comCount)
        {
            return "Computer Wins!"
        }
        else
        {
            return "It's a Tie! Refresh and try to Win!" 
        }
    }
}
