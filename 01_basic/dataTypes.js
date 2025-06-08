/*
Primitive
string: ""
number: -(2^53-1) to (2^53-1)
bigint : 123456789n: number range is increased
boolean: true/false
null: nothing, empty
undefined : value not defined
symbol : Symbol("foo") :: uniqueness

Non Primiive
object: Array, Object, Function
*/

let name = "starfall";
let age = 20;
let isLoggedIn = false;

// console.log(typeof undefined) // undefined
// console.log(typeof null) //object

/* 
Number

decimal-
888, 0888 is 888

Octal-
octal -> decimal
0o644 -> 420
0O755 -> 493
legacy octal - 0644 -> 420

binary - 
binary -> decimal
0b01111111100000000000000000000000 -> 2139095040
0B00000000011111111111111111111111 -> 8388607

hexadecimal-
hexadecimal -> decimal
0xFFFFFFFFFFFFF -> 4503599627370495
0XA             -> 10
*/



/*  REVISION */

/* Primitive
call by value
string, number, bigint, boolean, null, undefined, symbol
*/

const score = 100; // number
const scoreValue = 100.222; // number
const bigNumber = 99999999999999911n; // bigint

const isAvaliable = false; // boolean
const temp = null; // null
let userEmail; //undefined

const id = Symbol("123");
const anotherId = Symbol("123");
// console.log(id == anotherId) //false


/* Non-Primitive (referencedd)
call by reference
object: Array, Object
Function which is also a object
*/

const colors = ["red", "blue", "green"];
let obj = {
  name: "starfall",
  age: 20,
}
const myFunction = function () {
  console.log("hello var");
}

// myFunction()
// console.log(typeof colors)
// console.log(typeof obj)
// console.log(typeof myFunction)