const colors = ["crimson", "navy", "silver", "yellow"];
const fruits = ["cherry", "lemon", "pineapple", "peach"];

// colors.push(fruits);
const combinedArray = colors.concat(fruits);
// console.log(combinedArray);
// console.log(colors);

const spread = [...colors, ...fruits];
// console.log(spread);

const anotherArray = [1, 2, 3, [100, 101, 102], 4, [103, 104, [201, 202]]];
const fixedArray = anotherArray.flat(Infinity);
// console.log(fixedArray);


// some Array methods
// console.log(Array.isArray("starfall"))
// console.log(Array.from("starfall"))
// console.log(Array.from({ name: "starfall" })) // always empty if cannot make array

let score1 = 100;
let score2 = 200;
// console.log(Array.of(score1, score2, { name: "starfall" }, colors))