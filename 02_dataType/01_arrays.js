const arr1 = [1, 2, 3, 4, 5];
const colors = ["crimson", "blue", "green", "gold", "snow"];
const fruits = new Array("apple", "cherry");

// console.log(arr1[3]);
// console.log(colors);
// console.log(fruits);

// Array methods

// colors.push("lime");
// colors.push("silver");
// colors.pop();

// colors.unshift("white");
// colors.shift();

// console.log(colors.includes("blue"));
// console.log(colors.indexOf("blue"));

// console.log(colors);

const newColors = arr1.join();
// console.log(typeof arr1, arr1);
// console.log(typeof newColors, newColors);

console.log("A:", colors);

const sliceColor = colors.slice(1, 3);  // Array.slice()
// console.log("sliceColor:", sliceColor);
// console.log("B:", colors);

const spliceColors = colors.splice(1, 3); // Array.splice(startingIndex, deleteCount)
// console.log("spliceColor:",  spliceColors);
// console.log("C:", colors);