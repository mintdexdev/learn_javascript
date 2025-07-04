// promise is a object
// takes callback
// reduce callback hell

// direct 'then' used 
new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log('async task 2');
    resolve();
  }, 1000);
}).then(function () {
  console.log("Promise 1 resolved")
})


const promiseTwo = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log('async task1 is completed');
    resolve();
  }, 1000);
})
promiseTwo.then(function () {
  console.log('promise1 resolved');
})


const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log('async task 3');
    resolve({ username: "starfall", email: "starfall@foo.bar" });
  }, 1000);
});
promiseThree.then(function (user) {
  console.log(user)
})


const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ username: "dex", password: "123" });
    } else {
      reject('ERROR: promise4 went wrong')
    }
  }, 1000);
})
promiseFour.then((user) => {
  console.log(user);
  return user.username;
}).then((username) => {
  console.log(username)
}).catch((error) => {
  // these is a response not an actual error
  console.log(error)
}).finally(() => {
  console.log("promise is either resolved or rejected")
});


// Promise from async await
const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "starfall", password: "123" });
    } else {
      reject('ERROR: promise5 went wrong')
    }
  }, 1000);
});
// async await
async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response)
  } catch (error) {
    console.log(error)
  } finally {
    console.log("async await function completed")
  }
}
consumePromiseFive()