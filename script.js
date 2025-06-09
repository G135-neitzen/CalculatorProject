const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');
const zero = document.getElementById('zero');
const deleteOneButton = document.getElementById('deleteOne');
const deleteAllButton = document.getElementById('deleteAll');
const decimalButton = document.getElementById('decimal');

const addButton = document.getElementById('add');
const subtractButton = document.getElementById('subtract');
const multiplyButton = document.getElementById('multiply');
const divideButton = document.getElementById('divide');
const equalsButton = document.getElementById('result');

function display() {

    const output = document.getElementById('display');
    const buttons = document.querySelectorAll('#whole button');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            if (output.innerText.length >0 &&
                (button.id === addButton.id || button.id === subtractButton.id ||
                 button.id === multiplyButton.id || button.id === divideButton.id)) {
                // Prevent adding multiple operators in a row
                const lastChar = output.innerText.slice(-1);
                if (['+', '-', '*', '/'].includes(lastChar)) {
                    output.innerText = output.innerText.slice(0, -1) + button.innerText;
                    return;
                }
            }
            if (button.id === deleteAllButton.id) {
                output.innerText = '';
            }
            else if (button.id === deleteOneButton.id) {
                output.innerText = output.innerText.slice(0, -1);
            }
            else if (button.id === one.id) {
                output.innerText += '1';
            }
            else if (button.id === two.id) {
                output.innerText +='2';
            }
            else if (button.id === three.id) {
                output.innerText += '3';
            }
            else if (button.id === four.id) {
                output.innerText += '4';
            }
            else if (button.id === five.id) {
                output.innerText += '5';
            }
            else if (button.id === six.id) {
                output.innerText += '6';
            }
            else if (button.id === seven.id) {
                output.innerText += '7';
            }
            else if (button.id === eight.id) {
                output.innerText += '8';
            }
            else if (button.id === nine.id) {
                output.innerText += '9';
            }
            else if (button.id === zero.id) {
                output.innerText += '0';
            }
            else if (button.id === decimalButton.id) {
                if (!output.innerText.includes('.')) {
                    output.innerText += '.';
                }
            }
            else if (button.id === addButton.id) {
                output.innerText += '+';
            }
            else if (button.id === subtractButton.id) {
                output.innerText += '-';
            }
            else if (button.id === multiplyButton.id) {
                output.innerText += '*';
            }
            else if (button.id === divideButton.id) {
                output.innerText += '/';
            }
        });
    });
    equalsButton.addEventListener('click', () => {
        const input = output.innerText;
        const numbers = input.split(/[\+\-\*\/]/).map(Number);
        const operators = input.match(/[\+\-\*\/]/g);

        if (numbers.length === 2 && operators) {
            const a = numbers[0];
            const b = numbers[1];
            const operatorSymbol = operators[0];

            switch (operatorSymbol) {
                case '+':
                    output.innerText = operatorAdd(a, b);
                    break;
                case '-':
                    output.innerText = operatorSubtract(a, b);
                    break;
                case '*':
                    output.innerText = operatorMultiply(a, b);
                    break;
                case '/':
                    output.innerText = operatorDivide(a, b);
                    break;
                default:
                    output.innerText = 'Error';
            }
        } else {
            output.innerText = 'Error';
        }
    });

}

function operatorAdd(a, b) {
    return a + b;
}   

function operatorSubtract(a, b) {
    return a - b;
}

function operatorMultiply(a, b) {
    return a * b;
}

function operatorDivide(a, b) {
    if (b === 0) {
        return 'Error: Division by zero';
    }
    return a / b;
}
display();
