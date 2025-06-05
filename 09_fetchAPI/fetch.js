// Example -aysnc await with try-catch-finally
async function getAllUsers() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    console.log(response);
  } catch (error) {
    console.log(error)
  }
}
getAllUsers()

// Example- then-catch-finally
fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => {
    return response.json();
  })
  .then((data) => { console.log("example-then-catch", data) })
  .catch((error) => confirm.log(error))


fetch('https://api.github.com/users/hiteshchoudhary')
  .then((response) => {
    return response.json();
  })
  .then((data) => { console.log(data) })
  .catch((error) => confirm.log(error))