const ComputerChoiceDisplay = document.getElementById("Computer");
const UserChoiceDisplay = document.getElementById("User");
const buttonsChoice = document.querySelectorAll("button");
const resultDisplay = document.getElementById("Result");

let UserChoice;
let result;
let computerchoice;
buttonsChoice.forEach((buttonChoice) =>
  buttonChoice.addEventListener("click", (e) => {
    UserChoice = e.target.id;
    UserChoiceDisplay.innerHTML = UserChoice;
    ComputerChoiceMethod();
    showResult();
  })
);

function ComputerChoiceMethod() {
  const randomNumber = Math.floor(Math.random() * 3) + 1;
  if (randomNumber === 1) {
    computerchoice = "Rock";
  }
  if (randomNumber === 2) {
    computerchoice = "Paper";
  }
  if (randomNumber === 3) {
    computerchoice = "Scissors";
  }

  ComputerChoiceDisplay.innerHTML = computerchoice;
}

console.log(buttonsChoice);

function showResult() {
    if(computerchoice === UserChoice){
        result = "it's a draw"
    }
    if(computerchoice === "Rock" && UserChoice === "Paper"){
        result = "you win"
    }
    if(computerchoice === "Rock" && UserChoice === "Scissors"){
        result = "you lost"
    }if(computerchoice === "Paper" && UserChoice === "Rock"){
        result = "you lost"
    }if(computerchoice === "Paper" && UserChoice === "Scissors"){
        result = "you win"
    }if(computerchoice === "Scissors" && UserChoice === "Paper"){
        result = "you lost"
    }if(computerchoice === "Scissors" && UserChoice === "Rock"){
        result = "you win"
    }

    resultDisplay.innerHTML = result
}