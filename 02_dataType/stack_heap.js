// Primitive - Stack
//  Non-Primitive - Heap

let mainColor = "red";
let anotherColor = mainColor;
anotherColor = "blue"


console.log(mainColor, anotherColor)

let userOneColor = {
  color: "pink",
  primaryColor: "silver"
}
let userTwoColor = userOneColor;
userTwoColor.color = "yellow"

console.log(userOneColor)
console.log(userTwoColor)