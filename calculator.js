const add = function (a, b) {
  return a + b;
}

const subtract = function(a, b) {
  return a - b;
}

const multiply = function(a, b) {
  return a * b;
}

const divide = function(a, b) {
  if (b == 0) {
    return NaN;
  } else {
    return a / b;
  }
}

const operate = function() {
  num1 = Number(num1);
  num2 = Number(num2);

  if (operator == '+') {
    displayValue = add(num1, num2);
  } else if (operator == '-') {
    displayValue = subtract(num1, num2);
  } else if (operator == '*') {
    displayValue = multiply(num1, num2);
  } else if (operator == '/') {
    displayValue = divide(num1, num2);
  }

  num1 = displayValue;
  num2 = '';
  
  updateDisplay(displayValue);
}

const updateDisplay = function(value) {
  const display = document.querySelector('#display'); 
  display.textContent = value;
}

const clear = function() {
  num1 = '';
  num2 = '';
  operator = '';
  displayValue = '0';
  updateDisplay(displayValue);
}

let num1 = '';
let num2 = '';
let operator = '';
let displayValue = '0'

updateDisplay(displayValue);

const numbers = document.querySelectorAll('#number');
numbers.forEach(button => {
  button.addEventListener('click', () => {
    if (operator == '') {
      num1 += button.value;
      updateDisplay(num1);
    } else {
      num2 += button.value;
      updateDisplay(num2);
    }
  });
});

const operators = document.querySelectorAll('#operator');
operators.forEach(button => {
  button.addEventListener('click', () => {
    operator = button.value;
  });
});

const equals = document.querySelector('#equals');
equals.addEventListener('click', () => {
  operate();
});

const allClear = document.querySelector('#clear');
allClear.addEventListener('click', () => clear())