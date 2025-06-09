/*
Primitive - Stack

string: ""
number: -(2^53-1) to (2^53-1)
bigint : 123456789n: number range is increased
boolean: true/false
null: nothing, empty
undefined : value not defined
symbol : Symbol("foo") :: uniqueness

Non Primiive - Heap
object: Array, Object, Function
*/

let name = "starfall";
let age = 20;
let isLoggedIn = false;

// console.log(typeof undefined) // undefined
// console.log(typeof null) //object


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



/* stack heap example */

/* copy */
let mainColor = "red";
let anotherColor = mainColor;
anotherColor = "blue"
// console.log(mainColor, anotherColor)

/* reference */
let userOneColor = {
  color: "pink",
  primaryColor: "silver"
}
let userTwoColor = userOneColor;
userTwoColor.color = "yellow"
// console.log(userOneColor)
// console.log(userTwoColor)