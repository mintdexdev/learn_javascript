// truthy value -
// true, 1, "0","false", " ", number, string, [], {}, function(){} 

// falsey value - 
// false, 0, -0, BigInt: 0n, "", null, undefined, NaN


// const userEmail = "starfall@foo.bar";
// const userEmail = "";
// if (userEmail) {
//   console.log(`Got user email`);
// } else {
//   console.log(`Don't have user email`);
// }


// const arr = []
// if (arr.length === 0) {
//   console.log(`empty array`)
// }
// const obj = {}
// if (Object.keys(obj).length === 0) {
//   console.log(`empty object`)
// }


// Nullish Coalescing Operator (??) null, undefined
let val1;
val1 = 5 ?? 10;
val1 = null ?? 10;
val1 = undefined ?? 10;
val1 = undefined ?? null;
val1 = null ?? undefined;
val1 = null ?? undefined ?? null;
console.log(val1)