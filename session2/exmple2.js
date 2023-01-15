var a = 10;

function getName() {
  console.log("I am from noraml function");
}

var getName2 = function () {
  console.log("I am from getName2 function");
};

var getName3 = () => {};

console.log(a);
getName();
getName2();

function getData() {
  console.log("Normal function");
}

var getData1 = function () {
  console.log("from getData1 function");
};

let getData2 = () => {
  console.log("from arrow function");
};

(function () {
  console.log("I am from immediatly invoke function");
})();
