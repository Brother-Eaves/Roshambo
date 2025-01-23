// TOP Paper, Rock, Scissors
// Initialize Computer Choice

const rockBtn = document.querySelector('.rock-btn');
const paperBtn = document.querySelector('.paper-btn');
const scissorsBtn = document.querySelector('.scissors-btn');
const output = document.querySelector('.output');
const hScore = document.querySelector('.h-score');
const cScore = document.querySelector('.c-score');
const roundsPlayed = document.querySelector('.rounds-played');
const resetBtn = document.querySelector('.reset-btn')

const choice = ['Rock', 'Paper', 'Scissors']

let computerScore = 0;
let humanScore = 0;
let rounds = 0;

function getComputerChoice() {
    let result = choice[Math.floor(Math.random() * 3)];
    return result
}

rockBtn.addEventListener('click', ()=>{
    playRound('Rock')
});

paperBtn.addEventListener('click', ()=>{
    playRound('Paper')
});

scissorsBtn.addEventListener('click', ()=>{
    playRound('Scissors')
});

resetBtn.addEventListener('click', ()=>{
    location.reload()
})

function playRound(playerChoice) {
    const computer = getComputerChoice()

    if (humanScore === 5) {
        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scissorsBtn.disabled = true;
        output.textContent = 'YOU WIN!'
        
    } else if (computerScore === 5) {
        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scissorsBtn.disabled = true;
        output.textContent = 'COMPUTER WINS! TRY AGAIN?'
    } else {
        if (playerChoice === computer) {
            output.textContent = 'It is a Draw! Try again!';
            ++rounds;
            roundsPlayed.textContent = rounds;
        } else if (playerChoice === 'Rock' && computer === 'Scissors') {
            output.textContent = 'You win. Rock breaks Scissors';
            ++humanScore;
            ++rounds;
            hScore.textContent = humanScore;
            roundsPlayed.textContent = rounds;
        } else if (playerChoice === 'Rock' && computer === 'Paper') {
            output.textContent = 'You lose. Paper covers Rock';
            ++computerScore;
            ++rounds;
            cScore.textContent = computerScore;
            roundsPlayed.textContent = rounds;
        } else if (playerChoice === 'Paper' && computer === 'Rock') {
            output.textContent = 'You win. Paper covers Rock';
            ++humanScore;
            ++rounds;
            hScore.textContent = humanScore;
            roundsPlayed.textContent = rounds;
        } else if (playerChoice === 'Paper' && computer === 'Scissors') {
            output.textContent = 'You Lose Scissors cut Paper';
            ++computerScore
            ++rounds
            cScore.textContent = computerScore;
            roundsPlayed.textContent = rounds
        } else if (playerChoice === 'Scissors' && computer === 'Paper') {
            output.textContent = 'You win. Scissors cut Paper';
            ++humanScore
            ++rounds
            hScore.textContent = humanScore;
            roundsPlayed.textContent = rounds;
        } else if (playerChoice === 'Scissors' && computer === 'Rock') {
            output.textContent = 'You lose. Rock breaks Scissors';
            ++computerScore
            ++rounds
            cScore.textContent = computerScore;
            roundsPlayed.textContent = rounds
        }
    }
        
     }


/*function playGame() {
  
    
   
    playRound('ROCK', computer);
    playRound('PAPER', computer);
    playRound('SCISSORS', computer);
    playRound('ROCK', computer);
    playRound('PAPER', computer);

    if (humanScore > computerScore) {
        console.log(`You won the game! Human: ${humanScore} Computer: ${computerScore}`)
    } else if (humanScore === computerScore) {
        console.log(`It's a draw Human: ${humanScore} Computer: ${computerScore}`)
    } else {
        console.log(`Better luck next time Human: ${humanScore} Computer: ${computerScore}`)
    }
}

playGame()*/

//Evaluate results: Rock beats Scissors/Paper beats Rock/Scissors beat paper. 