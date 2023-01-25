console.log("start");

function add() {}
try {
  add();
} catch (error) {
  console.log(error.name + " " + error.message);
} finally {
  console.log("welcome to javascript");
}
