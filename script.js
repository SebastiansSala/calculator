let operador;
let ansArr = [];
let display = [];
let num;

function sum(a, b) {
  return a + b;
}

function substract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(operator, a, b) {
  if (operator === "+") {
    return sum(a, b);
  } else if (operator === "-") {
    return substract(a, b);
  } else if (operator === "*") {
    return multiply(a, b);
  } else if (operator === "/") {
    return divide(a, b);
  }
}

function clear() {
  document.querySelector("#clear").addEventListener("click", () => {
    document.querySelector(".showOnScreen").innerHTML = "";
    do {
      ansArr.pop();
    } while (ansArr.length > 0);
    do {
      display.pop();
    } while (display.length > 0);
  });
}

function printAnswer(operador, a, b) {
  document.querySelector("#equal").addEventListener("click", () => {
    document.querySelector(".showOnScreen").innerHTML = operate(operador, a, b);
  });
}

function main() {
  document.querySelectorAll(".item").forEach((element) => {
    element.addEventListener("click", () => {
    });
  });
}

main();


if (element.textContent === "AC") {
  clear();
} else {
  document.querySelector(".showOnScreen").innerHTML +=
    element.textContent;
  if (isNaN(element.textContent)) {
    operador = element.textContent;
    ansArr.push(parseInt(num));
    console.log(ansArr);
    while (display.length > 0) {
      display.pop();
    }
  } else {
    display.push(parseInt(element.textContent));
    num = display.join("");
    console.log(num);
  }
  if (ansArr.length === 2) {
    document.querySelector(".showOnScreen").innerHTML = operate(
      operador,
      ansArr[0],
      ansArr[1]
    );
    while (ansArr.length > 0) {
      ansArr.pop();
    }
    display.push(operate(operador, ansArr[0], ansArr[1]));
    ansArr.push(operate(operador, ansArr[0], ansArr[1]));
  }
}
