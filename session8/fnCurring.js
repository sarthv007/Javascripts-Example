function outerFunction(a) {
  return function innerFunction(b) {
    console.log(a + b);
  };
}
outerFunction(10)(200);
