// both are not singleton 
// but generally used 'new Object()' with class and constructor to make singleton
// const appUser = new Object();
const appUser = {};

appUser.id = "123abc";
appUser.name = "starfall";
appUser.isLoggedIn = false;
// console.log(appUser);

// object can nest
const user = {
  email: "starfall@foo.bar",
  fullName: {
    name: "starfalldex",
    firstName: "starfall",
    lastName: "dex",
  }
}
// console.log(user.fullName)
// -------------------------

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };
const obj3 = { 5: "e", 6: "f" };

// const combinedObject = { obj1, obj2 };
// const foor = Object.assign(target, source, source.... );
// const combinedObject = Object.assign({}, obj1, obj2, obj3);

const combinedObject = { ...obj1, ...obj2 };
// console.log(combinedObject)
// -------------------------

const users = [
  {
    id: 1,
    email: "foo.bar@gmail.com",
  },
  {
    id: 2,
    email: "starfall@foo.bar",
  }
]

// console.log(users[1].id);
// -------------------------

// console.log(Object.keys(appUser));
// console.log(Object.values(appUser));
// console.log(Object.entries(appUser));

// console.log(appUser.hasOwnProperty('name'));
// -------------------------

const colors = {
  colorName: "crimson",
  hexCode: "#dx143c",
  family: "warm",
}

const { hexCode: hex } = colors;
// console.log(hexCode);
// console.log(hex);
// -------------------------

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