console.log("start");

setTimeout(function cbT() {
  console.log("callback");
}, 10);

fetch("https://jsonplaceholder.typicode.com/comments").then(function cbF(
  response
) {
  response.json().then((result) => console.log(result));
});

for (let i = 0; i < 10000; i++) {
  console.log("value of i is:", i);
}

console.log("end");
