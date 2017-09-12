

var player1Choice;
var player2Choice;
var continueGame = true;

while(continueGame==true)
{
  playGame();
}

function playGame()
{
  var gameChoice = prompt("Please Select Game Mode\n Two Player (1)\n Computer (2)");
  if(gameChoice == 1)
  {
    var player1Choice = prompt("Player One Please Select Your Move\n 1. Rock(r)\n 2. Paper(p)\n 3. Scissors(s)\n");
    var player2Choice = prompt("Player Two Please Select Your Move\n 1. Rock(r)\n 2. Paper(p)\n 3. Scissors(s)\n");
    comparison(player1Choice,player2Choice);
    var cont = prompt("Continue y/n");
    if(cont==="n"){
      continueGame=false;
    }
  }
  if(gameChoice == 2)
  {
    var player1Choice = prompt("Player One Please Select Your Move\n 1. Rock(r)\n 2. Paper(p)\n 3. Scissors(s)\n");
    var compChoice = Math.floor(Math.random() * 3) + 1;
    if(compChoice === 1){
      player2Choice="r";
    }
    else if(compChoice === 2){
      player2Choice="p";
    }
    else{
      player2Choice="s";
    }
    comparison(player1Choice,player2Choice);
    if(cont==="n"){
      continueGame=false;
    }

  }
  else
  {
    alert("Invalid Game Choice or Move");
  }
}

function comparison(choice1,choice2)
{
  if(choice1===choice2)
  {
    alert("It's a Draw!");
  }

  else if(choice1==="r"){
    if(choice2==="p")
    {
      alert("Player 2 Wins, Paper Beats Rock");
    }
    else{
      alert("Player 1 Wins, Rock Beats Scissors");
    }
  }

  else if(choice1==="p"){
    if(choice2==="s")
    {
      alert("Player 2 Wins, Scissors Beats Paper");
    }
    else{
      alert("Player 1 Wins, Paper Beats Rock");
    }
  }

  else if(choice1==="s"){
    if(choice2==="r")
    {
      alert("Player 2 Wins, Rock Beats Scissors");
    }
    else{
      alert("Player 1 Wins, Scissors Beats Paper");
    }
  }

}


