const playerText=document.querySelector("#playerText");
const computerText=document.querySelector("#computerText");
const resultText=document.querySelector("#resultText");
const choiceBtn=document.querySelectorAll(".choiceBtn");
let player ;
let computer;
let result ;
choiceBtn.forEach(button=> button.addEventListener("click",()=>{
    player=button.textContent;
    computerTurn();
    playerText.textContent=` player : ${player}`
    computerText.textContent=`computer : ${computer}`
    resultText.textContent=checkWinner()
}))
function computerTurn(){
    let randNum=Math.floor(Math.random() * 3) +1;
    switch (randNum){
       case 1 :
           computer ="rock"
           break;
       case 2 :
           computer="paper"
           break;
       case 3 :
           computer="sci"   
           break;     
    }
}
function checkWinner(){
    if(player == computer){
        return "Drow !"
    } 
    else if(computer == "rock"){
        return(player == "paper") ? "you win !" : "you lose"
    }
    else if(computer == "sci"){
        return(player == "rock") ? "you win !" : "you lose"
    }
    else if(computer == "paper"){
        return(player == "sci") ? "you win !" : "you lose"
    }
 }