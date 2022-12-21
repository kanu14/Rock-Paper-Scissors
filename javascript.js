
const choices = ['rock', 'paper', 'scissors'];

function getComputerChoice () {
    return choices[Math.floor(Math.random() * choices.length)]
}

const playerSelection = prompt().toLowerCase();
const computerSelection = getComputerChoice();

let playerScore = 0;
let compScore = 0;
let playCount = 0

function playRound(playerSelection, computerSelection) {
    playCount++
    if (playerSelection == 'rock' && computerSelection == 'scissors') {
        playerScore++;
        return 'You win! Rock beats paper';
    }   else if (playerSelection == 'rock' && computerSelection == 'paper') {
        compScore++;
        return 'You lose! Rock beats paper';
    }   else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        compScore++;
        return 'You lose! Paper beats scissors';
    }   else if (playerSelection == 'paper' && computerSelection == 'rock') {
        playerScore++;
        return 'You win! Paper beats rock';
    }   else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        playerScore++;
        return 'You win! Scissors beats paper';
    }   else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        compScore++;
        return 'You lose! Scissors beats rock';
    }   else if (playerScore == computerSelection) {
        return 'Draw';
    }   
}

for (let i = 0; playCount < 5; i++) {
    playRound();
}

// function game () {
//     playRound
// }

// for (let i = 0; i < 5; i++) {
//     while (playerScore < 4 && compScore < 4) {
//         playRound(playerSelection,computerSelection)
//     }
// }


// while (playerScore < 4 && compScore < 4) {
//     playRound(playerSelection,computerSelection)
// }

// function game() {
//     while (playerScore < 4 && compScore < 4) {
        
//         playRound(playerSelection,computerSelection)
//         }
        
//     }


// game ()


// console.log(playRound(playerSelection,computerSelection));
        
console.log(playerSelection);
console.log(computerSelection);
console.log(playRound);
console.log(playerScore);
console.log(compScore);
console.log(playCount)

