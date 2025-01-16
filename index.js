// TOP Paper, Rock, Scissors
// Initialize Computer Choice

const getComputerChoice = () => {
   let result = Math.floor(Math.random() * 3) + 1;
    if (result === 1) {
        return 'ROCK'
    } else if (result === 2) {
        return 'PAPER'
    } else if (result === 3) 
        return 'SCISSORS'
}

//Initialize Human Choice
const getHumanChoice = () => {
    let answer = prompt('Paper, Rock or Scissors?')
   return answer.toUpperCase()
}


//Score
let humanScore = 0
let computerScore = 0;


function playRound(humanChoice, computerChoice) {
    
    if (humanChoice === computerChoice) {
        console.log('It is a Tie!')
        console.log(`Human: ${humanScore} Computer: ${computerScore}`)
    }
    
    if (humanChoice === 'ROCK') {
        if (computerChoice === 'SCISSORS') {
            ++humanScore
            console.log('You Won! Rock beats Scissors')
            console.log(`Human: ${humanScore} Computer: ${computerScore}`)
        } else if (computerChoice === 'PAPER') {
            ++computerScore
            console.log('You lost! Paper covers Rock!')
            console.log(`Human: ${humanScore} Computer: ${computerScore}`)
        }
    }

    if (humanChoice === 'PAPER') {
        if (computerChoice === 'ROCK') {
            ++humanScore
            console.log('You Won, Paper covers Rock')
            console.log(`Human: ${humanScore} Computer: ${computerScore}`)
        } else if (computerChoice === 'SCISSORS') {
            ++computerScore
            console.log('You lost! Scissors cut Paper')
            console.log(`Human: ${humanScore} Computer: ${computerScore}`)
        } 
    }

    if (humanChoice === 'SCISSORS') {
        if (computerChoice === 'PAPER') {
            ++humanScore
            console.log('You Won! Scissors cut Paper!')
            console.log(`Human: ${humanScore} Computer: ${computerScore}`)
        } else if (computerChoice === 'ROCK') {
            ++computerScore
            console.log('You lost! Rock beats Scissors!')
            console.log(`Human: ${humanScore} Computer: ${computerScore}`)
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