// in future the date will be converting to temporal

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

let timeStamp = Date.now();
// console.log(timeStamp);
// console.log(myCreatedDate.getTime());

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