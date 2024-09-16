
let a=300

if(true){
    let a = 10               
    const b = 20
   console.log("Inner: ", a);      // => a=10 print hoga
   
}



console.log(a);                     // => a=300 print hoga
// console.log(b);


function one(){
        const username = "Shivlee"
        
        function two(){
            const website = "Youtube"
            console.log(username);
            console.log(website);   
        }
        // console.log(website);
        two()
}
one() 

if(true){
    const username = "Shivlee"
    if (username==="Shivlee") {
        const website = "Youtube"
        console.log(username+website);
    }
    // console.log(website);
    
}
// console.log(username);


// ++++++++++++++++++++++ interesting +++++++++++++++++++++++++



function addone(num){
    return num+1
   
}
console.log(addone());
addone(5)

const addTwo = function(num){
    return num+2
}
console.log(addTwo);
addTwo(5)

