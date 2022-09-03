const choices=["rock","paper","sci"]
 
//computer choice
const userchoice=prompt("choice rock paper or sci");
if(userchoice){
    console.log(`you choice : ${userchoice}`)
}else{
    console.log("you chited")
}
 // computer choice
 const randomNumber=Math.floor(Math.random()*3);
 const computerChoice=choices[randomNumber]
 console.log(` computer choice is : ${computerChoice}`)

 // ifs for making the principle of game
  if (userchoice===computerChoice){
    console.log("it s a tie")
  }else if(userchoice==="rock"){
    if(computerChoice==="paper"){
        console.log("you lose")
    }else{
        console.log("you win")
    }
  }else if(userchoice==="paper"){
    if(computerChoice==="sci"){
        console.log("you lose")
    }else{
        console.log("you win")
    }
  }else if(userchoice==="sci"){
    if(computerChoice==="rock"){
        console.log("you lose")
    }else{
        console.log("you win")
    }
    
    
  }