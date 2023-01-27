const person = {
  firstName: "sarthak",
  lastName: "vaidya",
  address: "Pune",
  pincode: 12312,
  loginDetails: {
    loginName: "sarth007",
    id: 123,
    password: 2232,
  },
};

const { firstName, lastName, loginDetails } = person;
const { password } = loginDetails;
console.log(firstName, lastName, loginDetails, password);

let userNames = ["sarthak", "vaidya"];

const [first_name, last_name] = userNames;
console.log(first_name, last_name);

let numArr = [100, 200];
const [a, b] = numArr;
console.log(a, b);
