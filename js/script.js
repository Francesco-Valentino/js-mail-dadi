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

const emailList = ["domenicalunedilli@boolmail.com", "paolopapozzi@boolmail.com", "giacomofarchioni@boolmail.com", "stefanoninnoli@boolmail.com","minopoppo@boolmail.com", "gianandreaspirulli@boolmail.com", "annasquadrelli@boolmail.com", "annapapa@boolmail.com"]

const userEmail = prompt("Type your email here.")

for (let i =0; i < userEmail.length; i++){
    if(userEmail.value !== i){
        console.log("Access denied!")
    } else{
        console.log("Access complete!")
    }
};

