// function is also a function and also have reference to object

function multiplyByFive(n){ return n*5}
multiplyByFive.number = 4;

// console.log(multiplyByFive(3));
// console.log(multiplyByFive.number);
// console.log(multiplyByFive.prototype);

function createUser(name,score){
  this.name = name;
  this.score = score;
}

createUser.prototype.greet = function (){
  console.log(`hello ${this.name}`)
}

const starfall = new createUser("starfall",22);
const dex = new createUser("dex",34);
starfall.greet();
dex.greet();