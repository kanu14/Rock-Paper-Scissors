
choices = ['rock', 'paper', 'scissors']

function getComputerChoice () {
    return choices[Math.floor(Math.random() * choices.length)]
}

playerSelection = prompt().toLowerCase();

const computerSelection = getComputerChoice();

// playerScore = 0;
// compScore = 0;

function playRound(playerSelection, computerSelection) {
    playerScore = 0;
    compScore = 0;
    if (playerSelection == 'rock' && computerSelection == 'scissors') {
        return playerScore ++
        console.log('You win! Rock beats scissors')
    }   else if (playerSelection == 'rock' && computerSelection == 'paper') {
        return compScore ++
        console.log('You lose! Rock beats paper')
    }   else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        return compScore ++
        console.log('You lose! Paper beats scissors')
    }   else if (playerSelection == 'paper' && computerSelection == 'rock') {
        return playerScore ++
        console.log('You win! Paper beats rock')
    }   else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        return playerScore ++
        console.log('You win! Scissors beats paper')
    }   else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        return compScore ++
        console.log('You lose! Scissors beats rock')
    }   else if (playerScore == computerSelection) {
        return playRound()
    }
}

function game() {
    if (playerScore < 4 && compScore < 4) {
        for (let i = 0; i < 5; i++) {
            }    playRound()
    } else ('Game Over')
}





console.log(playRound(playerSelection,computerSelection));
        
console.log(playerSelection);
console.log(computerSelection);
console.log(playerScore);
console.log(compScore);

