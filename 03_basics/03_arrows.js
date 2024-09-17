const user = {
    username: "Shivlee",
    price: 999,

    welcomeMessage: function(){
          console.log(`${this.username} , welcome to website`);  
          console.log(this);    //this current context ki baat krta h mtlb vo overall values print kr deta h
    }
}

user.welcomeMessage()
user.username = "Sam"
user.welcomeMessage()

console.log(this);            // browser k andar jo global object h vo h window object

// function chai(){
//     let username = "Shivlee"
//     console.log(this.username);      // print undefined   // object k andar this use ho jaaata h but functions k andar this use nhi hota
// }
// chai()

// const chai = function(){
//     let username = "Shivlee"
//     console.log(this.username);
// }
// chai ()                              // we can also define function like this

const chai = () => {
    let username = "Shivlee"           // arrow function me this use nhi kr skte object k andar kr skte h
    console.log(this.username);        // sirf this use krenge to {} => ye print hoga 
}
chai()                                  // print undefined

// const addTwo=(num1 , num2) => {
//     return num1 + num2
// }
// const addTwo=(num1 , num2) =>  num1 + num2    or niche vali line me jo likha h vse bhi likh skte h

// const addTwo=(num1 , num2) => (num1 + num2)

const addTwo = (num1,num2) => ({username: "Shivlee"})

console.log(addTwo(3,4))

