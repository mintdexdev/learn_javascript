"use strict"; // treat all JS code as newer version

// alert("hello"); // does not work in node

// priority - code readability
console.log(4 + 3);
console.log("starfall");

/*
string : ""
number : 123456789 :: -(2^53-1) to (2^53-1)
bigint : 123456789n :: range is increased
boolean : true/false
undefined : value not defined
null : nothing,empty
symbol : Symbol("foo") :: uniqueness
object
*/

let name = "starfall";
let age =  20;
let isLoggedIn = false;

console.log(typeof undefined) // undefined
console.log(typeof null) //object

// Number
/* 
decimal
88 
0888 -> 888

Octal-
0O755 -> 493
0o644 -> 420
legacy octal - 0644 -> 420

binary - 
0b10000000000000000000000000000000 -> 2147483648
0b01111111100000000000000000000000 -> 2139095040
0B00000000011111111111111111111111 -> 8388607

hexadecimal-
0xFFFFFFFFFFFFF -> 4503599627370495
0XA             -> 10
*/