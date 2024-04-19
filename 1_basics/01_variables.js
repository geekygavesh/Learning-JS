const accountId = 14432
let accountemail = "gavesh@google.com"
var accountPassword = "1234"
accountCity = "jaipur"
let accountstate

// accountId = 2 // not allowed
accountemail = "gt@g.com"
accountPassword = "543"
accountCity = "bengal"
console.log(accountId);

/*
prefer not to use var bcoz of issue in block scope and functional scope
*/

console.table([accountId,accountPassword,accountemail,accountCity,accountstate])