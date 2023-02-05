function getUser(userId) {
  return new Promise((resolve, reject) => {
    console.log("Get user from the database.");
    setTimeout(() => {
      reject("");
    }, 1000);
  });
}

function getServices(user) {
  return new Promise((resolve, reject) => {
    console.log(`Get services of  ${user.username} from the API.`);
    setTimeout(() => {
      resolve(["Email", "VPN", "CDN"]);
    }, 2 * 1000);
  });
}

function getServiceCost(services) {
  return new Promise((resolve, reject) => {
    console.log(`Calculate service costs of ${services}.`);
    setTimeout(() => {
      resolve(services.length * 100);
    }, 3 * 1000);
  });
}

// getUser(100).then(getServices).then(getServiceCost).then(console.log);

let showServiceCost = async () => {
  try {
    let user = await getUser(100);
    let services = await getServices(user);
    let cost = await getServiceCost(services);
    console.log(`The service cost is ${cost}`);
  } catch (error) {
    console.log(error);
  }
};

//normal function
async function showServiceCost() {
  try {
    let user = await getUser(100);
    let services = await getServices(user);
    let cost = await getServiceCost(services);
    console.log(`The service cost is ${cost}`);
  } catch (error) {
    console.log(error);
  }
}

showServiceCost();
