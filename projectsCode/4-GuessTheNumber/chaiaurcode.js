const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessInput');
const prevGusses = document.querySelector('.guesses');
const remainGueses = document.querySelector('.remainGueses');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const button = document.createElement('button');

let randomNumber = parseInt(Math.random() * 100 + 1);

let prevGuesses = [];
let tries = 10;
let playGame = true;

if (playGame) {
  submit.addEventListener('click', (e) => {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    if (validateGuess(guess)) {
    }
  });
}
console.log(randomNumber, remainGueses);

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('PLease enter a valid number');
  } else if (guess < 1) {
    alert('PLease enter a number more than 1');
  } else if (guess > 100) {
    alert('PLease enter a  number less than 100');
  } else {
    prevGuesses.push(guess);
    if (tries === 1) {
      displayGuess(guess);
      displayMessage(`<p>Game Over. The number was ${randomNumber}</p>`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}
function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(
      `You Guessed Correct!!!, <br>The number is: ${randomNumber}</p>`
    );
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is too low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is too high`);
  }
}

function displayGuess(message) {
  userInput.value = '';
  tries--;
  prevGusses.innerHTML += `${message} `;
  remainGueses.innerHTML = `${tries}`;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  submit.setAttribute('disabled', '');
  button.classList.add('newGameBtn');
  button.innerHTML = `<p id="newGame">Start new Game</p>`;
  startOver.append(button);
  playGame = false;
  newGame();
}
function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuesses = [];
    tries = 10;
    prevGusses.innerHTML = '';
    remainGueses.innerHTML = `${tries} `;
    userInput.removeAttribute('disabled');
    startOver.removeChild(button);

    playGame = true;
  });
}
