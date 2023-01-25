// function sum(a, b, c, d) {
//   return a + b + c + d;
// }

function sum(a) {
  return function (b) {
    return function (c) {
      return function (d) {
        return a + b + c + d;
      };
    };
  };
}

//let result = sum(10, 10, 10, 10);
// let fn1 = sum(10);
// let fn2 = fn1(10);
// let fn3 = fn2(10);
// let fn4 = fn3(10);
console.log(sum(10)(10)(10)(10));

//console.log(fn4);
