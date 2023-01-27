let submit = (a, b, ...rest) => {
  console.log(a, b, rest);
  for (let i of rest) {
    console.log(i);
  }
};

submit(1, 2, 3, 4, 5, 6);

// function fn() {
//   console.log(arguments);
// }

let fn = (...rest) => {
  console.log(rest);
};

fn(1, 2, 3, 4, 5, 6);
