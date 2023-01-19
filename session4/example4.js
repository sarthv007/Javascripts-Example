function Employee(name, salary, experience) {
  this.name = name;
  this.salry = salary;
  this.experience = experience;
}
Employee.prototype.slogan = function () {
  console.log("I love javascript");
};

function Programmer(name, salary, experience, language) {
  Employee.call(this, name, salary, experience);
  this.language = language;
}
Programmer.prototype.writeCode = function () {
  console.log("wrinting a code");
};

Programmer.prototype.__proto__ = Object.create(Employee.prototype);

let p = new Programmer("sarthak", 200000, 20);
p.slogan();
p.writeCode();
console.log(p);

const fruits = [{ name: "sarthak" }, { name: "surbhi" }, { name: "sayali" }];

const newArr = fruits.map(function (item, index, fruitArr) {
  fruitArr[index]["name"] = "sarthak";
  return item;
});

console.log(fruits);
console.log(newArr);
