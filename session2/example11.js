let person = {
  name: "sarthak",
  age: 25,
  address: {
    city: "pune",
    pincode: 411033,
  },
};

console.log(person);
let member = JSON.parse(JSON.stringify(person)); //deeep copy
member.name = "sidhesh";
member.address.city = "Aurangabad";
console.log(member);

// ...spread operator  //shallo copy
// object.assign    //shallow copy
// JSON.stringify(JSON.parse(var))
