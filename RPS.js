let playerScore = 0;
let computerScore = 0;

let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let playerScoreEl = document.getElementById("player-score");
let computerScoreEl = document.getElementById("computer-score");
let result = document.getElementById("result");
let compSelect = document.getElementById("comSelect");


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
   
    
    btn1.addEventListener("click", () => {
        playerSelection = "Rock"
        computerSelection = computerPlay()
        compSelect.textContent = computerSelection
        result.textContent = playRound(playerSelection, computerSelection)
        playerScoreEl.textContent = playerScore
        computerScoreEl.textContent = computerScore
        
    })
    btn2.addEventListener("click", () => {
        playerSelection = "Paper"
        computerSelection = computerPlay()
        compSelect.textContent = computerSelection
        result.textContent = playRound(playerSelection, computerSelection)
        playerScoreEl.textContent = playerScore
        computerScoreEl.textContent = computerScore
    })
    btn3.addEventListener("click", () => {
        playerSelection = "Scissors"
        computerSelection = computerPlay()
        compSelect.textContent = computerSelection
        result.textContent = playRound(playerSelection, computerSelection)
        playerScoreEl.textContent = playerScore
        computerScoreEl.textContent = computerScore
    })
   

}
game()



