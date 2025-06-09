// constructor - singleton, object Literals - not singleton
// used 'new Object()' with class and constructor to make singleton
// Object.create(reference)
// const user = new Object();

const mySym = Symbol("key1");
// object can take any data type
const user = {
  name: "stellar",
  "full name": "stellarfrost",
  age: 20,
  email: "stellar@foo.bar",
  favColors: ["crimson", "black"],
  speak: () => {
    console.log(`yo, hello world`);
  },
  [mySym]: "mykey 1", // key: symbol
}

// console.log(user.age)
// console.log(user["email"]);
// console.log(user["full name"]);
// console.log(user[mySym]);

// console.log({user.mySym}); // will not work with symbol

user.email = "newemail@foo.bar";
// Object.freeze(user);
// user.email = "newmail2@foo.bar"; // wontwork

user.greeting = function () {
  console.log(`hello ${this.name} here`);
}
// console.log(user)
// user.speak();
// user.greeting()



/* object can nest */
const newUser = {
  email: "stellar@foo.bar",
  fullName: {
    name: "stellarfrost",
    firstName: "stellar",
    lastName: "frost",
  }
}
console.log(newUser.fullName)


const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };
const obj3 = { 5: "e", 6: "f" };

// const combinedObject = { obj1, obj2 };
// const foor = Object.assign(target, source, source.... );
// const combinedObject = Object.assign({}, obj1, obj2, obj3);

// const combinedObject = { ...obj1, ...obj2 };
// console.log(combinedObject)


const appUser = [
  {
    id: 1,
    email: "foo.bar@gmail.com",
  },
  {
    id: 2,
    email: "stellar@foo.bar",
  }
]

// console.log(appUser[1].id);
// console.log(Object.keys(appUser));
// console.log(Object.values(appUser));
// console.log(Object.entries(appUser));
// console.log(appUser.hasOwnProperty('name'));

const colors = {
  colorName: "crimson",
  hexCode: "#dx143c",
  family: "warm",
}
const { hexCode: hex } = colors; // destructure
// console.log(hexCode); // now it will not work 
// console.log(hex);

// JSON example
// api generally in object json
// {
//   "name": "apple",
//   "type": "fruit",
//   "color": "red",
// }

// sometimes from array
// [
//   {},
//   {},
//   {},
// ]