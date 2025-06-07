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
Array.prototype.hexCode = function () {
  console.log(`hex code says hello`);
}
// colors.greet();
// fruitsColor.greet();
// colors.hexCode();
// fruitsColor.hexCode(); // will not work


// inheritance
//  old syntax
const User = { name: "starfall" };
const Teacher = { makeVide: true };
const TeachingSupport = { isAvailable: false };
const TASupport = {
  makeAssignment: "JS assignment",
  __proto__: TeachingSupport
};
Teacher.__proto__ = User;

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher);


// challenge
// make in all string
// makeing a method name 'trueLength' to show true length without whitespace
const str = "starfall        ";

String.prototype.trueLength = function(){
  console.log(`${this}`)
  console.log(`true length is ${this.trim().length}`)
}

console.log(str.length) ;
str.trueLength();
"dex".trueLength();