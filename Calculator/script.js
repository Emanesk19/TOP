let num1 = "";
let num2 = " ";
let operator = " ";
let operatorClicked = false;

const numbers = document.querySelectorAll("#numbers");
const operators = document.querySelectorAll("#operators");
const result = document.querySelector("#result");
const equalSign = document.querySelector("#equalSign");
const clear = document.querySelector("#clearButton");

operators.forEach((opertation) => {
  opertation.addEventListener("click", (e) => {
    operatorClicked = true;
    console.log(operator);
    if (num2 != 0 && operatorClicked) {
      let res = operate(parseInt(num1), parseInt(num2), operator);
      console.log("before reset" , num1);
      console.log("before reset" , num2)
      num1 = "";
      num2 = "";
      num1 = res;
      result.textContent = num1;
      
      console.log(num1);
    }
    
    operator = opertation.textContent;
    opertation.style.background = "pink";
    console.log(operatorClicked, "clicked operator", operator);
  });
});

clear.addEventListener("click", () => {
  result.textContent = " ";
  num1 = "";
  num2 = "";
  operator = "";
});

numbers.forEach((number) => {
  number.addEventListener("click", (e) => {
    if (!operatorClicked) {
      num1 += number.textContent;
      result.textContent = num1;
    } else if (operatorClicked) {
      num2 += number.textContent;
      result.textContent = num2;
      console.log(num2);
    }
  });
});

equalSign.addEventListener("click", () => {
  if (num1 == "" && num2 == "" && operator == " ") {
    alert("Enter all the required Fields");
  } else if (num1 == "") {
    alert("Enter number");
  } else if (operator && num2 === " ") {
    alert("Enter the second number");
  } else if (operator == "") {
    alert("Choose Operation");
  }

  let num1Int = parseInt(num1);
  let num2Int = parseInt(num2);

  let res = operate(num1Int, num2Int, operator);
  num1 = " ";
  num2 = " ";
  operatorClicked = false;
  num1 = res;
  result.textContent = num1;
});

function operate(n, m, operation) {
  let res = 0;
  switch (operation) {
    case "+":
      res = result.textContent = add(n, m);
      break;
    case "-":
      res = result.textContent = subtract(n, m);
      break;
    case "*":
      res = result.textContent = multiply(n, m);
      break;
    case "/":
      res = result.textContent = divide(n, m);
      break;
    default:
      "Invalid Operation";
      break;
  }
  return res;
}

const add = (n, m) => {
  return n + m;
};
const subtract = (n, m) => {
  return n - m;
};
const multiply = (n, m) => {
  return n * m;
};
const divide = (n, m) => {
  if (m !== 0) {
    return n / m;
  }
  alert( "Cant divide by 0");
};
