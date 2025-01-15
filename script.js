let innerHtml = '';
let c = 0;

function operate(string) {
    let operand1 = '';
    let operand2 = '';
    let operator = null;

    if(string.charAt(0) === 'E')
        return 'Error';

    for (let i = 0; i < string.length; i++) {
        let char = string.charAt(i);

        if (char === '+' || char === '-' || char === 'x' || char === '÷') {
            if (!operator) {
                operator = char;
                continue;
            } else {
                const result = compute(parseFloat(operand1), parseFloat(operand2), operator);
                if (result === null) return 'Error'; // Handle division by zero
                operand1 = result;
                operator = char;
                operand2 = '';
                continue;
            }
        }

        if(!operand1)
            return 'Error';

        if (operator === null) {
            operand1 += char;
        } else {
            operand2 += char;
        }
    }

    if (operator) {
        const result = compute(parseFloat(operand1), parseFloat(operand2), operator);
        if (result === null) return 'Error'; // Handle division by zero
        operand1 = result;
    }

    return operand1 % 1 !== 0 ? parseFloat(operand1.toFixed(6)) : operand1;
}

function compute(a, b, operator) {
    if (operator === '+') return a + b;
    if (operator === '-') return a - b;
    if (operator === 'x') return a * b;
    if (operator === '÷') return b === 0 ? NaN : a / b;
    return 'Error';
}

document.querySelectorAll('button').forEach((item) => {
    
    item.addEventListener("click", () => {
        if(item.innerHTML === '.' && c === 0){
            c = 1;
            innerHtml += item.innerHTML;
            document.querySelector('.display').innerHTML = innerHtml;
        }
        else if(item.innerHTML === '⌫'){
            innerHtml = innerHtml.substring(0, innerHtml.length - 1);
            document.querySelector('.display').innerHTML = innerHtml;
        }
        else if(item.innerHTML === '='){
            innerHtml = operate(innerHtml);
            document.querySelector('.display').innerHTML = innerHtml;
        }
        else if(item.innerHTML === 'Clear'){
            innerHtml = '';
            c = 0;
            document.querySelector('.display').innerHTML = '';
        }
        else if(item.innerHTML !== '.'){
            if(item.innerHTML === '+' || item.innerHTML === '-' || item.innerHTML === 'x' || item.innerHTML === '÷')
                c = 0;
            innerHtml += item.innerHTML;
            document.querySelector('.display').innerHTML = innerHtml;
        }
    })
});