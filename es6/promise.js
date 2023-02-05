// let flag = false;
// let getUsers = () => {
//   return new Promise((resolve, reject) => {
//     if (flag) {
//       setTimeout(() => {
//         resolve([
//           {
//             userName: "sarthak",
//             email: "sa@gmail.com",
//           },
//           {
//             userName: "sidhesh",
//             email: "sidhesh@gmail.com",
//           },
//         ]);
//       }, 2000);
//     } else {
//       reject("There is error in api call");
//     }
//   });
// };

// getUsers()
//   .then((users) => {
//     //console.log(result);
//     const user = users.find((user) => user.userName === "sarthak");
//     console.log(user);
//   })
//   .catch((error) => console.log(error))
//   .finally(() => {
//     console.log("finally is called");
//   });

let flag = true;

let p1 = new Promise((resolve, reject) => {
  if (flag) {
    resolve("Promise Success");
  } else {
    reject("Promise Failed");
  }
});

p1.then((result) => {
  console.log(result);
})
  .catch((error) => {
    console.log(error);
  })
  .finally(() => console.log("finally block"));

//we have following methods for promise
// Promise.All
// Promise.race
// Promise.any
// Promise.allSetteled
