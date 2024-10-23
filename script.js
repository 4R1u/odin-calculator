let clearInput = true;
const upperLine = document.querySelector(".upper-display");
const lowerLine = document.querySelector(".lower-display");
let leftOperand = "", rightOperand = "0";
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
    if (rightOperand.length > 10 && clearInput) {
        return;
    }
    if (clearInput) {
        if (number == "0" && lowerLine.textContent == "0") {
            return;
        }
        if (upperLine.textContent.includes(`=`)) {
            upperLine.textContent = leftOperand = operator = "";
        }
        lowerLine.textContent = rightOperand = "";
        clearInput = false;
    }
    if (number == "Ans") {
        number = result;
        if (result == "0") {
            clearInput = true;
        }
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
        leftOperand = "";
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
        if (rightOperand == "" || rightOperand == "0") {
            rightOperand = "0";
            clearInput = true;
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
        upperLine.textContent = `${leftOperand}${operator}${rightOperand}=`;
        clearInput = true;
        leftOperand = `${result}`;
        return;
    }
    if (clearInput) {
        operator = pressedOperator;
        upperLine.textContent = `${lowerLine.textContent}${operator}`;
        leftOperand = lowerLine.textContent;
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
