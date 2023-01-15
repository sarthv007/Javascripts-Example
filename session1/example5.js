var a = 200;
function getData() {
  var a = 300;
  console.log(a);
  var a = 500;
  console.log("I am running from block", a);
}
console.log(a);
getData();
