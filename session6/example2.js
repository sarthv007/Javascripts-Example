// let object = {}; //object literal

// let person = new Object({
//   first_name: "sarthak",
//   email: "sa@gmail.com",
//   phone: 123,
// }); // using instance of Object class

// let user = new Object({});
// user.first_name = "sarthak";
// console.log(user);

// create object using constructor function

// let person1 = {
//   first_name: "sarthak",
//   last_name: "vaidya",
//   age: 32,
// };

// let person2 = {
//   first_name: "Sidhesh",
//   last_name: "Tikambare",
//   age: 33,
// };

// let person3 = {
//   first_name: "xyz",
//   last_name: "abc",
//   age: 33,
// };

function p() {
  console.log("Normal function", this);
}
//p();

function Person(firstName, lastName, age) {
  //instance variable
  this.first_name = firstName;
  this.last_name = lastName;
  this.age = age;
  //console.log(this);
}

//prototype member
Person.prototype.address = "Jalna";
Person.prototype.personDetails = function () {
  console.log(this.first_name + " " + this.last_name);
};

let p1 = new Person("sarthak", "vaidya", 20);
let p2 = new Person("sarthak1", "vaidya1", 22);
let p3 = new Person("sarthak2", "vaidya2", 20);
console.log(p1);
// console.log(p2);
// console.log(p3);
p1.personDetails();
//p2.personDetails();

console.log("Object.Keys:", Object.keys(p1));

console.log("Object.values:", Object.values(p1));
console.log("From for in loop");
for (let i in p1) {
  console.log(p1[i]);
}

// class Person {}
// p1.personDetail();
// p2.personDetail();
// p3.personDetail();

// class Employee extends Person {

// }
