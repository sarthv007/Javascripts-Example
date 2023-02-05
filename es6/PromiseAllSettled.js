// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     //console.log("From p1");
//     resolve("resolve p1");
//   }, 1000);
// });

// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     //console.log("From p2");
//     //resolve(20);
//     reject("reject p2");
//   }, 2000);
// });

// const p3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     //console.log("From p3");
//     //resolve(30);
//     resolve("resolve p3");
//   }, 3000);
// });

// let p = Promise.allSettled([p1, p2, p3])
//   .then((results) => {
//     console.log(results);
//   })
//   .catch((error) => console.log(error));

// let p1 = fetch("https://netflix.com");
// p1.then((result) => {
//   //code which i need to show on ui will go here
// })
//   .catch((error) => console.log("from Error block", error))
//   .finally(() => {
//     console.log("this code will always run");
//   });

// //Actual API call using promise
// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => response.json())
//   .then((json) => console.log(json));

// let p1 = new Promise((resolve, reject) => {
//   resolve(10);
//   //reject("Api fails");
// });

// p1.then((result) => {
//   console.log(result);
// })
//   .catch((error) => console.log(error))
//   .finally(() => console.log("It will execute allway"));
