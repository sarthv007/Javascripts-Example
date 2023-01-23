// function z() {
//   var firstName = "sarthak";
//   function x() {
//     var a = 10;
//     function y() {
//       var age = 20;
//       console.log(a, age, firstName);
//     }
//     y();
//   }
//   x();
// }
// z();

// function outerFn() {
//   var a = 20;
//   function innerFn() {
//     console.log(a);
//   }
//   return innerFn;
// }

// let innerFnResult = outerFn();
// console.log(innerFnResult);
// innerFnResult();

function outerFunction() {
  var counter = 0;
  function innertFunction() {
    counter++;
    console.log(counter);
  }
  return innertFunction;
}

let countVal = outerFunction();
console.log(countVal);
countVal();
countVal();
countVal();
countVal();
countVal();
