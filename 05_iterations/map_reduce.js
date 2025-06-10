/* MAP */
const nums = [3, 6, 2, 7, 1, 5, 4, 9, 8, 10]

// const newNums = nums.map((n) => n + 10);

/* chaining */
// const newNums = nums.map(n => n * 10).map(n => n + 1);
const newNums = nums.map(n => n * 10)
  .map(n => n + 1)
  .filter(n => n >= 40);

// console.log(nums);
// console.log(newNums);


/* REDUCE
syntax
const value = Array.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
}, initialValue); */


const initialValue = 0;
// const totalSum = nums.reduce(function (acc, curVal) {
//   console.log(`acc: ${acc} currVal: ${curVal}`)
//   return acc + curVal;
// }, 0);

/* on arrow function */
// const totalSum = nums.reduce((acc, currVal) => acc + currVal, 0);
// console.log(totalSum);

const shoppingCart = [
  { itemName: "js course", price: 2999 },
  { itemName: "py course", price: 999 },
  { itemName: "mobile dev course", price: 5999 },
  { itemName: "data science course", price: 12999 },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

// console.log(priceToPay);