const name = "Shivlee"
const repocount = 50

console.log(name + repocount + "Value");

console.log(`Hello my name is ${name} and my repo count is ${repocount}`);

const gameName = new String('shivliii-hc')

console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));

console.log(gameName.indexOf('i'));


const newString = gameName.substring(0,4)  //only 0 to 3 letters will print
console.log(newString);                 


const anotherString = gameName.slice(0,-8)
console.log(anotherString);

const newStringOne = "    Shivlee     "
console.log(newStringOne);
console.log(newStringOne.trim());   // trim is used to remove spaces

const url = "https://hitesh.com/hitesh%20choudhary" // if we give space between these letters google will automatically take % in place of space

console.log(url);
console.log(url.replace('%20' , '-')); // to replace 

console.log(url.includes('hitesh'));  // is this present or not

console.log(gameName.split('-'));  // we can split strings on any basis like we do in this ...we speperated it on the basis of -

