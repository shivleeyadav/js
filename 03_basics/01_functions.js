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

function calculateCartPrice(...num1){      //agr hum sirf num1 likhte h to bs ek value return hogi ..if agr hum ...num1 aise likhte h to kitne hi num ho sb return ho jayenge
        return num1
}
console.log(calculateCartPrice(200,500,400));

const user = {
    username: "Shivlee",
    price: 199
}

function handleObject(anyobject){
        console.log(`username is ${anyobject.username} ans price is ${anyobject.price}`);
        
}
handleObject(user)

const myNewArray = [200,500,600,300]

function returnSecondValue(getarray){
        return getarray[1]
}

console.log(returnSecondValue(myNewArray));
