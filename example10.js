var a = 1;

{
  var a = 100;
  console.log("I am running from block", a);
}
console.log("I am running from outside block", a);

function getData() {
  var a = 1;
  console.log("i am runing from getData", a);
}
