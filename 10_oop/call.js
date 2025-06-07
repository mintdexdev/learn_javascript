// (function () {
//   console.log(this);
//     (function () { console.log(this) })();
// })();


function CreateUser(username, email) {
  // this.username = username // do this
  // this.username = SetUsername(username); // wont work
  SetUsername.call(this, username);
  this.email = email
}

function SetUsername(username) {
  // db checking name
  this.username = username;
}

const starfall = new CreateUser("star", "fall@foo.bar");
// console.log(starfall);