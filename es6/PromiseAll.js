const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    //console.log("From p1");
    reject("Promise rejected");
  }, 1000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    //console.log("From p2");
    resolve(20);
  }, 2000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    //console.log("From p3");
    resolve(30);
  }, 3000);
});

let p = Promise.all([p1, p2, p3])
  .then((results) => {
    console.log(results);
  })
  .catch((error) => console.log(error));
