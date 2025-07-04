const form = document.querySelector('form');

const calculateBMI = (height, weight) => weight / Math.pow(height / 100, 2);

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const weight = parseInt(document.querySelector('#weight').value);
  const height = parseInt(document.querySelector('#height').value);
  const results = document.querySelector('#results');

  const bmi = calculateBMI(height, weight).toFixed(1);

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    results.innerHTML = `${bmi}`;
  }
});
