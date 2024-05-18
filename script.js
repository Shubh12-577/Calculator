let displayElement = document.getElementById('display');
let displayValue = '';

function appendNumber(number) {
    if (displayValue === '0') {
        displayValue = number.toString();
    } else {
        displayValue += number.toString();
    }
    updateDisplay();
}

function appendOperator(operator) {
    if (displayValue !== '') {
        displayValue += ` ${operator} `;
    }
    updateDisplay();
}

function deleteNumber() {
    displayValue = displayValue.trim();
    if (displayValue.endsWith(' ')) {
        displayValue = displayValue.slice(0, -3);
    } else {
        displayValue = displayValue.slice(0, -1);
    }
    if (displayValue === '') {
        displayValue = '0';
    }
    updateDisplay();
}

function resetCalculator() {
    displayValue = '0';
    updateDisplay();
}

function calculateResult() {
    try {
        displayValue = eval(displayValue.replace(/x/g, '*')).toString();
    } catch {
        displayValue = 'Error';
    }
    updateDisplay();
}

function updateDisplay() {
    displayElement.textContent = displayValue;
}

resetCalculator();
