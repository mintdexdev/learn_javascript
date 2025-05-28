// <, >, <=, >=, ==, ===
// &&, || , !
// if

const isLoggedIn = true;
// if (isLoggedIn) {
//   console.log("executed")
// }
// ------------------------------

// else 
const temp = 30;
// if (temp <= 40) {
//   console.log("temperature less than 40");
// } else {
//   console.log("temperature greater than 40");
// }
// ------------------------------

// has scope : here: explicit
const score = 3420;
// if (score > 100) {
//   const power = "fly";
//   console.log(`user power ${power}`)
// }
// console.log(`user power ${power}`)

const balance = 1000;
// if (balance > 44) console.log(`enough money`); // implicit scope

// if (balance < 500) {
//   console.log(`less than 500`)
// } else if ( balance < 750) {
//   console.log(`less than 750`)
// } else if ( balance < 900) {
//   console.log(`less than 900`)
// } else if ( balance < 1200) {
//   console.log(`less than 1200`)
// }

const userLoggedIn = true;
const debitCard = true;
const googleLoggedIn = false;
const emailLoggedIn = true;

// if (userLoggedIn && debitCard) {
//   console.log(`allow shopping`);
// }
// if (googleLoggedIn || emailLoggedIn) {
//   console.log(`allow to enter website`);
// }