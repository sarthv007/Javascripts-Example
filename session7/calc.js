let calc = (function () {
  function add() {
    return 20 + 30;
  }
  function multiply() {
    return 20 * 30;
  }
  return {
    add: add,
    multiply: multiply,
  };
})();
