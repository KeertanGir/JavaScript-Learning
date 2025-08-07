const accountId = 12341
let accountEmail = "gkeertangir@gmail.com"
var accountPass = "okay123"
accountCity = "Mithi"

// accountId = 2; // constant cant change
accountEmail = "goswami@gmail.com"
accountPass = "RadheKirshna"
accountCity = "Mithi"
let accountStatus; 

console.log(accountId);

/**
 * perfere not to use var
 * becuase of the issue of block scope and functional scope
 */


console.table([accountId, accountEmail, accountPass, accountCity, accountStatus])