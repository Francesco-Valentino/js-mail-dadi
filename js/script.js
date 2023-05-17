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

const userEmail = prompt("Type your email here.");

let rightMail = false;

for (let i = 0; i < emailList.length; i++){
    if (userEmail.value === i){
        rightMail = true;
    }
};

if (rightMail = true){
    console.log("Access complete!")
} else {
    console.log("Access denied!")
};

