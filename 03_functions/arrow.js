// 'this'
// refers to the object that calls the function.
// regular: 'this' depends on how the function is called.
// arrow: 'this' is lexically bound - inherits 'this' from the  parent scope.

// brower scope - undefined - window object
// node scope - {}empty

const user = {
  username: "starfalldex",
  price: 999,
  welcomeMessage: function () {
    console.log(`${this.username}, Welcome`)
    console.log(this)
  },
  otherInfo: {
    fullName: "stellar frost",
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

function regularFunction() {
  let username = "starfaldex";
  console.log("regular function")
  console.log(this)
}
// regularFunction();

const arrowFunction = () => {
  console.log("arrow function")
  console.log(this)
}
// arrowFunction();

const addTwo = (num1, num2) => {
  return num1 + num2
}
// const addTwo = (num1, num2) => num1 + num2;
// const addTwo = (num1, num2) => (num1 + num2);
// const addTwo = (num1, num2) => ({ username: "starfalldex" });

console.log(addTwo(4, 6));