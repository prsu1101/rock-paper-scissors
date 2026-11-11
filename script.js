//get computer choice
function getComputerChoice() {
    let randomChoice =Math.floor(Math.random() * 3); // assigns a random integer between 0, 1, and 2
    if (randomChoice === 0) {  // condition if randomChoice is 0 returns "Rock" string
        return "Rock";
    }else if (randomChoice === 1) {  // condition if randomChoice is 1 returns "Paper" string
        return "Paper";
    }else {
        return "Scissors"; // if other conditions are not met then returns "Scissors" string
    }
}

//get human choice
function getHumanChoice() {
    let input = prompt("Choose Rock, Paper, or Scissors");
    return input;
}

// variable to keep score
let humanScore = 0;
let computerScore = 0;

// create variables
let humanSelection;
let computerSelection;

//function to initiate random computer choice and get human input and assign it to created variable in line 24 and 25
function getSelection() {
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
}


//one round of game 
function playRound(humanChoice, computerChoice){
    getSelection();

    // changes computer entry to all lowercase to make it case insensitive when used for condition check
    computerChoice = computerSelection.toLowerCase(); 
    console.log("Computer chose: ", computerChoice);

    // changes human entry to all lower case to make it case insensitive when used fo condition check
    humanChoice = humanSelection.toLowerCase();
    console.log("You chose: ", humanChoice);

    //game rules
   if (humanChoice === computerChoice) { // condition tie
    console.log("That was a close one. Its a tie.");

   }else if (humanChoice === "rock") {  // condition if user chooses rock
        if (computerChoice === "paper"){  // user chose rock && computer chose paper
            console.log("You lose, Paper beats Rock."); // Lose condition
            computerScore++;  // score increases for computer by 1
        }else if (computerChoice === "scissors"){    // user chose rock && computer chose scissors
            console.log("You win, Rock beats Scissors");  // Win condition
            humanScore++;  // score increases for human by 1
        }

   }else if (humanChoice === "paper") { // condition if user chooses paper
        if (computerChoice === "rock") {  // user chose paper && computer chose rock
            console.log("You win, Paper beats Rock.");  //Win condition
            humanScore++;  // score increases for human by 1
        }else if (computerChoice === "scissors") {  // user chose paper && computer chose scissors
            console.log("You lose, Scissors beat paper");  // Lose condition 
            computerScore++;  // score increases for computer by 1
        }

   }else if (humanChoice === "scissors") { // condition if user chooses scissors
        if (computerChoice === "paper") {  // condition user chose scissors && computer chose paper
            console.log("you win, Scissors beat Paper.");  // Win condition
            humanScore++;  // score increases for human by 1
        } else if (computerChoice === "rock") {  // condition user chose scissors && computer chose rock
            console.log("You lose, Rock Beats Scissors");  // lose condition 
            computerScore++;  // score increases for computer by 1
        }

   }else {  //if any other choices are made it counts it as a loss
    console.log("invalid choice, you lose.")
    computerScore++;
    return; 
   }
}


// multiple rounds 
function playGame() { // runs the play round 5 times
    for (let i = 0; i < 5; i++){
        playRound(humanSelection, computerSelection);  // runs teh function to play 1 round of the game
        console.log("human: ", humanScore);  // displays current aggregated score for user
        console.log("computer: ", computerScore);  // displays current aggregated score for computer
    }
}

playGame() // starts the game

