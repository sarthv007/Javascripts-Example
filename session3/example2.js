function a() {
  var address = "Jalna";
  c();
  function c() {
    console.log(b);
    console.log("inside c", this.b);
    console.log(this.first_name);
    console.log(this.person.name);
    console.log(this.getData());
  }
}

var b = 20;
var first_name = "sarthak";
var person = {
  name: "sidhesh",
  city: "pune",
};

function getData() {
  console.log("I am runing from getData");
}

a();
