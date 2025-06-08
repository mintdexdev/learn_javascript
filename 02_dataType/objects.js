// constructor - singleton
// Object.create

const mySym = Symbol("key1");

// object Literals - not singleton

// object can take any data type
const user = {
  name: "starfall",
  "full name": "starfalldex",
  age: 20,
  email: "starfall@foo.bar",
  isLogggedIn: false,
  favColors: ["crimson", "black"],
  speak: () => {
    console.log(`yo, hello world`);

  },
  [mySym]: "mykey 1",
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