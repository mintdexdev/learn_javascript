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