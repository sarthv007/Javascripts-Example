let a = 200;
function getData() {
  console.log(a);
  a = 100;
  console.log("I am running from block", a);
}
getData();
