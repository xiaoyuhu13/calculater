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
    
     //check if user trying to start a new operation
    if (displayValue.length === 0){
      clear.click();
    };

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
    if (displayTotal.textContent != ""){
      displayValue = [];
      firstNum = parseInt(displayTotal.textContent);
      displayValue.push(firstNum);
      displayValue.push(` ${operator} `);
      display.textContent = displayValue.join().replace(/,/g, '');
    };

  });
});

const equal = document.getElementById('equal')
const displayTotal = document.getElementById('total');

equal.addEventListener('click', () => {
  if (firstNum = []){
    firstNum = parseInt(displayValue.splice(0, displayValue.indexOf(` ${currentOperator} `)).join().replace(/,/g, ''));
    secondNum = parseInt(displayValue.splice(1).join().replace(/,/g, ''));
    let total = operate(operatorFunction, firstNum, secondNum);

    if (total.toString().length >13) {
      displayTotal.textContent = total.toFixed(13);
    } else{
      displayTotal.textContent = total;
    } 

    displayValue = [];
  };

  secondNum = displayValue.splice(0, displayValue.indexOf(` ${currentOperator} `));
  secondNum = parseInt(secondNum.splice(0,1).join().replace(/,/g, ''))

  
  if (displayTotal.textContent === 'Infinity') {
    alert('Silly goose! You can\'t divide by 0 :(');
    clear.click();
  }
}
);



//Clear
const clear = document.getElementById('clear');

clear.addEventListener('click', () => {
  displayValue = [];
  display.textContent = "";
  displayTotal.textContent = "";

});




  