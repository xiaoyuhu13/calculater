//Operations
function add(a, b) {
    return a + b;
  };
  
function subtract(a, b) {
    return a - b;
};

function multiply(a, b) {
    return a * b;
  };

function divide(a, b) {
    return a / b;
}

function operate(operator, a, b) {
    return operator(a, b);
}

//Display Numbers

let num = document.querySelectorAll('.num');
const display = document.getElementById('display-num');
let displayValue1 = [];
let displayValue2 = [];

num.forEach((key) => {
  key.addEventListener('click', () => {
    const number = parseInt(key.textContent);
    displayValue1.push(number)
    display.textContent = displayValue1.join().replace(/,/g, '');
  });
});

//Perform Operations
let operators = document.querySelectorAll('.operator');
let currentOperator = [];

operators.forEach((key) => {
  key.addEventListener('click', () => {
    const operator = key.textContent;
    if (operator === 'x') currentOperator.push(multiply);
    if (operator === '÷') currentOperator.push(divide);
    if (operator === '-') currentOperator.push(add);
    if (operator === '+') currentOperator.push(subtract);
    display.textContent = "";
    // displayValue.push('split');
  });
});

const equal = document.getElementById('equal')

equal.addEventListener('click', () => {

}
)


  