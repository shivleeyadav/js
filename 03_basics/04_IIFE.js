// Immediately Invoked Function Expressions (IIFE)

(function chai(){
    //name
    console.log(`DB CONNECTED`);
})();                                 // we can only use () by putting complete function in ()or we can write chai()

//IIFE => jo function immediately execute ho jaye or global scope
// k pollution se problem hoti h kyi baar to us global scope k variable
// to uske pollution ko htane k liye IIFE ka use kiya

( (name) => {
    console.log(`DB CONNECTED ${name}`);
})('Shivlee')                                // we have to use semicolon before describing another function

