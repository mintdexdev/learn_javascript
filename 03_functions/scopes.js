let a = 300;

if (true) {
  let a = 1; //local
  const b = 2; // local
  var c = 3; // global
  // console.log("Inner: ", a);
}
// console.log("Outer: ", a);
// console.log(b);
// console.log(c);

function one() {
  const username = "stellar";

  function two() {
    const website = "foo";
    console.log(username);
  }
  // console.log(website); // won't work
  two();
}
// one();

if (true) {
  const username = "stellar";
  if (username === "stellar") {
    const website = "youtube";
    // console.log(username + website);
  }
  // console.log(website); // won't work
}
// console.log(username); // won't work


/* Interesting */
// console.log(addOne(2))
function addOne(num) {
  return num + 1;
}

/* aslo known as expression */
// console.log(addTwo(4))  // can't access before initialization of expression
const addTwo = function (num) {
  return num + 2;
}

// console.log(global)
// console.log(module)
// console.log(this, module.exports)