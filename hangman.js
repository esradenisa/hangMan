const wordToGuess = "javascript";
let hiddenWord = "_".repeat(wordToGuess.length).split("");
let remainingLives = 7;
let gameWon = false;

const wordElement = document.getElementById("word");
const messageElement = document.getElementById("message");
const livesElement = document.getElementById("lives");
wordElement.textContent = hiddenWord.join(" ");

function guessLetter() {
    const input = document.getElementById("guess");
    const guess = input.value.toLowerCase();

    if (wordToGuess.includes(guess)) {
        for (let i = 0; i < wordToGuess.length; ++i) {
            if (wordToGuess[i] == guess) {
                hiddenWord[i] = guess;
            }
        }
    } else {
        --remainingLives;
    }

    wordElement.textContent = hiddenWord.join(" ");
    livesElement.textContent = remainingLives;

    if (hiddenWord.join("") === wordToGuess) {
        messageElement.textContent = "Congratulations! You won!";
        gameWon = true;
    } else if (remainingLives <= 0) {
        messageElement.textContent = "You lost! The word was: " + wordToGuess;
    }

    input.value = "";
    input.focus();
}
