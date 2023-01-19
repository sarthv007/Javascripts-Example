let p1 = Object.create({});
p1.first_name = "sarthak";
p1.last_name = "Vaidya";
p1.fullName = function () {
  console.log("running from here");
};
console.log(p1);

let json_array = [
  {
    first_name: "sarthak",
    last_name: "vaidya",
    age: 36,
  },
  {
    first_name: "sarthak",
    last_name: "vaidya",
    age: 36,
  },
  {
    first_name: "sarthak",
    last_name: "vaidya",
    age: 36,
  },
];
