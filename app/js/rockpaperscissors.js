////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////
var move;

function getPlayerMove(move) {
    return move || getInput();
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return /* Your Expression */;
}

function getComputerMove(move) {
    return move || randomPlay();
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return /* Your Expression */;
}

function getWinner(playerMove,computerMove) {
    var winner;
    if (playerMove === 'Rock'){
        if (computerMove === 'rock')  {
            winner = "ComputerWins" && "PlayerWins"
        } else if (computerMove === 'paper') {
            winner = "ComputerWins"
        } else {
            winner = "PlayerWins"
        }
    }

    if (playerMove === 'Scissors'){
        if (computerMove === 'scissors')  {
            winner = "ComputerWins" && "PlayerWins"
        } else if (computerMove === 'Rock') {
            winner = "ComputerWins"
        } else {
            winner = "PlayerWins"
        }
    }

    if (playerMove === 'Paper'){
        if (computerMove === 'Paper')  {
            winner = "ComputerWins" && "PlayerWins"
        } else if (computerMove === 'Scissors') {
            winner = "ComputerWins"
        } else {
            winner = "PlayerWins"
        }
    }
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;

    while (playerWins <= 5 || computerWins <=5) {
        PlayerMove = getPlayerMove();
        ComputerMove = getComputerMove();
        Winner = getWinner (playerMover, ComputerMove)
        
        if PlayerWins { 
            console.log('Player Chose ' + PlayerMove + 'while computer chose ' + ComputerMove + ' . Player wins this round.');
            PlayerWins +=1
            
        } if ComputerWins {
            console.log('Computer Chose ' + ComputerMove + 'while player chose ' + PlayerMove + ' . Computer wins this round.');
            ComputerWins +=1 
            
        } if PlayerWins && ComputerWins {
            console.log ("This round was a tie." + "Computer and player Chose " + ComputerMove);

        } console.log ('The score is currently' + playerWins + 'to' + computerWins + '\n');
        (end)
    }
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    /*
      console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
  //  console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n'); */

    return [playerWins, computerWins];
}




