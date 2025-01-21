// TOP Paper, Rock, Scissors
// Initialize Computer Choice

const output = document.querySelector('.output');
const hScore= document.querySelector('.human-score');
const cScore = document.querySelector('.computer-score');
const rock = document.querySelector('.rock-btn');
const paper = document.querySelector('.paper-btn');
const scissors = document.querySelector('.scissors-btn');
const gBoard = document.querySelector('.game-board');

const getComputerChoice = () => {
   let result = Math.floor(Math.random() * 3) + 1;
    if (result === 1) {
        return 'ROCK'
    } else if (result === 2) {
        return 'PAPER'
    } else {
        return 'SCISSORS'
    }
        
}

//Initialize Human Choice
//const getHumanChoice = () => {
    //let answer = prompt('Paper, Rock or Scissors?')
   //return answer.toUpperCase()
//}


//Score
let humanScore = 0
let computerScore = 0;


function playRound(humanChoice, computerChoice) {
    
    if (humanChoice === computerChoice) {
        output.textContent = 'It is a Tie!'
        //console.log(`Human: ${humanScore}` + ` Computer: ${computerScore}`)
    } else if (humanChoice === 'ROCK') {
        if (computerChoice === 'SCISSORS') {
            //++humanScore
            humanScore += 1
            output.textContent = 'You Won! Rock beats Scissors'
            //console.log(`Human: ${humanScore}` + ` Computer: ${computerScore}`)
            hScore.textContent = humanScore
            cScore.textContent = computerScore
        } else if (computerChoice === 'PAPER') {
            ++computerScore
            output.textContent = 'You lost! Paper covers Rock!'
            //console.log(`Human: ${humanScore}` + ` Computer: ${computerScore}`)
            hScore.textContent = humanScore
            cScore.textContent = computerScore
        }
    } else if (humanChoice === 'PAPER') {
        if (computerChoice === 'ROCK') {
            ++humanScore
            output.textContent = 'You Won, Paper covers Rock'
            //console.log(`Human: ${humanScore}` + ` Computer: ${computerScore}`)
            hScore.textContent = humanScore
            cScore.textContent = computerScore
        } else if (computerChoice === 'SCISSORS') {
            ++computerScore
            output.textContent = 'You lost! Scissors cut Paper'
            //console.log(`Human: ${humanScore}` + ` Computer: ${computerScore}`)
            hScore.textContent = humanScore
            cScore.textContent = computerScore
            
        } 
    } else if (humanChoice === 'SCISSORS') {
        if (computerChoice === 'PAPER') {
            ++humanScore
            output.textContent = 'You Won! Scissors cut Paper!'
            //console.log(`Human: ${humanScore}` + ` Computer: ${computerScore}`)
            hScore.textContent = humanScore
            cScore.textContent = computerScore
           
        } else if (computerChoice === 'ROCK') {
            ++computerScore
            output.textContent = 'You lost! Rock beats Scissors!'
            //console.log(`Human: ${humanScore}` + ` Computer: ${computerScore}`)
            hScore.textContent = humanScore
            cScore.textContent = computerScore
            
        }
    }
}
//const human = getHumanChoice()
const computer = getComputerChoice()


rock.addEventListener('click', ()=>{
    playRound('ROCK', computer)
});

paper.addEventListener('click', ()=>{
    playRound('PAPER', computer)
});

scissors.addEventListener('click', ()=>{
    playRound('SCISSORS', computer)
})

//Reset Button

const reset = document.createElement('button');
reset.classList.add('reset');
reset.textContent = 'Reset'
gBoard.appendChild(reset);

const resetGame = function() {
    location.reload()
}

reset.addEventListener('click', ()=>{
    resetGame()
})

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