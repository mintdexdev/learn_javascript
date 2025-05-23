// Primitive
// call by value

// 7types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.222;

const isLoggedIn = false;
const temp = null;
let userEmail; //undefined

const id = Symbol("123");
const anotherId = Symbol("123");

// console.log(id == anotherId) //false

const bigNumber = 99999999999999911n;

// --------------------------------------------------

// Non-Primitive (referencedd)
// call by reference

// Array, Objects, Functions

const colors = ["red", "blue", "green"];
let obj = {
  name: "starfall",
  age: 20,
}

function myFunction() {
  console.log("hello normal function")
}
const varFunction = function () {
  console.log("hello var");
}
const arrowFunction = () => {
  console.log("hello arrow");
}

console.log(myFunction())
console.log(varFunction())
console.log(arrowFunction())
