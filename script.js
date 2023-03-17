let display = [];
let ans = "0";
let operator;
let values = [];
let operands = [];
let count = 0;

function sum(value) {
  return value.reduce((acum, val) => acum + val, 0);
}

function subtract(value) {
  return value.reduce((acum, val) => acum - val);
}

function multiply(value) {
  return value.reduce((acum, val) => acum * val, 1);
}

function divide(value) {
  if (value[1] === 0) {
    alert("Invalid division");
  }
  return value[0] / value[1];
}

function showResult() {
  const result = operate();
  displayNumber(result);
  operands.length = 0;
  operands.push(result);
}

function operate() {
  switch (operator) {
    case "+":
      return sum(operands);
    case "-":
      return subtract(operands);
    case "x":
      return multiply(operands);
    case "/":
      return divide(operands);
    default:
      throw new Error("Invalid operator");
  }
}

function clear() {
  clearScreen();
  display.length = 0;
  values.length = 0;
  ans = "0";
  operands.length = 0;
  displayNumber("");
}

function remove() {
  const lastItem = display.pop();
  if (lastItem) {
    lastItem.remove();
    values.pop();
    ans = values.join("");
  } else {
    ans = "0";
  }
}

function clearScreen() {
  document.querySelector(".showOnScreen").innerHTML = "";
}

function displayNumber(number) {
  document.querySelector(".result").innerHTML = number;
}

function main() {
  const items = document.querySelectorAll('.item');

  items.forEach((element) => {
    element.addEventListener("click", () => {
      const text = element.textContent;
      if (text === "AC") {
        clear();
      } else if (text === "C") {
        remove();
      } else if (text.match(/\+|\-|\x|\//)) {
        operands.push(parseFloat(ans));
        if (operands.length === 2) {
          showResult();
        }
        operator = text;
        clearScreen();
        values.length = 0;
      } else if (text.match(/=/)) {
        operands.push(parseFloat(ans));
        showResult();
        clearScreen();
        values.length = 0;
      } else if (text === ".") {
        if (!values.includes(".")) {
          const newItem = document.createElement("div");
          newItem.textContent = text;
          document.querySelector(".showOnScreen").appendChild(newItem);
          display.push(newItem);
          values.push(text);
          ans = values.join("");
        }
      } else if (text.match(/[0-9]/)) {
        const newItem = document.createElement("div");
        newItem.textContent = text;
        document.querySelector(".showOnScreen").appendChild(newItem);
        display.push(newItem);
        values.push(text);
        ans = values.join("");
      }
    });
  });

  document.addEventListener("keydown", (event) => {
    const key = event.key;
    if(key === '/'){
      event.preventDefault();
    }
    if (key === "Escape") {
      clear();
    } else if (key === "Backspace") {
      remove();
    } else if (key.match(/[0-9\.]/)) {
      const newItem = document.createElement("div");
      newItem.textContent = key;
      document.querySelector(".showOnScreen").appendChild(newItem);
      display.push(newItem);
      values.push(key);
      ans = values.join("");
    } else if (key.match(/\+|\-|\x|\//)) {
      operands.push(parseFloat(ans));
      if (operands.length === 2) {
        showResult();
      }
      operator = key;
      clearScreen();
      values.length = 0;
    } else if (key === "Enter") {
      operands.push(parseFloat(ans));
      showResult();
      clearScreen();
      values.length = 0;
    }
  });
}

main();



