// let arr1 = [1, 2, 3, 4];
// let arr2 = [5, 6, 7, 8, 9];
// let arr3 = [200, 300, 400, "sarthak"];

// let oldArr = arr1.concat(arr2);
// let newArr = [...arr1, ...arr2, ...arr3];
// console.log(oldArr);
// console.log(newArr);

let p1 = {
  firstName: "sarthak",
  pincode: 411033,
};

let p2 = {
  lastName: "vaidya",
  address: "Pune",
};

let p3 = {
  loginDetails: {
    id: 1,
    loginName: "sarth",
    password: 123,
  },
};

let person = { ...p1, ...p2, ...p3 };
console.log(person);
