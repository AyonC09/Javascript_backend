const accountId = 1234567890;//value locked
let accountName = "John Doe";
var accountPassword = "1235689";
console.log(accountName)
accountName = "Jane Street";//value can be changed
console.log(accountName)

let accountState;//undefined value
/*
prefer not to use var
bcz of issue in block scope and functional scope
*/

accountPassword="457891";
console.log(accountPassword)
accountName = "Ayon";
console.table([accountId,accountName,accountPassword,accountState])