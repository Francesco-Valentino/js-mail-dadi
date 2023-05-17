const myDiceRoll = Math.floor(Math.random() * 6) + 1;

const oppDiceRoll = Math.floor(Math.random() * 6) + 1;

console.log(myDiceRoll);

console.log(oppDiceRoll);

if(myDiceRoll > oppDiceRoll){
    console.log("You win!")
} else if(myDiceRoll < oppDiceRoll){
    console.log("You lose!")
} else{
    console.log("It's a tie!")
};