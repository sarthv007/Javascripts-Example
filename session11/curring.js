let person = {
  firstName: "sarthak",
  lastName: "vaidya",
  email: "sa@gmail.com",
  phone: 1235656,
  address: {
    city: "pune",
    pincode: 311033,
  },
};

function get(obj) {
  return function (key) {
    return obj[key];
  };
}

console.log(get(person.address)("pincode"));
