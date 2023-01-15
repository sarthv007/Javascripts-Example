let a = 200;
function getData() {
  let a = 300;
  console.log(a);
  a = 1000;
  console.log("I am running from block", a);
}
console.log(a);
getData();
