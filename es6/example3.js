let getData = (
  a = 0,
  b = 1,
  name = "js",
  personObj = { firstName: "sarthak" }
) => {
  console.log(`${name} ${personObj.firstName}`);
  return a + b;
};
console.log(getData(100, 200));
