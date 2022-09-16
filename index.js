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