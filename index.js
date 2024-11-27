// TOP Paper, Rock, Scissors
// Initialize Computer Choice

const getComputerChoice = () => {
   let result = Math.floor(Math.random() * 3) + 1;
    if (result === 1) {
        console.log('ROCK')
    } else if (result === 2) {
        console.log('PAPER')
    } else if (result === 3) 
        console.log('SCISSORS')
}

//Initialize Human Choice
const getHumanChoice = () => {
    let answer = prompt('Paper, Rock or Scissors?')
    return answer.toUpperCase()
}


//Score

//Evaluate results: Rock beats Scissors/Paper beats Rock/Scissors beat paper. 