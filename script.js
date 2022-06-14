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
let displayValue = [];
let firstNum = [];
let secondNum = [];

num.forEach((key) => {
  key.addEventListener('click', () => {
    const number = parseInt(key.textContent);
    displayValue.push(number);
    display.textContent = displayValue.join().replace(/,/g, '');
  });
});



//Perform Operations
let operators = document.querySelectorAll('.operator');
let currentOperator = [];
let operatorFunction;

operators.forEach((key) => {
  key.addEventListener('click', () => {
    const operator = key.textContent;
    if (operator === 'x') operatorFunction = multiply;
    if (operator === '÷') operatorFunction = divide;
    if (operator === '-') operatorFunction = subtract;
    if (operator === '+') operatorFunction = add;
    currentOperator = operator;
    displayValue.push(` ${operator} `);
    display.textContent = displayValue.join().replace(/,/g, '');

    //check if there's already a total in display
    
    
  });
});

const equal = document.getElementById('equal')
const displayTotal = document.getElementById('total');

equal.addEventListener('click', () => {
  firstNum = parseInt(displayValue.splice(0, displayValue.indexOf(` ${currentOperator} `)).join().replace(/,/g, ''));
  secondNum = parseInt(displayValue.splice(1).join().replace(/,/g, ''));
  let total = operate(operatorFunction, firstNum, secondNum);
  displayValue = [];
  displayTotal.textContent = total;

}
);



//Clear
const clear = document.getElementById('clear');

clear.addEventListener('click', () => {
  displayValue = [];
  display.textContent = "";
  displayTotal.textContent = "";

});


  