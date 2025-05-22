let score = 33;

console.log(typeof score);
console.log(typeof (score));

let inNumber = Number(score);
console.log("inNumber:", typeof inNumber, inNumber)

// Number()
// "33" >> 33
// "33abc" >> NaN
// true >> 1; false >> 0;
// undefined >> NaN
// null >> 0

let isLoggedIn = 0;

let inBoolean = Boolean(isLoggedIn)
console.log("inBoolean:", typeof inBoolean, inBoolean)

// Boolean()
// 0 >> false; 1 >> true; any +ve,-ve number >> true;
// "" >> false; "notEmpty" >> true
// undefined >> false
// null >> false

let someDataType = 34

let inString = String(someDataType)
console.log("inString:", typeof inString, inString)

// String()
// 44 >> "44"
// null >> null
// undefined >> undefined