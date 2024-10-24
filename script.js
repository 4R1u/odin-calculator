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

function evaluateCurrentExpression() {
    if (operator) {
        let output = operate(operator, +leftOperand, +rightOperand);
        if (output > Math.pow(10, 10)) {
            output = output.toExponential(6);
        }
        return output;
    }
    else {
        leftOperand = "";
        let output = +rightOperand;
        if (output > Math.pow(10, 10)) {
            output = output.toExponential(6);
        }
        return output;
    }
}

function numberButtonPress(number) {
    if (rightOperand.length > 10 && !clearInput) {
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
        if (lowerLine.textContent == "0" && operator == "/") {
            alert("Cookie Monster");
            return;
        }
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
        if (lowerLine.textContent == "0" && operator == "/") {
            alert("Cookie Monster");
            return;
        }
        result = evaluateCurrentExpression();
        operator = pressedOperator;
        upperLine.textContent = `${result}${operator}`;
        leftOperand = rightOperand =
        lowerLine.textContent =
        result;
        clearInput = true;
    }
}





document.querySelectorAll(".num-buttons button")
.forEach((button) => {
    button.addEventListener("click", () => {
        numberButtonPress(button.textContent);
    });
});

document.querySelectorAll(".op-buttons button")
.forEach((button) => {
    button.addEventListener("click", () => {
        operatorButtonPress(button.textContent);
    });
});

document.addEventListener("keydown", (e) => {
    switch (e.key) {
        case "0":
            numberButtonPress("0");
            break;
        case "1":
            numberButtonPress("1");
            break;
        case "2":
            numberButtonPress("2");
            break;
        case "3":
            numberButtonPress("3");
            break;
        case "4":
            numberButtonPress("4");
            break;
        case "5":
            numberButtonPress("5");
            break;
        case "6":
            numberButtonPress("6");
            break;
        case "7":
            numberButtonPress("7");
            break;
        case "8":
            numberButtonPress("8");
            break;
        case "9":
            numberButtonPress("9");
            break;
        case ".":
            numberButtonPress(".");
            break;
        case "_":
            numberButtonPress("Ans");
            break;

        case "Backspace":
            operatorButtonPress("Del");
            break;
        case "Escape":
            operatorButtonPress("Clear");
            break;
        case "*":
            operatorButtonPress("*");
            break;
        case "/":
            operatorButtonPress("/");
            break;
        case "+":
            operatorButtonPress("+");
            break;
        case "-":
            operatorButtonPress("-");
            break;
        case "^":
            operatorButtonPress("^");
            break;
        case "=":
            operatorButtonPress("=");
            break;
        case "Enter":
            operatorButtonPress("=");
            break;
        }
});
