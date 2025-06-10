const accountId = 1256001
let accountEmail = "arijit@google.com"
var accountPassword = "4000"
accountCity = "Patna"

// accountId = 3; // not allowed

accountEmail = "ad@email.com"
accountPassword = "601256"
accountCity = "Jaipur"
let accountState;

console.log(accountId);

/*
Prefer not to use var
Because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])