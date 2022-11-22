const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");
let userChoice
let computerChoice
let result = 0
let user = 0
let computer = 0

possibleChoices.forEach(choice=>choice.addEventListener('click',(e)=>{
   userChoice =  e.target.id
   userChoiceDisplay.innerText = userChoice
   generateComputerChoice()
   getResult()
   setImage();
   console.log(user)
}))
function generateComputerChoice(){
 const randomNumber = Math.floor(Math.random()*3+1)
 if(randomNumber === 1){
    computerChoice = 'Rock'
 }
 if(randomNumber === 2){
    computerChoice = 'Paper'
 }
 if(randomNumber === 3){
    computerChoice = 'Scissor'
 }
 computerChoiceDisplay.innerText = computerChoice;
}
function getResult(){
    if(userChoice === computerChoice){
        result = `It's a draw !`
    }
    if(userChoice === "Rock" &&  computerChoice ==="Paper"){
        result = `Computer win's !`
        computer++
    }
    if(userChoice === "Rock" &&  computerChoice ==="Scissor"){
        result = `Your win's !`
        user++
    }
    if(userChoice === "Paper" &&  computerChoice ==="Scissor"){
        result = `Computer win's !`
        computer++
    }
    if(userChoice === "Paper" &&  computerChoice ==="Rock"){
        result = `Your win's !`
        user++
    }
    if(userChoice === "Scissor" &&  computerChoice ==="Rock"){
        result = `Computer win's !`
        computer++
    }
    if(userChoice === "Scissor" &&  computerChoice ==="Paper"){
        result = `Your win !`
        user++
    }
    resultDisplay.innerText = result
document.getElementById("user").innerText =`${user}`
document.getElementById("computer").innerText =`${computer}`
}
function setImage(){
   let cImage =  document.getElementById("computerImage");
   let uImage = document.getElementById("userImage");
   uImage.src = `images/${userChoice}.png`
   cImage.src = `images/${computerChoice}.png`
}
console.log(user)