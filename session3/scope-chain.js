function a() {
  var b = 20;
  c();
  function c() {
    console.log(b);
  }
}
a();
