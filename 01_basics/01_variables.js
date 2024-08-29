const accountId = 144553
let accountEmail = "shivlee@12.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;  /* if we declared a variable but not assigned
 a value it is considered as undefined */
// accountId = 2.   This is not allowed because accountid is const
 
accountEmail = "hc@hc.com"
accountPassword="21212121"
accountCity = "Bengaluru"

console.log(accountId);

/*
   prefer not to use var 
   because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);
