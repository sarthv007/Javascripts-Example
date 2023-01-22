let subscribe = () => {
  let count = 0;
  return () => (count += 1);
};

let subcriberCount = subscribe();

button = document.getElementById("button");
button.addEventListener("click", function () {
  document.getElementById("counter").innerHTML = subcriberCount();
});
