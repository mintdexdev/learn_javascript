/* FOREACH */
const colors = ["red", "yellow", "silver", "gold", "black", "crimson"];

/* array.forEach(function (element, index, arrayList) { }); */
// colors.forEach(function (color, i) { console.log(color, i) });
// colors.forEach((color, i) => console.log(color, i));

// colors.forEach((item, index, arr) => console.log(item, index, arr));
// colors.forEach(printme)
// function printme(item) {
//   console.log(item);
// }

const languageDetails = [
  {
    name: "JavaScript",
    extension: "js",
  },
  {
    name: "Python",
    extension: "py",
  }, {
    name: "Java",
    extension: "java",
  },
]

// languageDetails.forEach((item) => {
//   console.log(`${item.name}: ${item.extension}`)
// })


/* FILTER */

/* won't work: forEach does not return anything */
// const values = colors.forEach((item) => {
//   // console.log(item)
//   return item;
// })
// console.log(values)


const nums = [3, 6, 2, 7, 1, 5, 4, 9, 8, 10]

// const newNums = [];
// nums.forEach((n) => {
//   if (n > 5) {
//     newNums.push(n);
//   }
// })

// or
const newNums = nums.filter((n) => n > 5);
console.log(newNums);


const books = [
  { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
  { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
  { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
  { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
  { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
  { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
  { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
  { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
  { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

let userBooks = books.filter((bk) => bk.genre === 'History');
userBooks = books.filter((bk) => {
  return bk.publish >= 1995 && bk.genre === "History";
})
// console.log(userBooks);