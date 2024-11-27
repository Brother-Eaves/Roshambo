// TOP Paper, Rock, Scissors
// Initialize Computer Choice

const getComputerChoice = () => {
   let result = Math.floor(Math.random() * 3) + 1;
    if (result === 1) {
        console.log('Rock')
    } else if (result === 2) {
        console.log('Paper')
    } else if (result === 3) 
        console.log('Scissors')
}

console.log(getComputerChoice())

//Function Randomize a number between 1 and three.
// If 1 = rock, else if 2 = Paper else scissors.
//Return result
//Initialize Human Choice
//Function prompt choice
//Evaluate results: Rock beats Scissors/Paper beats Rock/Scissors beat paper. 