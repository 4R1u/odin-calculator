let clearInput = true;
const upperLine = document.querySelector(".upper-display");
const lowerLine = document.querySelector(".lower-display");
let leftOperand = "", rightOperand = "";
let operator = "";
let result = "0";


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
    return dividend / divisor;
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
    }
}

function numberButtonPress(number) {
    if (clearInput) {
        if (number == "0" && lowerLine.textContent == "0") {
            return;
        }
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

function evaluateCurrentExpression() {
    if (operator) {
        return operate(operator, +leftOperand, +rightOperand);
    }
    else {
        return rightOperand;
    }
}

function operatorButtonPress(pressedOperator) {
    if (pressedOperator == "Del") {
        if (clearInput) {
            upperLine.textContent = 
            leftOperand = 
            operator = "";
            rightOperand = lowerLine.textContent;
            return;
        }
        rightOperand = rightOperand.slice(0, -1);
        if (rightOperand == "") {
            rightOperand = "0";
        }
        lowerLine.textContent = rightOperand;
        return;
    }
    else if (pressedOperator == "Clear") {
        leftOperand =
        upperLine.textContent =
        operator =
        "";
        result = 0;
        rightOperand =
        clearInput = true;
        lowerLine.textContent = 0;
        return;
    }
    else if (pressedOperator == "=") {
        lowerLine.textContent = result = evaluateCurrentExpression();
        upperLine.textContent = `${leftOperand}${operator}${rightOperand}`;
        clearInput = true;
        leftOperand = `${result}`;
        return;
    }
    if (clearInput) {
        operator = pressedOperator;
        upperLine.textContent = `${leftOperand || lowerLine.textContent}${operator}`;
    }
    else {
        result = evaluateCurrentExpression();
        operator = pressedOperator;
        upperLine.textContent = `${result}${operator}`;
        leftOperand = rightOperand =
        lowerLine.textContent =
        result;
        clearInput = true;
    }
}

document.querySelectorAll(".op-buttons button")
.forEach((button) => {
    button.addEventListener("click", () => {
        operatorButtonPress(button.textContent);
    });
});
