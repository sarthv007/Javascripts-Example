function Person() {
  this.name = "sarthak";
}

Person.prototype.getData = function () {
  console.log(this.name);
};

function Employee() {
  Person.call(this);
  this.age = 20;
}

Employee.prototype.getAge = function () {
  console.log(this.age);
};

Employee.prototype.__proto__ = Object.create(Person.prototype);

let emp = new Employee();
console.log(Object.getPrototypeOf(Employee));
emp.getData();
emp.getAge();

// let m1 = function () {};
// console.log(Object.getPrototypeOf(m1));

// let obj = Object.create({
//   first_name: "sarthak",
//   last_name: "vaidya",
//   age: 30,
// });

// console.log("Using Object.create ", obj);

// const person1 = new Object({
//   first_name: "sarthak",
//   last_name: "vaidya",
//   age: 30,
// });
// console.log("Using instance of object ", person1);
