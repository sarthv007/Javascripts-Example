let getUsers = (callback) => {
  setTimeout(() => {
    callback([
      {
        userName: "sarthak",
        email: "sa@gmail.com",
      },
      {
        userName: "sidhesh",
        email: "sidhesh@gmail.com",
      },
    ]);
  }, 2000);
};

function findUser(username, callback) {
  getUsers((users) => {
    const user = users.find((user) => user.userName === username);
    callback(user);
  });
}

function callback(user) {
  console.log(user);
}
findUser("sarthak", callback);
