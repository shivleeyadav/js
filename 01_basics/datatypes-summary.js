// Primitive data types   => call by value

// 7 types : string , number , boolean , null , undefined , symbol , BigInt

const score = 100
const scoreValue = 10.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);


const bigNumber = 92390148923294294n
// Reference type (Non Primitive)

//Array , Objects , Functions

const heros = ["Shaktiman" , "Naagraj" , "Doga"]  
let myobj = {              // object
    name: "Shivlee",
    age: 2,
}

const myFunction = function(){
    console.log("Hello World");
}
console.log(typeof anotherId);

// **************************************************

// stack (primitive) , Heap(non-primitive)

let myYoutubename = "shivleeyadav.com"

let anothername = myYoutubename
anothername = "chaiorcode"

console.log(anothername);


let user1 = {
    email:"user@google.com" , 
    upi: "user@ybl"
}

let user2 = user1

user2.email = "shivlee@google.com"

console.log(user1.email);
console.log(user2.email);










