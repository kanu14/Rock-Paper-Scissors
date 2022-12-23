
const choices = ['rock', 'paper', 'scissors'];

function getComputerChoice () {
    return choices[Math.floor(Math.random() * choices.length)]
}

// const playerSelection = prompt().toLowerCase();
// const computerSelection = getComputerChoice();

let playerScore = 0;
let compScore = 0;
let playCount = 0

function playRound(playerSelection, computerSelection) {
    playerSelection = prompt().toLowerCase();
    computerSelection = getComputerChoice();


    // console.log(`playerSelection: ${playerSelection}; 
    // computerSelection: ${computerSelection}`);
    playCount++
    if (playerSelection == 'rock' && computerSelection == 'scissors') {
        playerScore++;
        console.log( 'You win! Rock beats paper');
    }   else if (playerSelection == 'rock' && computerSelection == 'paper') {
        compScore++;
        console.log( 'You lose! Rock beats paper');
    }   else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        compScore++;
        console.log( 'You lose! Paper beats scissors');
    }   else if (playerSelection == 'paper' && computerSelection == 'rock') {
        playerScore++;
        console.log( 'You win! Paper beats rock');
    }   else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        playerScore++;
        console.log( 'You win! Scissors beats paper');
    }   else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        compScore++;
        console.log( 'You lose! Scissors beats rock');
    }   else if (playerScore == computerSelection) {
        console.log( 'Draw');
    }   
    
}




for (let i = 0; i < 5; i++) {
    playRound();
    
}

    console.log(`Player Score = ${playerScore}; 
    Computer Score = ${compScore}`);

// console.log(playerScore);
// console.log(compScore);


// function game () {
//     playRound
// }

// for (let i = 0; i < 5; i++) {
//     while (playerScore < 4 && compScore < 4) {
//         playRound(playerSelection,computerSelection)
//     }
// }


// function game() {
//     while (playerScore < 4 && compScore < 4) {
        
//         playRound(playerSelection,computerSelection)
//         }
        
//     }


// game ()

        
// console.log(playerSelection);
// console.log(computerSelection);
// console.log(playRound);
// console.log(playerScore);
// console.log(compScore);
// console.log(playCount)

