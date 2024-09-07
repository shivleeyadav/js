/* singleton  =>   literals ki trh declare krte h to singleton nhi
bnta h , constructor se agr bnega to singleton bnega*/

//Object.create => constructor method

//object literals

const mySym = Symbol("key1")

const JsUser = {
    name : "Shivlee" ,
    [mySym]: "mykey1",
    age: 20,
    location: "Jaipur",
    email: "shivlee@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday" , "Saturday"]
}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(typeof JsUser[mySym]);

JsUser.email = "shivlee@chatgpt.com"
// Object.freeze(JsUser)     // we cant change email after this

console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS USer");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS USer, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greeting);
console.log(JsUser.greetingTwo());
