let playNow = (() => {
  var chances = 5;

  return () => {
    chances--;
    if (chances <= 0) {
      console.log("Game Over!!");
      return;
    }
    console.log("You have " + chances + " left");
  };
})();

playNow();
playNow();
playNow();
playNow();
playNow();
