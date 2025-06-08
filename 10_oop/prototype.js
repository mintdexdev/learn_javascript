// learn then attempt challenge
let colors = ["red", "yellow", "green"];

let fruitsColor = {
  banana: "yellow",
  apple: "red",
  getAppleColor: function () {
    console.log(`Apple color is ${this.apple}`);
  }
}

Object.prototype.greet = function () {
  console.log(`Object says hello`)
}
Array.prototype.announce = function () {
  console.log(`colors shouting hello`);
}
// colors.greet();
// fruitsColor.greet();
// colors.announce();
// fruitsColor.announce(); // will not work


// protypal inheritance
//  old syntax
const User = { name: "starfall" };
const Teacher = { makeVideo: true };
const TeachingSupport = { isAvailable: false };
const TASupport = {
  makeAssignment: "JS assignment",
  __proto__: TeachingSupport
};
// or
Teacher.__proto__ = User;
// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher);

// console.log("User:", User)
// console.log("Teacher:", Teacher, Teacher.name)
// console.log("TeachingSupport:", TeachingSupport, TeachingSupport.makeVideo)
// console.log("TASupport:", TASupport, TASupport.isAvailable)


// challenge
// make in all string
// makeing a method name 'trueLength' to show true length without whitespace
String.prototype.trueLength = function () {
  console.log(`${this}`)
  console.log(`true length is ${this.trim().length}`)
}

// const str = "starfall        ";
// console.log(str.length);
// str.trueLength();
// "dex".trueLength();