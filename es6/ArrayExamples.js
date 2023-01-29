// let str = "sarthak";

// console.log(Array.from(str));

// let keys = newArr.keys();
// console.log(keys);
// for (let i of keys) console.log(i);

//Array.find()

// let value = newArr.find((value) => value > 20);
// console.log(value);

//Array.findIndex()
// let callback = (value) => value === 40;

// let value = newArr.findIndex(callback);
// console.log(value);

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//map filter forEach
let jsonData = [
  { id: 1, firstName: "sarthak", lastName: "vaidya" },
  { id: 2, firstName: "sidhesh", lastName: "tikambare" },
  { id: 3, firstName: "nithin", lastName: "chauhan" },
  { id: 4, firstName: "vithal", lastName: "karad" },
];

const let result = jsonData.forEach((item, index, arr) => {
  console.log(`${item.id} ${item.firstName}`);
});

let newArr = jsonData.filter((item) => item.id > 2);

// let users = jsonData.map((user) => {
//   return `${user.firstName} ${user.lastName}`;
// });

console.log(newArr);
console.log(result);
