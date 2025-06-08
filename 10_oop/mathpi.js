// defineProperties

const descripter = Object.getOwnPropertyDescriptor(Math, "PI");

// console.log(descripter);
// console.log(Math.PI = 5) // why 5 here? explained above
Math.PI = 5;
/* the result of the assignment expression not the actual value of Math.PI. */
console.log(Math.PI)

const fruit = {
  name: "apple",
  color: "red",
  price: 12,
  orderFruit: function () {
    console.log(`${this.name} not avilable`)
  }
}
// console.log(Object.getOwnPropertyDescriptor(fruit, "name"));
Object.defineProperty(fruit, "name", {
  // writable: false,
  enumerable: false,
})
// console.log(Object.getOwnPropertyDescriptor(fruit, "name"));

// writable false
// fruit.name = "banana";
// console.log(fruit) // wont show apple cause it is not even enumerable

// ennumerable false
// for (const [key, value] of Object.entries(fruit)) {
//   if (typeof value !== 'function') {
//     console.log(`${key}: ${value} `)
//   }
// };