let UserScore=0;
let CompScore=0;
//This will store all the class name choice from div class name choices
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userScoreInc=document.querySelector("#userScore");
const compScoreInc=document.querySelector("#compScore");

//This will pick each individuals on the click from the variables name choices
choices.forEach((choice)=>{
choice.addEventListener("click",()=>{
const userChoice=choice.getAttribute("id");
console.log(`Your choice is ${userChoice}`);
playGame(userChoice);
});
});

//Now this function will help in doing all the game and checking all the conditions
const playGame=(userChoice) =>{

  //Now we need the computer choice to play the game or to compare it with our choice;
  const compChoice=gencompChoice();
  console.log(`Computer choice is ${compChoice}`);

  //Now here we will check and compare our choice and provide the statements
  if(userChoice===compChoice){
    drawGame();
  }else{
    let userWin=true;
    if(userChoice==="Rock"){
      //choice of comp-paper,scissors
      userWin=compChoice==="Paper"?false:true;
    }else if(userChoice==="Paper"){
      //choice of comp-rock,scissors
      userWin=compChoice==="Scissors"?false:true;
    }else{
      //choice of comp-rock,paper
      userWin=compChoice==="Rock"?false:true;
    }

    //Now this will tell the winner and the points
    showWinner(userChoice,compChoice,userWin);
  }

};

//This function will bring the choice of the computer
const gencompChoice=() =>{
const options=["Rock","Paper","Scissors"];
const index=Math.floor(Math.random()*3);
return options[index];
};

//This function will show that if comp and user choose the same
const drawGame=()=>{
msg.innerText="Game Draw.Play Again!";
msg.style.backgroundColor="#081b31";
};

//this function will display the winner
const showWinner=(userChoice,compChoice,userWin)=>{
if(userWin){
  UserScore++;
  userScoreInc.innerText=UserScore;
  msg.innerText=`You win! Your ${userChoice} beats ${compChoice}`;
  msg.style.backgroundColor="green";
}else{
  CompScore++;
  compScoreInc.innerText=CompScore;
  msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
  msg.style.backgroundColor = "red";
}
};

