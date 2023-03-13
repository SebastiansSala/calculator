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

function printAnswer(operador, a, b) {
  document.querySelector("#equal").addEventListener("click", () => {
    document.querySelector(".showOnScreen").innerHTML = operate(operador, a, b);
  });
}

function main() {
  let operador;
  let ansArr = [];
  const display = [];
  let num;

  const selected = document.querySelectorAll(".item");
  selected.forEach((element) => {
    element.addEventListener("click", () => {
      document.querySelector(".showOnScreen").innerHTML += element.textContent;
      if (isNaN(element.textContent)) {
        operador = element.textContent;
        console.log(operador);
        ansArr.push(parseInt(num));
      } else {
        display.push(parseInt(element.textContent));
        num = display.join("");
        console.log(num);
        console.log(ansArr);
      }
      if (ansArr.length === 2) {
        a = ansArr[0];
        b = ansArr[1];
        printAnswer(operador, a, b);
      }
    });
  });
}

document.querySelector("#clear").addEventListener("click", () => {
  document.querySelector(".showOnScreen").innerHTML = "";
});

main();
