function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    if (num2 === 0) {
        return 'Error: Cannot divide by zero';
    }
    return num1 / num2;
}

function getInputValues() {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    return [number1, number2];
}

function displayResult(value) {
    document.getElementById('calculation-result').textContent = value;
}

document.getElementById('add').addEventListener('click', () => {
    const [a, b] = getInputValues();
    displayResult(add(a, b));
});

document.getElementById('subtract').addEventListener('click', () => {
    const [a, b] = getInputValues();
    displayResult(subtract(a, b));
});

document.getElementById('multiply').addEventListener('click', () => {
    const [a, b] = getInputValues();
    displayResult(multiply(a, b));
});

document.getElementById('divide').addEventListener('click', () => {
    const [a, b] = getInputValues();
    displayResult(divide(a, b));
});
