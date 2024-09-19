const score = 200
if(score>100){
    const power = "fly"
    console.log(`User power: ${power}`);
}
const balance = 1000

// if(balance > 500){
//     console.log("test");
// }

if(balance < 500){
    console.log("less than 500");
}
else if(balance < 750){
    console.log("less than 750")
}
else{
    console.log("TRue");
}

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false

if(userLoggedIn && debitCard || loggedInFromGoogle){
    console.log("Allow to buy course");
}