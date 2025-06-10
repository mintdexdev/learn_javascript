// Class Way
class User {
  constructor(username) {
    this.username = username;
  }
  logUsername() {
    console.log(`username is: ${this.username}`)
  }
  static code = 567;
  /* 'static' keyword wont allow instance and child to access  */
  static createID() {
    return `123`;
  }
}
class Teacher extends User {
  constructor(username, email, password) {
    super(username);
    this.email = email;
    this.password = password;
  }
  addCourse() {
    console.log(`${this.username} added a new course`)
  }
}

const fall = new User("factor");
const star = new Teacher("stellar", "star@teacher.bar", "000");

// console.log(star);
// console.log(fall);

// star.addCourse();
// star.logUsername();
// fall.logUsername();

// console.log(star === Teacher);
// console.log(star instanceof User);


/* example of 'static' keyword */
/* the class will have its own variable or method */
// console.log(User.code);
// console.log(User.createID());

/* instances cannot access 'static' variable or method */
// console.log(static.code); // undefined
// console.log(star.createID()); // error
// console.log(fall.createID()); // error