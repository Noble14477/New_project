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
        playerScore++
        return "You Won"
   }else if(playerSelection === "Scissors" && computerSelection === "Paper"){
        playerScore++;
    return "You Won"
   }else if(playerSelection == "Paper" && computerSelection == "Rock"){
        playerScore++;
       return "You won"
    }else if (playerSelection === computerSelection){
        return "TIE"
    }else{
        computerScore++;
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
        if (playerScore === 5 ) {
            result.textContent = "Player defeated computer"
            playerScoreEl.textContent = 5

            setTimeout("location.reload();", 2000)
        } else if (computerScore === 5) {
         result.textContent = "Computer defeated you"
         computerScoreEl.textContent = 5
         setTimeout("location.reload();", 2000)

        }
    })
    btn2.addEventListener("click", () => {
        playerSelection = "Paper"
        computerSelection = computerPlay()
        compSelect.textContent = computerSelection
        result.textContent = playRound(playerSelection, computerSelection)
        playerScoreEl.textContent = playerScore
        computerScoreEl.textContent = computerScore
        if (playerScore === 5 ) {
            result.textContent = "Player defeated computer"
            playerScoreEl.textContent = 5
            setTimeout("location.reload();", 2000)

        } else if (computerScore === 5) {
         result.textContent = "Computer defeated you"
         computerScoreEl.textContent = 5

            setTimeout("location.reload();", 2000)
         
        }
    })
    btn3.addEventListener("click", () => {
        playerSelection = "Scissors"
        computerSelection = computerPlay()
        compSelect.textContent = computerSelection
        result.textContent = playRound(playerSelection, computerSelection)
        playerScoreEl.textContent = playerScore
        computerScoreEl.textContent = computerScore
        if (playerScore === 5 ) {
            result.textContent = "Player defeated computer"
            playerScoreEl.textContent = 5

               setTimeout("location.reload();", 2000)

        } else if (computerScore === 5) {
         result.textContent = "Computer defeated you"
         computerScoreEl.textContent = 5
            setTimeout("location.reload();", 2000)

        }
    })
  

}
game()



