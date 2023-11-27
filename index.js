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
    result.innerHTML = showResult();
}
))

function showResult () {


}

function ComputerChoiceMethod(){


}

console.log(buttonsChoice);