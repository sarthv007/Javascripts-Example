// we have created this object with object literal
//Syntax
// let objectName = {
//   key: value
// }

let person = {
  first_name: "sarthak",
  last_name: "vaidya",
  fullName: function () {
    console.log("value of this:", this);
    console.log(this.first_name + " " + this.last_name);
  },
  address: {
    city: "Jalna",
    pincode: 431203,
    details: {
      user: "one",
    },
  },
};

// console.log(person["first_name"]);
// console.log(person.address.details.user);
person.fullName();
