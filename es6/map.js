// let person = {
//   firstName: "sarthak",
//   lastName: "vaidya",
//   phone: 1234,
// };

// let obj = {};
// let obj1 = {};
// person[obj] = "xyz";
// person[obj1] = "xyz1";

// //console.log(person);

// let getUser = () => {};
// let arr = [1, 2, 3];
// let map = new Map();
// map.set(obj, "abc");
// map.set(obj1, "abc1");
// map.set(person, "sarthak");
// map.set(1, arr);
// map.set(undefined, () => {});
// map.set(null, "a");
// map.set(getUser, "b");
// map.set(arr, "c");
// map.set(NaN, "d");
//console.log(map);

// map.delete(NaN);
// map.delete(arr);
//console.log(map.get(obj));

//map.clear();
//console.log(map.size);

// for (let [key, value] of map.entries()) {
//   console.log(key, ":", value);
// }

// map.forEach((value, key) => {
//   console.log(key, ":", value);
// });

//console.log(map.entries());
// console.log(map.keys());
// console.log(map.values());

//WeakMap it will only take object

// let obj = { firstName: "sarthak" };
// let weakMap = new WeakMap();

// weakMap.set(obj, "sarthak");
// console.log(weakMap);
// obj = null;

let vistsCount = new WeakMap();

function countUser(user) {
  let count = vistsCount.get(user) || 0;
  vistsCount.set(user, count + 1);
  console.log("from counterUser", vistsCount);
}

let person = {
  firstName: "sarthak",
};

countUser(person);
person = null;
countUser(person);
