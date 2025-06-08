/* 
Operators

Arithmetic: +, -, *, /, %, **, ++, --, etc.
Assignment: =, +=, -=, *=, /=, %=, **=, etc.
Comparison: ==, != , ===, !==, <, >, <=, >=, ?: ternary
Logical: &&, ||, !, ??: nullish coalesing
Bitwise: &, |, ~, ^, <<, >>, >>>
Type: typeof, instanaceof, in, etc
Ternary: ?
String: +: concatination 
Spread: ... 
*/

/* Arithmatic */
let a = 1;
let b = a++;
let c = ++a;
// console.log(a, b, c)

/* Comparision */

// console.log(2 > 1)
// console.log(2 < 1)
// console.log(2 >= 1)
// console.log(2 <= 1)
// console.log(2 == 1)
// console.log(2 != 1)


// console.log("2" > 1);
// console.log("02" > 1);


/* most of the time avoid these section  */
// console.log(null > 0)
// console.log(null < 0)
// console.log(null == 0)
// console.log(null >= 0)
// console.log(null <= 0)

// console.log(undefined > 0)
// console.log(undefined < 0)
// console.log(undefined == 0)
// console.log(undefined >= 0)
// console.log(undefined <= 0)

/* strict check
data type compare */
// console.log("1" === 1);


/* String Operator
concatination Operator
*/

let str = "starfall" + " " + "dex";
// console.log(str);
// console.log("1" + 2);
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");