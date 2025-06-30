// 'call' keyword

/* 
Old Way
- without class
- basic bts of 'class
- use of 'call'
*/

function User(username) {
  this.username = username;
  /* when need to return spectific variable otherwise it will return all */
  // return this.username
}
function Teacher(username, email, password) {
  /* only work when returning 1 variable otherwiser have to destructure and assign to the variable where needed */
  // this.username = User(username); 

  User.call(this, username); // if new constructor
  this.email = email
  this.password = password;
}


const fall = new User("factor");
const star = new Teacher("stellar", "star@teacher.bar", "000");

console.log(star);
console.log(fall);

console.log(star === Teacher);
console.log(star instanceof Teacher);
console.log(star instanceof User); // becase a new user ec created and deleted