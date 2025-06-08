/* const, let, var */

/*
Rules of naming of variable
- unique names and case sensitive
- contain letters, digits, _, and $.
- begin with a letter, $ and _
- Reserved words cannot be used.
*/


/* possible but not a good practice to use without variable keywords */
city = "abcCity";

/* declaration  */
let a;
var b; // modern JS: Prefer not to use 'var'
const c = 3;
/* assignment */
a = 1;
b = 2;
// c = 4; change is not allowed

/*
don't use var
Because of issue in block scope and functional scope.
*/


/* example */
let accountState;
let accountEmail = "stellar@foo.bar";
const accountID = 123;

accountEmail = "factor@foo.bar";

console.log(accountID);
console.table([
  accountState,
  accountEmail,
  accountID,
]);