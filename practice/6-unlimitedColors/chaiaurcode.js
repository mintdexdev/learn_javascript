const start = document.querySelector('#start');
const stop = document.querySelector('#stop');

const randomColor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    if (i % 2)
      color += hex[parseInt(Math.random() * 16)];
    else
      color += hex[parseInt(Math.random() * 14)];
  }
  return color;
};

let changingColors;
const startChangingColor = function () {
  if (!changingColors) {
    changingColors = setInterval(changeBgColor, 1000);
  }

  function changeBgColor() {
    document.body.style.backgroundColor = randomColor();
  }
};
const stopChangingColor = function () {
  clearInterval(changingColors);
  changingColors = null;
};

start.addEventListener('click', startChangingColor);
stop.addEventListener('click', stopChangingColor);
