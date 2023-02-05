// let arr = [1, 2, 3, 4, 5, 5, 5];
// console.log(arr);

// let set = new Set();
// set.add("sarthak");

// set.add(1);
// set.add({});
// set.add(undefined);
// set.add(null);
// set.add(() => {});
// set.add([1, 2, 3, 4]);
// set.add(NaN);
// set.delete(NaN);
// set.delete(1);
// set.delete("sarthak");
// set.delete(undefined);
//set.clear();
//console.log(set);

// for (let value of set) {
//   console.log(value);
// }

//set.forEach((value) => console.log(value));

//console.log(set.values());

//=====================================

let weakSet = new WeakSet();
let person = { firstName: "sarthak" };
let obj = { name: "nitin" };
let obj1 = { age: 50 };
weakSet.add(person);
weakSet.add(obj);
weakSet.add(obj1);
weakSet.delete(person);
console.log(weakSet);
