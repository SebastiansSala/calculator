let display = [];
let operadores = [];
let values = [];
let mainValues = [];
let ans = 0;

function sum(value) {
  return value.reduce((acum, values) => {
    acum += values;
    return acum;
  }, 0);
}

function substract(value) {
  return value.reduce((acum, values) => {
    acum -= values;
    return acum;
  }, 0);
}
function multiply(value) {
  return value.reduce((acum, values) => {
    acum *= values;
    return acum;
  }, 1);
}

function divide(value) {
  return value.reduce((acum, values) => {
    acum /= values;
    return acum;
  }, 1);
}

function showResult() {
  const ans = operate(operadores, mainValues);
  document.querySelector(".result").innerHTML = ans;
  operadores.pop();
}

function operate(operator, values) {
  if (operator[1] === "+") {
    return sum(values);
  } else if (operator[1] === "-") {
    return substract(values);
  } else if (operator[1] === "x") {
    return multiply(values);
  } else if (operator[1] === "/") {
    return divide(values);
  }
}

function clear() {
  document.querySelector(".showOnScreen").innerHTML = "";
  display.forEach((element) => {
    element.remove();
  });
  display.length = 0;
}

function remove() {
  const lastItem = display.pop();
  if (lastItem) {
    lastItem.remove();
  }
}

function clearScreen() {
  document.querySelector(".showOnScreen").innerHTML = "";
  display.forEach((element) => {
    element.remove();
  });
}

function main() {
  document.querySelectorAll(".item").forEach((element) => {
    element.addEventListener("click", () => {
      if (element.textContent === "AC") {
        clear();
        console.log(mainValues);
      } else if (element.textContent === "C") {
        remove();
        console.log(mainValues);
      } else {
        if (element.textContent.match(/\+|\-|\x|\/|\=/)) {
          operadores.push(element.textContent);
          mainValues.push(parseInt(ans));
          values.length = 0;
          clearScreen();
          console.log(mainValues);
        } else {
          const newItem = document.createElement("div");
          newItem.textContent = element.textContent;
          document.querySelector(".showOnScreen").appendChild(newItem);
          display.push(newItem);
          values.push(element.textContent);
          ans = values.join("");
        }
        if (operadores.length === 2) {
          showResult();
        }
      }
    });
  });
}

main();
