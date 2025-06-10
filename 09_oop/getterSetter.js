/* class based getset
Current Way: used mostly around 90% */

class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }
  get email() {
    return this._email.toUpperCase();
  }
  set email(value) {
    this._email = value;
  }
  get password() {
    return `${this._password}yoyo`;
  }
  set password(value) {
    this._password = value;
  }
}


/* function based getset by define property
Old Way: used rarely around 5%-10%  */

// function User(email, password) {
//   this._email = email;
//   this._password = password;
//   Object.defineProperty(this, 'email', {
//     get: function () {
//       return this._email.toUpperCase();
//     },
//     set: function (value) {
//       this._email = value
//     }
//   })
//   Object.defineProperty(this, 'password', {
//     get: function () {
//       return `${this._password}yoyo`;
//     },
//     set: function (value) {
//       this._password = value
//     }
//   })
// }


/* this will create a function as a class is function/object behind the scene */
// const star = Object.create(User)

/* OUTPUT */
const star = new User("star@user.bar", "pass");
console.log(star);
console.log(star._email, star._password);
console.log(star.email, star.password);


/* super rare
Obejct based getset by define property */

const User = {
  _email: 'star@user.bar',
  _password: 'pass',
  get email() {
    return this._email.toUpperCase()
  },
  set email(value) {
    this._email = value
  },
  get password() {
    return this._password.toUpperCase()
  },
  set password(value) {
    this._password = value
  }
}

/* OUTPUT */
// const fall = Object.create(User);
// console.log(fall)
// console.log(fall._email, fall._password);
// console.log(fall.email, fall.password);