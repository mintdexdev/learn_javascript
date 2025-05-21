const accountID = 111;
let accountEmail = "starfall@example.com";
var accountPassword = "123"; // Prefer not to use
accountCity = "city1"; // possible but not a good practice
let accountState;

// accountID = 122 // change is not allowed

accountEmail = "foo@bar.com";
accountPassword = "999";
accountCity = "city2";

console.log(accountID);

/*
Not to use var?
Because of issue in block scope and functional scope.
*/

console.table([
  accountID,
  accountEmail,
  accountPassword,
  accountCity,
  accountState,
]);
