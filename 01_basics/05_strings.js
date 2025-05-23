const name = "starfall"
const repoCount = 10;

// dont recommend this
// console.log(name + repoCount + " hello")

// string interpolation
// console.log(`${name.toUpperCase()} ${repoCount} hello`);

// -------------------------

// another way to declare string
let userName = new String("starfall-dex")
// console.log(userName[0])
// console.log(userName.__proto__)

// some method and properties
// does not change original object 

// console.log(userName.length)
// console.log(userName.toUpperCase())
// console.log(userName.charAt(2))
// console.log(userName.indexOf('l'))

// console.log(userName.substring(0, 4));
// console.log(userName.slice(-8, 7));

// console.log(userName)
// -------------------------

const newStringOne = "    starfall    "
// console.log(newStringOne)
// console.log(newStringOne.trim())

const urlOne = "https://example.com/starfall%20dex"
// console.log(urlOne.replace("%20", "-"))
// console.log(urlOne.includes("ex"))
// -------------------------

let combinedText = "this is a combined text. This-will-split-base-on-space or dash"
// console.log("1", combinedText.split("-"))
// console.log("2", combinedText.split(" "))
// -------------------------


