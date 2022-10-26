// Game Values
const min = 1
const max = 10
const winningNum = getRandomNum(min, max)
let guessesLeft = 3

const errorColor = '#dc3545'
const validColor = '#28a745'

// UI Elements
const game = document.querySelector('#game')
const minNum = document.querySelector('.min-num')
const maxNum = document.querySelector('.max-num')
const guessBtn = document.querySelector('#guess-btn')
const guessInput = document.querySelector('#guess-input')
const message = document.querySelector('.message')

console.log(game, minNum, message)

// Assign UI min and max
minNum.textContent = min
maxNum.textContent = max

game.addEventListener('mousedown', function (e) {
  if (e.target.classList.contains('play-again')) {
    window.location.reload()
  }
})

// Listen for guess
guessBtn.addEventListener('click', function (e) {
  e.preventDefault()

  const guess = parseInt(guessInput.value)

  // Validate
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} and ${max}`, errorColor)
  }

  // Check if won
  if (guess === winningNum) {
    gameOver(true, `${winningNum} is correct, you win!`)
  } else {
    guessesLeft -= 1

    if (guessesLeft === 0) {
      gameOver(false, `Game Over. The correct number has ${winningNum}`)
    } else {
      guessInput.style.borderColor = errorColor

      guessInput.value = ''

      setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, errorColor)
    }
  }
})

function gameOver (won, msg) {
  let color

  won === true ? color = validColor : color = errorColor

  guessInput.disabled = true

  guessInput.style.borderColor = color

  setMessage(msg, color)

  guessBtn.value = 'Play Again'
  guessBtn.classList.add('play-again')
}

function setMessage (msg, color) {
  message.style.color = color
  message.textContent = msg
}

function getRandomNum (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}
