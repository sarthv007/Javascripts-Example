function Person() {
  this.last_name = "tikambare";
  console.log(this);
}

Person.prototype.first_name = "sidhesh";
Person.prototype.fullName = function () {
  console.log("from object method");
};

let p1 = new Person();
let p2 = new Person();
let p3 = new Person();
console.log(p1);
console.log(p2);
console.log(p3);
p3.fullName();
console.log(p3.first_name);
console.log(p1);
