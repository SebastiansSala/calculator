let display = [];
let operadores = [];
let values = [];
let mainValues = [];
let ans = 0; 

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
  } else if (operator === "x") {
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


function clear() {
  document.querySelector(".showOnScreen").innerHTML = "";
  display.forEach((element) => {
    element.remove();
  });
  display.length = 0;
  console.log(display)
}

function remove() {
  const lastItem = display.pop();
  if (lastItem) {
    lastItem.remove();
  }
}

function main() {
  document.querySelectorAll(".item").forEach((element) => {
    element.addEventListener("click", () => {
      if (element.textContent === "AC") {
        clear();
      } else if (element.textContent === "C") {
        remove();
      } else {
        if (element.textContent.match(/\+|\-|\x|\//)) {
          operadores.push(element.textContent);
          mainValues.push(parseInt(ans));
          console.log(mainValues)
        }else{
          const newItem = document.createElement("div");
          newItem.textContent = element.textContent;
          document.querySelector(".showOnScreen").appendChild(newItem);
          display.push(newItem);
          values.push(element.textContent);
          ans = values.join('');
          console.log(ans)
        }
      }
    });
  });
}

main();
