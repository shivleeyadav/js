//array

const myArr = [0,1,2,4,7,5]
const myHeroes = ["shaktiman" , "naagraj"]

const myArr2 = new Array(1,2,3,4)
console.log(myArr[0]);

console.log(myHeroes[0]);

//Array methods

myArr.push(6)            // to add values in array     
myArr.pop()              //to remove last value
myArr.unshift(0)         //start me add kr deta h
myArr.shift()            //jo unshift me value daali thi vo remove ho jayegi

console.log(myArr.includes(3));   //tells that three is present or not and datatype is boolean
console.log(myArr.indexOf(4));    //tells the index of 4

console.log(myArr);

const newArr = myArr.join()

console.log(myArr);
console.log(newArr);

console.log(typeof newArr);   // join changed the datatype of array to string or bind bhi kr diya h

// slice , splice

console.log("A" , myArr);

const myn1 = myArr.slice(1,3)     // 1, 2 include hoga 3 include nhi hoga   

console.log(myn1);
console.log("B" , myArr);

const myn2 = myArr.splice(1,3)     // isme 3 bhi include hoga
console.log("c" ,myn2);
console.log("C" , myArr);           // isme jo original array hoga vo bhi change ho jayega 1,2,3 k alava jo bhi bache h vo print hoga 



