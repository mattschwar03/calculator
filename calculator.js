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

const hasDecimal = function(value) {
  return value % 1 == 0;
}

const operate = function(value) {
  num1 = Number(num1);
  num2 = Number(num2);

  if (value == '+') {
    displayValue = add(num1, num2);
  } else if (value == '-') {
    displayValue = subtract(num1, num2);
  } else if (value == '*') {
    displayValue = multiply(num1, num2);
  } else if (value == '/') {
    displayValue = divide(num1, num2);
  }

  num1 = displayValue;
  num2 = '';

  if (!hasDecimal) {
    updateDisplay(displayValue);
  } else {
    displayValue = displayValue.toFixed(5);
    updateDisplay(displayValue);
  }
}

const updateDisplay = function(value) {
  const display = document.querySelector('#display'); 
  display.textContent = value;
}

const clear = function() {
  num1 = '';
  num2 = '';
  currOperator = '';
  prevOperator = '';
  displayValue = '0';
  updateDisplay(displayValue);
}

let num1 = '';
let num2 = '';
let currOperator = '';
let prevOperator = '';
let displayValue = '0';
let maxNumber = 7;
let currNumber = 0;

updateDisplay(displayValue);

const numbers = document.querySelectorAll('#number');
numbers.forEach(button => {
  button.addEventListener('click', () => {
    if (currOperator == '') {
        if (currNumber < 10) {
          if (button.value == '.' && num1.includes('.') == false) {
            num1 += button.value;
            updateDisplay(num1);
          } else if (button.value != '.') {
            num1 += button.value;
            updateDisplay(num1);
          }
          currNumber++;
        }
    } else {
      if (currNumber < 10) {
        if (button.value == '.' && num2.includes('.') == false) {
          num2 += button.value;
          updateDisplay(num2);
        } else if (button.value != '.') {
          num2 += button.value;
          updateDisplay(num2);
        }
        currNumber++;
      }
    }
  });
});

const operators = document.querySelectorAll('#operator');
operators.forEach(button => {
  button.addEventListener('click', () => {
    if (num2 != '') {
      prevOperator = currOperator;
      currOperator = button.value;
      if (prevOperator != currOperator) {
        operate(prevOperator);
      } else {
        operate(currOperator);
      }
    } else {
      console.log(4);
      currOperator = button.value;
    }
  });
});

const equals = document.querySelector('#equals');
equals.addEventListener('click', () => {
    if (num2 != '') {
      operate(currOperator);
    }
});

const allClear = document.querySelector('#clear');
allClear.addEventListener('click', () => clear())