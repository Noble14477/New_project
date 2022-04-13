let playerScore = 0;
let computerScore = 0;
function computerPlay(){
    let gameSetUp = ["Rock", "Paper", "Scissors"];
    let randomEl = Math.floor(Math.random() * gameSetUp.length);
    return gameSetUp[randomEl]
}

function playRound(playerSelection, computerSelection){
//    playerSelection = playerSelection.toLowerCase();
//    computerSelection = computerPlay().toLowerCase();

   if(playerSelection === "Rock" && computerSelection === "Scissors"){
        playerScore += 1
        return "You Won"
   }else if(playerSelection === "Scissors" && computerSelection === "Paper"){
        playerScore += 1;
    
    return "You Won"
   }else if(playerSelection == "Paper" && computerSelection == "Rock"){
        playerScore += 1;

       return "You won"
    }else if (playerSelection === computerSelection){
        return "TIE"
    }else{
        computerScore += 1;
       return "Computer Won"
   };
    

   
}

let playerSelection = "";
let computerSelection = "";




function game() {
   for (let i = 0; i < 5; i++) {
    playerSelection = prompt("Enter a weapon");
    console.log(playerSelection)
    computerSelection = computerPlay();
    console.log(computerSelection)
    console.log(playRound(playerSelection, computerSelection))
    console.log(playerScore, computerScore)

       
   }

}

game()



