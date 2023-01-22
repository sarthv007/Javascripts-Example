function outerFn() {
  var myVar = 0;
  console.log("from outerFn", myVar);
  return function () {
    var age = 20;
    myVar += 1;
    console.log("Age: ", age);
    console.log("from inner function", myVar);
  };
}
let innerFn = outerFn();
innerFn();
innerFn();
innerFn();
innerFn();
