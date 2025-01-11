const randomNumber = Math.floor(Math.random() * 100) + 1;

let attempts = 0;

function checkGuess() {
  const userInput = document.getElementById("guessInput").value;
  const message = document.getElementById("message");
  
  attempts++;

  if (!userInput) {
    message.textContent = "Введите число!";
    return;
  }

  const guess = Number(userInput);

  if (guess < 1 || guess > 100) {
    message.textContent = "Введите число от 1 до 100.";
  } else if (guess < randomNumber) {
    message.textContent = "Число больше.";
  } else if (guess > randomNumber) {
    message.textContent = "Число меньше.";
  } else {
    message.textContent = `Поздравляем, вы угадали число ${randomNumber} за ${attempts} попыток! 🎉`;
    document.getElementById("guessInput").disabled = true;
  }
}
