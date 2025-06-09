/* arrays are object */

/* declaration */
const arr1 = [1, 2, 3, 4, 5];
const colors = ["crimson", "blue", "green", "gold", "snow"];
const fruits = new Array("apple", "cherry");

// console.log(arr1[3]);
// console.log(colors);
// console.log(fruits);

/* Array methods */

// colors.push("yellow");
// colors.push("silver");
// colors.pop();
// colors.unshift("white");
// colors.shift();

// console.log(colors);

// console.log(colors.includes("blue"));
// console.log(colors.indexOf("blue"));

// array to string
const newColors = arr1.join();
// console.log(typeof arr1, arr1);
// console.log(typeof newColors, newColors);

// console.log("A:", colors);
/* doesn't modify array */
const sliceColor = colors.slice(1, 3);  // Array.slice(startIndex, endIndex)
// console.log("sliceColor:", sliceColor);
// console.log("B:", colors);

/* modify array */
const spliceColors = colors.splice(1, 3); // Array.splice(startIndex, deleteCount)
// console.log("spliceColor:",  spliceColors);
// console.log("C:", colors);


const colors2 = ["crimson", "navy", "silver", "yellow"];
const fruits2 = ["cherry", "grapes", "pineapple", "peach"];

// colors2.push(fruits2);

/* ... spread operator */
// const combinedArray = [...colors2, ...fruits2];
const combinedArray = colors2.concat(fruits2);
// console.log(combinedArray);

// console.log(colors2);

const anotherArray = [1, 2, 3, [100, 101, 102], 4, [103, 104, [201, 202]]];
const fixedArray = anotherArray.flat(Infinity); // infinity is depeth is number
// console.log(fixedArray);

/* some Array methods */
// console.log(Array.isArray("starfall"))
// console.log(Array.from("starfall"))
// console.log(Array.from({ name: "starfall" })) // empty [] if cannot make array

let score1 = 100;
let score2 = 200;
// console.log(Array.of(score1, score2, { name: "starfall" }, colors2))