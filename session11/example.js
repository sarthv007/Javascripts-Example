let person = {
  firstName: "sarthak",
  lastName: "vaidya",
};

//person.printFullName.call(person, "city", "maharastra");

function printFullName(city, state) {
  console.log(this);
  console.log(this.firstName + " " + this.lastName + " " + city + " " + state);
}

//printFullName.call(person, "Pune", "Maharastra");
printFullName.apply(person, ["Pune", "Maharastra"]);

let employeeObject = {
  firstName: "sidhesh",
  lastName: "tikambare",
};
//printFullName.call(employeeObject, "Pune", "Maharastra");

printFullName.apply(employeeObject, ["Pune", "Maharastra"]);
