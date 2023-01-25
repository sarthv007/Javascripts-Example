let person = {
  firstName: "sarthak",
  lastName: "vaidya",
};

function printFullName(city, state) {
  console.log(this);
  console.log(this.firstName + " " + this.lastName + " " + city + " " + state);
}

let personDetail = printFullName.bind(person, "Pune", "Delhi");
personDetail();
