let user = {
  "first name": "sarthak",
  last_name: "vaidya",
  email: "sa@gmail.com",
  phone_number: 12312312,
  address: {
    city: "Pune",
    pincode: 411033,
  },
  login: function () {
    console.log(this);
  },
};

// Object.value
//for in

// for (let i in user) {
//   console.log(user[i]);
// }

console.log(Object.values(user));

// console.log(user.last_name);
// console.log(user["email"]);
// user["pincode"] = 431203;
// console.log(user);

// delete user.address;
// console.log(user);
