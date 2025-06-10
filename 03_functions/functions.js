function sayMyName() {
  console.log("s");
  console.log("t");
  console.log("e");
  console.log("l");
  console.log("l");
  console.log("a");
  console.log("r");
}
// sayMyName();

// function addTwoNumbers(num1, num2) { // parameters
//   console.log(num1 + num2);
// }
// addTwoNumbers(2, 3); // arguments

function addTwoNumbers(num1, num2) { // parameters
  const result = num1 + num2;
  return result;
}
const result = addTwoNumbers(2, 3); // arguments
// console.log("Result: ", result);

const loginUserMessage = (userName = "foo") => {
  // if (!userName) {
  //   console.log("please enter a 'username'.");
  //   return;
  // }
  return `${userName} just logged in!`;
}
// console.log(loginUserMessage("starfall"));
// console.log(loginUserMessage());



function calculateCartPrice(num1, ...num2) {
  return num2;
}
// console.log(calculateCartPrice(200, 300, 400));

const user = {
  username: "starfall",
  price: 99,
}
function handleObject(anyObject) {
  console.log(`username is ${anyObject.username} and price is ${anyObject.price}`)
}
// handleObject(user);

const colors = ["red", "yellow", "blue"];
function returnValueOfPlace(arr, i = 1) {
  return arr[i - 1];
}
// console.log(returnValueOfPlace(colors, 3));