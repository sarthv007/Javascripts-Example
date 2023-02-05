const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    //console.log("From p1");
    reject("reject");
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

let p = Promise.race([p1, p2, p3])
  .then((result) => {
    console.log(result);
  })
  .catch((error) => console.log(error));
