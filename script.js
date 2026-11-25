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

// variable to keep score
let humanScore = 0;
let computerScore = 0;


//one round of game 
function playRound(humanChoice) {
    // ends the round when either score reaches 5 
    if (humanScore === 5 || computerScore === 5) {
        return;
    }

    // changes computer entry to all lowercase to make it case insensitive when used for condition check
    const computerChoice = getComputerChoice().toLowerCase(); 
    console.log("Computer chose: ", computerChoice);

    // changes human entry to all lower case to make it case insensitive when used fo condition check
    humanChoice = humanChoice.toLowerCase();
    console.log("You chose: ", humanChoice);

    let roundMessage = "";

    //game rules
    if (humanChoice === computerChoice) { // condition tie
    roundMessage = "That was a close one. Its a tie.";
    }else if (humanChoice === "rock") {  // condition if user chooses rock
        if (computerChoice === "paper"){  
            roundMessage = "You lose, Paper beats Rock."; 
            computerScore++;  
        }else if (computerChoice === "scissors"){    
            roundMessage = "You win, Rock beats Scissors";  
            humanScore++;  
        }
    }else if (humanChoice === "paper") { // condition if user chooses paper
        if (computerChoice === "rock") {  
            roundMessage = "You win, Paper beats Rock.";  
            humanScore++;  
        }else if (computerChoice === "scissors") {  
            roundMessage = "You lose, Scissors beat paper";   
            computerScore++;  
        }
    }else if (humanChoice === "scissors") { // condition if user chooses scissors
        if (computerChoice === "paper") {  
            roundMessage = "You win, Scissors beat Paper.";  
            humanScore++;  
        } else if (computerChoice === "rock") {  
            roundMessage = "You lose, Rock Beats Scissors";  
            computerScore++;  
        }

    }

   updateDisplay(humanChoice, computerChoice, roundMessage);  // local variable from playRound available to display
}


const rockBtn = document.querySelector("#rock"); // user choice button rock
rockBtn.addEventListener("click", () => {
    playRound("rock");
});

const paperBtn = document.querySelector("#paper"); // user choice button paper
paperBtn.addEventListener("click", () => {
    playRound("paper");
})

const scissorsBtn = document.querySelector("#scissors");  // user choice button scissor
scissorsBtn.addEventListener("click", () => {
    playRound("scissors");
})

const againBtn = document.createElement("button"); // restart game button
againBtn.textContent = "Play Again";
againBtn.style.display = "none"; // hide the button initially 
document.body.appendChild(againBtn);

againBtn.addEventListener("click", () => {
    humanScore = 0;
    computerScore = 0;
    resultsDiv.textContent = "New round has begun!"
    disableButton(false)
    againBtn.style.display = "none";
});

function disableButton(isDisabled) { // disable choices buttons
    rockBtn.disabled = isDisabled;
    paperBtn.disabled = isDisabled;
    scissorsBtn.disabled = isDisabled;
}

const resultsDiv = document.querySelector("#results");

function updateDisplay(humanChoice, computerChoice, roundMessage) { // creates 3 text and appends to div below buttons 
    resultsDiv.textContent = "";

    const choicesText = document.createElement("p");  // displays the exact choices
    choicesText.textContent = `You chose: ${humanChoice} & Computer chose: ${computerChoice}`;

    const outcomeText = document.createElement ("p");  // displays exact result
    outcomeText.textContent = roundMessage

    const scoreText = document.createElement("p");  // displays running count
    scoreText.textContent = `human: ${humanScore} | Computer: ${computerScore}`;

    const winnerText = document.createElement ("p");
    if (humanScore === 5) {
        winnerText.textContent = "Congratulations!!! You have won the game by winning a total of 5 rounds."
        againBtn.style.display = "inline-block"; // display play again 
        disableButton(true);

    } else if (computerScore === 5) {
        winnerText.textContent = "You have lost 5 rounds. you lost the game."
        againBtn.style.display = "inline-block"; 
        disableButton(true);

    }

    resultsDiv.append(choicesText, outcomeText, scoreText, winnerText);
}

