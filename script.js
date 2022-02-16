function add(num1, num2) {
    return Number(num1) + Number(num2);
}

function substract(num1, num2) {
    return Number(num1) - Number(num2);
}

function multiply(num1, num2) {
    if (num2 === "") {
        return Number(num1);
    } else { 
    return Number(num1) * Number(num2);
    }
}

function divide(num1, num2) {
    return Number(num1) / Number(num2);
}

//Operate() function:
function operate(operator, num1, num2) {
     
    if (operator == '+') {
        return add(num1, num2);
    } else if (operator == '-') {
        return substract(num1, num2);
    } else if (operator == '*') {
        return multiply(num1, num2);
    } else if (operator == '/') {
        return divide(num1, num2);
    }
}

let displayValue = "0";
let operator = "";
let number1 = "0";
let number2 = "";
let result = "";
const errorMsg = "You can't divide by 0";

//CLEAR Button:  
const clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', () => {
    display.textContent = "";
    number1 = "0";
    operator = "";
    displayValue = display.textContent;
})

const display = document.getElementById('display');
const numberButtons = document.querySelectorAll('.number-btn');
const operatorBtn = document.querySelectorAll('.operator-btn');
const equalsBtn = document.querySelector('.equals');

numberButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const input = button.textContent;
        if (
            (input != 0 && number1 == 0 && operator == "") ||
            number1 == result ||
            display.textContent == errorMsg
        ) {
            display.textContent = "";
            display.textContent += input;
            displayValue = display.textContent;
            number1 = display.textContent;
        } else if (display.textContent != 0) {
            display.textContent += input;
            displayValue = display.textContent;
            number1 = display.textContent;
        }
    });
});


operatorBtn.forEach((button) => {
    button.addEventListener("click", () => {
      if (operator === "" && display.textContent != errorMsg) {
        operator = button.textContent;
        number1 = displayValue;
        display.textContent += ` ${operator} `;
        displayValue = display.textContent;
      }
    });
  });

equalsBtn.addEventListener("click", () => {
    if (operator == "" && display.textContent != result) {
        display.textContent = displayValue;
    } else if (display.textContent == result) {
        display.textContent = result;
    } else {
        let arrays = displayValue.split(" ");
        number1 = arrays[0];
        operator = arrays[1];
        number2 = arrays[2];
        result = operate(operator, number1, number2);
        console.log(result);
        if (result == "Infinity" || Number.isNaN(result) === true) {
            number1 = "0";
            display.textContent = errorMsg;
            operator = "";
        } else {
            number1 = result;
            display.textContent = number1;
            operator = "";
        }
    }
});
