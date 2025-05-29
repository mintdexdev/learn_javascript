// for
// of, in

// for (let i = 0; i < 10; i++) {
//   const element = i;
//    if(element == 5) {
//     console.log(`${element} is best number`);
//    }
//   console.log(element);
// }

// for (let i = 1; i <= 10; i++) {
//   console.log(`Table of: ${i}`)
//   for (let j = 1; j <= 10; j++) {
//     // console.log(`outer ${i} inner: ${j}, `)
//     console.log(`${i} * ${j} = ${i * j}`)
//   }  
// }
// ------------------------------

// let colors = ["crimson", "red", "silver"]
// for (let i = 0; i < colors.length; i++) {
//   const element = colors[i];
//   console.log(element)
// }
// ------------------------------

// break and continue
for (let i = 1; i <= 20; i++) {
  if (i == 5) {
    console.log(`${i} skipped`)
    continue;
  }
  if (i == 7) {
    console.log(`loop break at ${i}`);
    break;
  }
  console.log(i)
}
// ------------------------------------------------------------


// while
// entry control loop

// let i = 2
// while (i <= 5) {
//   console.log(i)
//   i++;
// }

// let colors = ["teal", "red", "yellow", "peach"];
// let arr = 0;
// while (arr < colors.length) {
//   console.log(`value is ${colors[arr]}`)
//   arr++;
// }


// ------------------------------
// do-while
// exit control loop

let score = 1;
// let score = 12;
do {
  console.log(`score is ${score}`)
  score++;
} while (score <=10);