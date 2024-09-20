// const coding = ["js", "ruby" , "java" , "python" , "cpp"]

// const values = coding.forEach( (item) => {
//     console.log(item);
// } )

// console.log(values);


const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.filter( (num) => {
//     return num>4            //if scope open kiya h toh return likhna pdega
// })

const newNums = []

myNums .forEach( (num) => {
    if (num>4) {
        newNums.push(num)
    }
})

console.log(newNums);

