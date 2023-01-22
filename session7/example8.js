// function statement or function defination or function declaration

// function getData(a, b, callback) {
//   console.log("before callback");
//   callback();
//   return a + b;
// }
// let x = 10;
// let y = 20;

// var setData = function () {
//   console.log("from function setDta");
// };

// getData(x, y, setData);

//setData();
//function expression
// var setData = function () {
//   console.log("from function setDta");
// };

// var setData = () => {
//   console.log("from function setDta");
// };

//anonomous function
// let sum = function () {
//   console.log("anonomous function");
// };

// sum();
// setTimeout(function () {
//   console.log("in setimeout");
// }, 3000);

// var i = 0;
// setInterval(function () {
//   console.log("in setInterval", i++);
// }, 1000);

// let arr = [1, 2, 3, 4, 5, 6, 7];

// let printTable = (item, index, arr) => item * 2;

// let filteredArry = (item, index, arr) => item >= 3;

// let newArr = arr.map(printTable);
// let filtered = arr.filter(filteredArry);

// console.log(arr);
// console.log(newArr);
// console.log(filtered);

//async javascript

let user = ["sarthak", "sidhesh"];

function addUser(userName, callback) {
  setTimeout(function () {
    user.push(userName);
    callback();
  }, 2000);
}

function getUser() {
  setTimeout(function () {
    console.log(user);
  }, 1000);
}

addUser("Nitin", getUser);
//call or invoke
