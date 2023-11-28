const ComputerChoiceDisplay = document.getElementById("Computer");
const UserChoiceDisplay = document.getElementById("User");
const buttonsChoice = document.querySelectorAll("button");
const resultDisplay = document.getElementById("Result")

let UserChoice;
let result;
let computerchoice;
buttonsChoice.forEach(buttonChoice => buttonChoice.addEventListener("click",(e)=>{
    UserChoice = e.target.id ;
    UserChoiceDisplay.innerHTML = UserChoice;
    ComputerChoiceMethod();
    result.innerHTML = showResult();
}
))

function showResult () {


}

function ComputerChoiceMethod(){
const randomNumber = Math.floor(Math.random()*3)+1
 if(randomNumber==1){
    computerchoice== "Rock"
 }
 if(randomNumber==1){
    computerchoice== "Paper"
 }if(randomNumber==1){
    computerchoice== "Scissors"
 }

 ComputerChoiceDisplay.innerHTML = computerchoice;

}

console.log(buttonsChoice);