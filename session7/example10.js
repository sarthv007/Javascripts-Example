//normal
// function getData() {
//   console.log("this:", this);
// }

// window.getData();

// let sum = getData(10, 20, 30, 40, 50);
// console.log(sum);

// let setData = (a) => a;
// console.log(setData(1000));

// let calculate = (...rest) => {
//   console.log("rest operator:", rest);
// };

// calculate(10, 20, 30, 40, 50);

// this refer to the object ie currently calling the function

// let person = {
//   firstName: "sarthak",
//   lastName: "vaidya",
//   userDetails: () => {
//     console.log(this);
//   },
//   personAddress: {
//     city: "pune",
//     pincode: 41203,
//     cityDetail: function () {
//       console.log(this);
//     },
//   },
// };
// person.userDetails();

// let calculateSum = (a, a, a, a) => {
//   console.log(a);
// };
// calculateSum(1, 2, 3, 4);

function* fn() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;

  return 10;
}
let result = fn();
console.log(result.next().value);
console.log(result.next().value);
console.log(result.next().value);
console.log(result.next().value);
