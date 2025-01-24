'use strict';

const userInput = document.getElementById('input');
const resultEl = document.getElementById('result');
const errorEl = document.getElementById('error');
const convertBtn = document.getElementById('convertBtn');

/// Logic to convert the user weight
convertBtn.addEventListener('click', function () {
  const kilograms = Number(userInput.value) * 0.4536;

  if (userInput.value < 1) {
    userInput.style.borderColor = 'red';
    errorEl.textContent = 'Please enter a valid number!';
  } else {
    userInput.style.borderColor = 'green';
    resultEl.textContent = kilograms;
    errorEl.textContent = '';
  }

  setTimeout(
    () => ((userInput.value = ''), (resultEl.textContent = '')),
    10000
  );

  return kilograms;
});

userInput.addEventListener('focus', function () {
  if (userInput.value < 1 || userInput.value === '') {
    userInput.style.borderColor = 'red';
    errorEl.textContent = 'Please enter a valid number!';
  } else {
    userInput.style.borderColor = 'green';
    // errorEl.textContent = '';
  }
});
