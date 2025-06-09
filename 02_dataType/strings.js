const name = "stellar" // string
const repoCount = 10;
/* don't recommend this */
// console.log(name + repoCount + " hello")
/* prefer this -string interpolation */
// console.log(`${name.toUpperCase()} ${repoCount} hello`);

// declare a string
let userName = "stellarFrost"; // string
// let userName = new String("stellarFrost") // object
// console.log(userName[0])
// console.log(userName.__proto__)

/* some method and properties does not change original */

// console.log(userName.length)
// console.log(userName.toUpperCase())
// console.log(userName.charAt(2))
// console.log(userName.indexOf('l'))
// console.log(userName.substring(0, 4));
// console.log(userName.slice(-9, 5));
// console.log(userName)

userName = "    stellar    "
// console.log(userName.trim())
// console.log(userName)

const urlOne = "https://example.com/stellar%20frost"
// console.log(urlOne.replace("%20", "-"))
// console.log(urlOne)
// console.log(urlOne.includes("ex"))

let combinedText = "this is a combined text. This-will-split-base-on-dash or space"
console.log("1", combinedText.split("-"))
console.log("2", combinedText.split(" "))
console.log(combinedText)