function sayMyName(){
    console.log("S");
    console.log("H");
    console.log("I");
    console.log("V");
    console.log("L");
    console.log("E");
    console.log("E");
}


//sayMyName()    =>   // execution.     // sayMyName => reference

// function addTwoNumbers(number1 , number2){       // parameters
//    console.log( number1 + number2);
// }

function addTwoNumbers(number1 , number2){
    let result = number1+number2
    return result
}
addTwoNumbers(3 , 4)              // arguments

const result = addTwoNumbers(3,8)
// console.log("Result: ", result);

function loginUserMessage(username){
    if(username === undefined){
        console.log("Please enter a username"); 
        return
    }

    return `${username} just logged in`
}

// console.log(loginUserMessage("Shivlee"));
console.log(loginUserMessage());

//if we didn't pass any value it shows undefined just logged in

