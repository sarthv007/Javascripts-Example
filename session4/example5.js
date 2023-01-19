// let obj = {};
// console.log(obj);
// function Person() {
//   this.name = "sarthak";
//   this.address = "Jalna";
// }

// Person.prototype.getData = function () {
//   console.log("Welcome to prototype world");
// };
// let p = new Person();
// console.log(p);

// let arr = new Array();
// console.log(arr);

function getData() {
  console.log("test");
}

const x = Object.getPrototypeOf(getData);
console.log(Object.getPrototypeOf(x));
