let a = 200;
console.log("I am running from outside block", a);
{
  let a;
  console.log(a);
  a = 100;
  console.log("I am running from block", a);
}
