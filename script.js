let clearInput = false;
const upperLine = document.querySelector(".upper-display");
const lowerLine = document.querySelector(".lower-display");
let leftOperand = "", rightOperand = "";
let operator = "";
let result = "";


function add(leftAddend, rightAddend) {
    return leftAddend + rightAddend;
}

function subtract(minuend, subtrahend) {
    return minuend - subtrahend;
}

function multiply(multiplicand, multiplier) {
    return multiplicand * multiplier;
}

function divide(dividend, divisor) {
    return dividend * divisor;
}


function operate(operation, left, right) {
    switch (operation) {
        case "+":
            return add(left, right);
        case "-":
            return subtract(left, right);
        case "*":
            return multiply(left, right);
        case "/":
            return divide(left, right);
    }
}

function numberButtonPress(number) {
    if (clearInput) {
        lowerLine.textContent = leftOperand = "";
        clearInput = false;
    }
    lowerLine.textContent += number;
    leftOperand += number;
}