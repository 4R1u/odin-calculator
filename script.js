let leftOperand = 0, rightOperand = 0;
let operator = "";
let displayValue = "";
const inputLine = document.querySelector(".input");
const resultLine = document.querySelector(".result");
let ans = "";


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
        case "^":
            return Math.pow(left, right);
        case "Del":
            displayValue = displayValue.slice(0,-1);
            resultLine.textContent = displayValue;
            break;
        case "Clear":
            displayValue = "";
            resultLine.textContent = "";
            inputLine.textContent = "";
            break;
    }
}

function appendNum(num) {
    if (num == "." && displayValue.includes(".")) {return;}
    else if (num == "Ans") {
        displayValue = ans;
    }
    else {
        displayValue += num;
    }
    resultLine.textContent = displayValue;
}

const buttons = document.querySelectorAll(".num-buttons button")
.forEach((button) => {
    button.addEventListener("click", () => {
        appendNum(button.textContent);
    }
)});
