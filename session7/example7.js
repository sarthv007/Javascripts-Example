let users = ["sarthak", "sidhesh"];
function addUser(userName, callback) {
  setTimeout(() => {
    users.push(userName);
    callback();
  }, 200);
}

function getUser() {
  setTimeout(() => {
    console.log(users);
  }, 100);
}

addUser("nitin", getUser);
