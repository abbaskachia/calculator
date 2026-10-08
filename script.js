let currentNumber = "";
let previousNumber = "";
let operator = "";
let currentDisplay = document.getElementById("current");
let previousDisplay = document.getElementById("previous");
function addNumber(number) {
    if (number === "." && currentNumber.includes(".")) {
        return;
    }
    currentNumber = currentNumber + number;
    currentDisplay.innerText = currentNumber;
}
function chooseOperator(selectedOperator) {
    if (currentNumber === "") {
        return;
    }
    previousNumber = currentNumber;
    operator = selectedOperator;
    currentNumber = "";
    previousDisplay.innerText =
        previousNumber + " " + operator;
}
function calculate() {
    if (currentNumber === "" || previousNumber === "") {
        return;
    }
    let number1 = Number(previousNumber);
    let number2 = Number(currentNumber);
    let answer;
    if (operator === "+") {
        answer = number1 + number2;
    }
    if (operator === "-") {
        answer = number1 - number2;
    }
    if (operator === "*") {
        answer = number1 * number2;
    }
    if (operator === "/") {
        answer = number1 / number2;
    }
    currentNumber = answer;
    previousNumber = "";
    operator = "";
    previousDisplay.innerText = "";
    currentDisplay.innerText = answer;
}
function clearDisplay() {
    currentNumber = "";
    previousNumber = "";
    operator = "";
    currentDisplay.innerText = "0";
    previousDisplay.innerText = "";
}
function deleteNumber() {
    currentNumber = currentNumber.slice(0, -1);
    if (currentNumber === "") {
        currentDisplay.innerText = "0";
    }
    else {
        currentDisplay.innerText = currentNumber;
    }
}