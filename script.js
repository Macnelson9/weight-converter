'use strict';

const userInput = document.getElementById('input');
const resultEl = document.getElementById('result');
const errorEl = document.getElementById('error');

userInput.addEventListener('click', function () {
  const kilograms = Number(userInput.value) * 0.4536;
  console.log(typeof kilograms);
  console.log(kilograms);

  return kilograms;
});
