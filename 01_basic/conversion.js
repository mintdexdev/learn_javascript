// console.log(typeof 'data');
// console.log(typeof ('data'));


let score = "33";
let inNumber = Number(score);
// console.log("type:", typeof inNumber, "value", inNumber)

/* Number()
"33" -> 33
"33abc" -> NaN
true >> 1; false -> 0;
undefined -> NaN
null -> 0
*/


let isLoggedIn = 0;
let inBoolean = Boolean(isLoggedIn)
// console.log("type:", typeof inBoolean, "value", inBoolean)

/* Boolean()
0 -> false, 1 -> true, any +ve,-ve number -> true;
"" -> false; "someContent" -> true
undefined -> false
null -> false
*/


let someData = 34
let inString = String(someData)
// console.log("type:", typeof inString, "value", inString)

/* String()
44 -> "44"
null -> null, undefined -> undefined
*/

/* dont write these type of code */
/* uranary +, - converts all to 'number' */
// console.log(+true);
// console.log(+false);
// console.log(-true);
// console.log(-false);
// console.log(+"");