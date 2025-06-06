const user = {
  username: "starfall",
  getUserDetails: function () {
    console.log("Got details of user")
    console.log(this)
    console.log("current username is", this.username)
  }
}
// console.log(user.username);
// user.getUserDetails();

// here this refers to  module.exports in common js
// console.log(this)
// console.log(module.exports)

function User(username, isLoggedIn) {
  this.username = username;
  this.isLoggedIn = isLoggedIn;
  this.greet = function(){
    console.log(`welcome ${this.user}`);
  }
  // return this
}

const userOne = new User("starfall", true);
const userTwo = new User("dex", false);

// console.log(userOne);
// console.log(userOne.constructor);
// console.log(userTwo);

// console.log(userOne instanceof User) // true
// console.log(userOne instanceof Object) // true 