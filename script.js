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

function substract(value){ 
  return value[0] - value[1]
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

function operate(operadores, values) {
  if (operadores[0] === "+") {
    return sum(values);
  } else if (operadores[0] === "-") {
    return substract(values);
  } else if (operadores[0] === "x") {
    return multiply(values);
  } else if (operadores[0] === "/") {
    return divide(values);
  }
}

function showResult() {
  if(operadores.length === 2){
    mainValues = [operate(operadores, mainValues)];
    document.querySelector(".result").innerHTML = mainValues;
  }else{
    document.querySelector(".result").innerHTML = `${mainValues}${operadores}`;
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
      } else if (element.textContent === "C") {
        remove();
      } else if (element.textContent.match(/\+|\-|\x|\//)) {
          operadores.push(element.textContent);
          mainValues.push(parseInt(ans));
          values.length = 0;
          clearScreen();
          showResult();
          console.log(mainValues)
          console.log(operadores)
          console.log(ans)
          console.log(display)
        }else if(element.textContent.match(/=/)){
          document.querySelector(".result").innerHTML = '';
        }else {
          const newItem = document.createElement("div");
          newItem.textContent = element.textContent;
          document.querySelector(".showOnScreen").appendChild(newItem);
          display.push(newItem);
          values.push(newItem.textContent);
          ans = values.join("");
        }
    });
  });
}

main();
