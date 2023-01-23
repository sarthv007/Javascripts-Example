function Creature() {
  this.ls = 70;
}

Creature.prototype.breath = function () {
  console.log("breathing...");
};

//child class
function Person() {
  Creature.call(this);
  this.firstName = "Sarthak";
  this.lastName = "vaidya";
  this.age = 54;
}

Person.prototype = Object.create(Creature.prototype);
Person.prototype.constructor = Creature.prototype;

Person.prototype.fullName = function () {
  console.log(this.firstName + " " + this.lastName + " " + this.age);
};

let person1 = new Person();
let person2 = new Person();

person1.breath();
person1.fullName();

let c1 = new Creature();
c1.breath();

//class in es6

// class Creature {
//   constructor() {
//     this.firstName = "sarthak";
//   }
//   fullName() {
//     console.log(this.firstName);
//   }
// }

// class Person extends Creature {
//   constructor() {
//     super();
//   }
//   childMethod() {
//     console.log("Child Method");
//   }
// }

// let p1 = new Person();
// p1.childMethod();
// p1.fullName();
