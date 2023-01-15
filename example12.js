function getData() {
  a = 100;
}

function setData() {
  console.log("I am running from setData", a);
}

getData();

setData();
console.log("I am running from outside", a);
