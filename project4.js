let randomnumber = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector('#submit');
const guessInput = document.querySelector('#guess');

const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

let prevguess = [];
let numGuess = 1;
let playgame = true;
let newGameBtn = null;

if (playgame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault();
        const guess = parseInt(guessInput.value);
        validateguess(guess);
    });
}

function validateguess(guess) {
    if (isNaN(guess) || guess < 1 || guess > 100) {
        alert("Please enter a valid number between 1 and 100");
        return;
    }
    prevguess.push(guess);
    displayguess(guess);
    if (numGuess === 10) {
        displayMessage(`Game Over. Random number was ${randomnumber}`);
        endGame();
    } else {
        checkguess(guess);
    }
}

function checkguess(guess) {
    if (guess === randomnumber) {
        displayMessage('You guessed it right!');
        endGame();
    } else if (guess < randomnumber) {
        displayMessage("Number is too Low");
    } else {
        displayMessage("Number is too High");
    }
}

function displayguess(guess) {
    guessInput.value = '';
    guesses.innerHTML = prevguess.join(', ');
    lastResult.innerHTML = `${10 - numGuess}`;
    numGuess++;
}

function endGame() {
    guessInput.value = '';
    guessInput.setAttribute('disabled', '');
    submit.setAttribute('disabled', '');
    displayNewGameButton();
    playgame = false;
}

function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function displayNewGameButton() {
    if (!newGameBtn) {
        newGameBtn = document.createElement('button');
        newGameBtn.textContent = 'Start New Game';
        newGameBtn.id = 'newgame';
        newGameBtn.classList.add('button');
        document.body.appendChild(newGameBtn);
        newGameBtn.addEventListener('click', newgame);
    }
}

function newgame() {
    randomnumber = parseInt(Math.random() * 100 + 1);
    prevguess = [];
    numGuess = 1;
    guesses.innerHTML = '';
    lastResult.innerHTML = '10';
    lowOrHi.innerHTML = '';
    guessInput.removeAttribute('disabled');
    submit.removeAttribute('disabled');
    if (newGameBtn) {
        newGameBtn.remove();
        newGameBtn = null;
    }
    playgame = true;
}