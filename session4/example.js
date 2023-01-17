var a = 30;
console.log("Shadowing");
{
  var b = 100;
  let a = 10;
  console.log("inside block", a);
}
console.log("outside block", a);
