'use strict';
// 'this'
// refers to the object that calls the function.
// only work with regular function not with arrow function.
// regular functions: it is dynamic — it depends on how the function is called.
// arrow function: it is lexically bound - inherits 'this' from the  parent scope.

// brower scope - undefined - window object
// node scope - {}empty
// 'use strict';


const user = {
  username: "starfall",
  price: 999,
  welcomeMessage: function () {
    console.log(`${this.username}, Welcome`)
    console.log(this)
  },
  otherInfo: {
    fullName: "starfall dex",
    farewellMessage: function () {
      console.log(`${this.fullName}, Goodbye`)
      console.log(this)
    }
  }
}
// user.welcomeMessage();
// user.username = "foo";
// user.welcomeMessage();
// user.data.farewellMessage()
// ------------------------------
function regularFunction() {
  let username = "foo";
  console.log("regular function")
  console.log(this)
}
// regularFunction();

const arrowFunction = () => {
  console.log("arrow function")
  console.log(this)
}
// arrowFunction();
// ------------------------------

// const addTwo = (num1, num2) => {
//   return num1 + num2
// }
// const addTwo = (num1, num2) => num1 + num2;
// const addTwo = (num1, num2) => (num1 + num2);
const addTwo = (num1, num2) => ({ username: "starfall" });

// console.log(addTwo(4, 6));

// ------------------------------extra
// console.log(this)
// console.log(global)
// console.log(module)
