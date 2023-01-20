let getData = function (callback) {
  callback();
  return function () {
    console.log("inner function ");
  };
};

//getData will be treated as variable
let fn = getData(function () {
  console.log("callback function ");
});

console.log("reference", fn);
fn();
