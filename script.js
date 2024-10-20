let clearInput = false;


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

let leftOperand = 0, rightOperand = 0;
let operator = "";

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

