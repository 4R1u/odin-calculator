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
        lowerLine.textContent = rightOperand = "";
        clearInput = false;
    }
    if (number == "Ans") {
        lowerLine.textContent = rightOperand = result;
        return;
    }
    else if (number == ".") {
        if (rightOperand.includes(".")) {
            return;
        }
        else if (rightOperand == "") {
            lowerLine.textContent += "0";
            rightOperand += "0";
        }
    }
    lowerLine.textContent += number;
    rightOperand += number;
}

document.querySelectorAll(".num-buttons button")
.forEach((button) => {
    button.addEventListener("click", () => {
        numberButtonPress(button.textContent);
    });
});
