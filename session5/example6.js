const calculator = (function () {
  function add(a, b) {
    return a + b;
  }

  function mutiply(a, b) {
    return a * b;
  }
  return {
    add,
    mutiply,
  };
})();
