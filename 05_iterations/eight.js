const myNums = [1,2,3]

const myTotal = myNums.reduce(function(acc,currVal){
    console.log(`acc: ${acc} and currVal: ${currVal}`);
    
    return acc + currVal
}, 3)               //this is the value through which the acc is started

console.log(myTotal);

// same we can use for arrow functions like others

const shoppingCart = [
    {
        itemName: "js course",
        price:2999
    },
    {
        itemName: "python",
        price:999
    },
    {
        itemName: "mobile dev course",
        price:5999
    },
    {
        itemName: "data scientist course",
        price:12999
    },
]

const priceToPay = shoppingCart.reduce((acc ,item) => acc + item.price , 0)

console.log(priceToPay);

