/*
GAME FUNCTION:
- Player must guess a number between a min and max
- Player gets a certain amount of guesses
- Notify player of guesses remaining
- Notify the player of the correct answer if loose
- Let player choose to play again
*/

// Game values
let min = 1,
  max = 10,
  winningNum = getRandomNum(min, max),
  guessesLeft = 3;


  

// UI Elements
const game = document.querySelector('#game'),
  minNum = document.querySelector('.min-num'),
  maxNum = document.querySelector('.max-num'),
  guessBtn = document.querySelector('#guess-btn'),
  guessInput = document.querySelector('#guess-input'),
  message = document.querySelector('.message');

// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// Play again event listener
game.addEventListener('mousedown', function (e) {
  if (e.target.className === 'play-again') {
    window.location.reload();
  }
});

//listen for guess
guessBtn.addEventListener('click', function () {
  guessesLeft -= 1;
  //parseInt changes string value to number
  let guess = parseInt(guessInput.value);
  //validate
  //isNaN is a function that checks if NaN
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} and ${max}`, 'red');
  } else if (guess === winningNum) { //check if win
    gameOver(true, `${winningNum} is correct! YOU WIN!`);
  } else if (guessesLeft === 0) {
    //game over lost
    gameOver(false, `Game over you lost the correct number was ${winningNum}`);
  } else {
    //game continues - answer wrong
    guessInput.style.borderColor = 'red';
    //tell user wrong number
    setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, 'red')
    guessInput.value = '';
  }



});

// Game over
function gameOver(won, msg) {
  let color;
  won === true ? color = 'green' : color = 'red';

  // Disable input
  guessInput.disabled = true;
  // Change border color
  guessInput.style.borderColor = color;
  // Set text color
  message.style.color = color;
  // Set message
  setMessage(msg);

  // PLay Again?
  guessBtn.value = 'Play Again';
  guessBtn.className += 'play-again';
}

// Get Winning Number
function getRandomNum(min, max) {

let randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
return randomNumber;

}

console.log(winningNum)

// Set message
function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}