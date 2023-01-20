//trandition function statement
// function functionName() {
//   console.log(this);
// }

// let result = functionName();
//functionName();

// let person = {
//   first_nam: "sarthak",
//   last_name: "vaidya",
//   fullName: () => {
//     console.log(this);
//   },
// };
// console.log(person.fullName());

// let getData = () => {
//   console.log(this);
// };
// getData();

// function Person() {
//   this.first_name = "sarthak";
//   this.email = "sa@gmail.com";
//   console.log(this);
// }
// let p1 = new Person();
// console.log(p1);

// let Person = () => {
//   this.first_name = "sarthak";
//   this.email = "sa@gmail.com";
//   console.log(this);
// };
// let p2 = new Person();

// function getData() {
//   console.log(arguments);
// }
// getData(1, 2, 3, 4, 5);

// let setData = (a) => a;

// setData(1);

// let a = 100;
// function getData(param) {
//   param = param + 2000;
//   return param;
// }
// let result = getData(a);
// console.log(result);
// console.log(a);

const person = {
  firstName: "sarthak",
  lastName: "vaidya",
  age: 30,
};

// const a = 30;
// a = 50;
// function getData(obj) {
//   return (obj = { sasa: "dsds" });
// }
// getData(person);
person.firstName = "sidhesh";
person = { sasa: "assas" };
console.log(person);
