/* Number
decimal-
888, 0888 is 888

Octal-
octal -> decimal
0o644 -> 420
0O755 -> 493
legacy octal - 0644 -> 420

binary - 
binary -> decimal
0b01111111100000000000000000000000 -> 2139095040
0B00000000011111111111111111111111 -> 8388607

hexadecimal-
hexadecimal -> decimal
0xFFFFFFFFFFFFF -> 4503599627370495
0XA             -> 10
*/


/* declare number */
const balance = 500; // number
// const balance = new Number(9999); // object
// console.log(typeof balance)
// console.log(typeof balance.toString())
// console.log(balance.toString().length)
// console.log(balance.toFixed(2))
// console.log(balance)

const otherBalance = 1456.9966
// console.log(otherBalance.toPrecision(4))

const hundereds = 1000000000
// console.log(hundereds.toLocaleString()) 
// console.log(hundereds.toLocaleString("en-IN")) 

// console.log(Number.MIN_VALUE)
// console.log(Number.MAX_VALUE)
// console.log(Number.MAX_SAFE_INTEGER)
// console.log(Number.MIN_SAFE_INTEGER)