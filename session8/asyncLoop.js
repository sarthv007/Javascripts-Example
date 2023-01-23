for (var i = 1; i <= 5; i++) {
  (function (j) {
    setTimeout(() => {
      console.log(j);
    }, 1000);
  })(i); //using IIFE
}

//expected output:
// 1
// 2
// 3
// 4
// 5
