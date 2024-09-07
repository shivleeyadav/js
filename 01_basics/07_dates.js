//Dates 

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleTimeString());
console.log(typeof myDate);   //object

//let mycreatedDate = new Date(2023 , 0 , 23)
let mycreatedDate = new Date("2023-01-14")  // string me month 1 se start hota h
console.log(mycreatedDate.toDateString());   //month starts from 0 in javascript

let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(mycreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate.toDateString());
console.log(newDate.getMonth());  //month start with 0

newDate.toLocaleString('default',{
    weekday: "long"
})

