function computerPlay(){
    let gameSetUp = ["Rock", "Paper", "Scissors"];
    let randomEl = Math.floor(Math.random() * gameSetUp.length);
    console.log(gameSetUp[randomEl])
    return gameSetUp[randomEl]
}

function playRound(playerSelection, computerSelection){
//    playerSelection = playerSelection.toLowerCase();
//    computerSelection = computerPlay().toLowerCase();

   if(playerSelection === "Rock" && computerSelection === "Scissors"){
        return "You Won"
   }else if(playerSelection === "Scissors" && computerSelection === "Paper"){
    return "You Won"
   }else if(playerSelection == "Paper" && computerSelection == "Rock"){
    return "You won"
   }else if (playerSelection === computerSelection){
    return "TIE"
   }else{
       return "Computer Won"
   };
    

   
}
const playerSelection = "Paper";
console.log(playerSelection)
const computerSelection = computerPlay()
console.log(playRound(playerSelection, computerSelection))

let score = 0;
function game() {
    playRound()
   

}
game()


