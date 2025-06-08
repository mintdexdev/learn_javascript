// BTS - Behind the Scene
// function User(username, email, password) {
//   this.username = username;
//   this.email = email;
//   this.password = password;
// }
// User.prototype.encrpytPassword = function () {
//   return `${this.password}abc`
// }
// User.prototype.changeUsername = function () {
//   return `${this.username.toUpperCase()}gogogo`
// }


// after ES6
class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }
  encrpytPassword() {
    return `${this.password}abc`
  }
  changeUsername() {
    return `${this.username.toUpperCase()}gogogo`
  }
}

const star = new User("stellar", "star@foo.bar", "0000");
const fall = new User("fellow", "fall@foo.bar", "1234");
console.log(star.encrpytPassword(), star.changeUsername())
console.log(fall.encrpytPassword(), fall.changeUsername())