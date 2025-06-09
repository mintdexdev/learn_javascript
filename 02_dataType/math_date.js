/* Maths */
// console.log(Math.abs(-4545)) // abs: absolute value
// console.log(Math.round(4.3))
// console.log(Math.floor(4.9))
// console.log(Math.ceil(4.1))

// console.log(Math.sqrt(25))
// console.log(Math.pow(5, 3))
// console.log(Math.min(4, 7, 7, 2))
// console.log(Math.max(4, 7, 7, 2))

// console.log(Math.random());
// console.log((Math.random() * 6) + 1);
// console.log(Math.floor((Math.random() * 6) + 1));

const min = 5;
const max = 20;
/*  floor ( random value * (difference + 1 )) + lowert limit */
console.log(Math.floor(Math.random() * (max - min + 1)) + min);
// in future the date will be converting to 'temporal'


/* Date */
let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toDateString());
// console.log(myDate.toJSON());

// let myCreatedDate = new Date(2023,0,23);
// let myCreatedDate = new Date(2023,0,23,5,30,34);
// let myCreatedDate = new Date("2023-01-15");
let myCreatedDate = new Date("01-06-2023");

// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toLocaleString());
// console.log(myCreatedDate.getTime());

let timeStamp = Date.now();
// console.log(timeStamp);

// console.log(Math.floor(Date.now()/1000) ); // inSeconds - from Jan 1, 1970
// console.log(Math.floor(Date.now()/(1000*60*60*24*365)) );// numbers of years

let newDate = new Date();
// console.log(newDate.getMonth()+1);
// console.log(newDate.getDay());
// console.log(newDate.getDate());

console.log(newDate.toLocaleDateString('default',
  {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric"
  }))