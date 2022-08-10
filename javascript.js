
choices = ['rock', 'paper', 'scissors']
function getComputerChoice () {
    return choices[Math.floor(Math.random() * choices.length)]
}

const computerSelection = getComputerChoice();
const playerSelection = prompt();
playerScore = 0;
compScore = 0;

function playRound(playerSelection, computerSelection) {
    if (playerSelection == 'rock' && computerSelection == 'scissors') {
        playerScore ++
    }   else if (playerSelection == 'rock' && computerSelection == 'paper') {
        compScore ++
    }   else if (playerSelection == 'rock' && computerSelection == 'rock') {
        console.log('Play Again')
    }   else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        compScore ++
    }   else if (playerSelection == 'paper' && computerSelection == 'paper') {
        console.log('Play Again')
    }   else if (playerSelection == 'paper' && computerSelection == 'rock') {
        playerScore ++
    }   else if (playerSelection == 'scissors' && computerSelection == 'scissors') {
        console.log('Play Again')
    }   else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        playerScore ++
    }   else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        compScore ++
    }    
}



console.log(playRound(playerSelection,computerSelection));
        
console.log(playerSelection);
console.log(computerSelection);
console.log(playerScore);
console.log(compScore);