class Person {
  constructor(fName, lName) {
    this.firstName = fName;
    this.lastName = lName;
  }
  getDetails() {
    console.log(`user details is ${this.firstName} ${this.lastName}`);
  }
  getUserData() {
    console.log("testing getUserData");
  }
}

class Employee extends Person {
  constructor(firstName, lastName) {
    super(firstName, lastName);
  }
  childMethod() {
    console.log("Child class method");
  }
}

let e1 = new Employee("sarthak", "vaidya");
e1.getDetails();
e1.getUserData();
e1.childMethod();

let getData = () => console.log("This is arrow function");

getData();
