const clock = document.querySelector('#clock');

let time = new Date().toLocaleTimeString();
clock.innerText = `${time}`;
setInterval(() => {
  time = new Date().toLocaleTimeString();
  clock.innerText = `${time}`;
}, 1000);
