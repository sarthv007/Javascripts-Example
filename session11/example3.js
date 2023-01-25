let users = {
  firstName: "sarthak",
  lastName: "vaidya",
  address: {
    city: "pune",
    pincode: 411033,
  },
};

//setItem is used for storing
// localStorage.setItem("firstName", "sarthak");
// let firstName = localStorage.getItem("firstName");
// console.log(firstName);

// localStorage.setItem("userDetails", JSON.stringify(users));
// let usersData = localStorage.getItem("userDetails");
// console.log(JSON.parse(usersData));

//localStorage.clear();

sessionStorage.setItem("firstName", "sarthak");
let firstName = sessionStorage.getItem("firstName");
console.log(firstName);

sessionStorage.setItem("userDetails", JSON.stringify(users));
let usersData = sessionStorage.getItem("userDetails");
console.log(JSON.parse(usersData));
