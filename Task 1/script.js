let currentNumber = "";
let previousNumber = "";
let operator = "";

const display = document.getElementById("result");

function appendNumber(number) {
  currentNumber += number;
  display.value = currentNumber;
}

function selectOperator(op) {
  previousNumber = currentNumber;
  currentNumber = "";
  operator = op;
}

function clearDisplay() {
  currentNumber = "";
  previousNumber = "";
  operator = "";
  display.value = "";
}

function delDisplay() {
  currentNumber = currentNumber.slice(0, -1);
  display.value= currentNumber;
}

function calculate() {
  let result = "";
  switch (operator) {
    case "+":
      result = parseFloat(previousNumber) + parseFloat(currentNumber);
      break;
    case "-":
      result = parseFloat(previousNumber) - parseFloat(currentNumber);
      break;
    case "*":
      result = parseFloat(previousNumber) * parseFloat(currentNumber);
      break;
    case "/":
      result = parseFloat(previousNumber) / parseFloat(currentNumber);
      break;
  }
  currentNumber = result;
  display.value = result;
}