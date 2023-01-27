let firstName = "sarthak";
let lastName = "vaidya";
let address = "jalna";
let pincode = 431202;

let userDetails =
  "User details are as: " +
  firstName +
  " " +
  lastName +
  " " +
  address +
  " " +
  pincode;
console.log(userDetails);

//syntax of writing a template string is
//`${varName}`

let personDetails = `User details are as: ${firstName} and ${lastName} from ${address} pincode ${pincode}`;
console.log(personDetails);
