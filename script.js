let innerHtml = '';

function operate(string){
    let operand1 = '', operand2 = '';
    let operator;
    let ind = 0;
    let i;
    for(i = 0; i < string.length; i++){
        let item = string.charAt(i);
        if(item === '+' || item === '-' || item ==='x' || item === '÷'){
            ind = i;
            break;
        }
    }
    for(i = 0; i < ind; i++){
        operand1 += string.charAt(i);
    }
    if(operand1){
        operand1 = parseFloat(operand1);
    }
    for(i = ind; i < string.length; i++){
        let temp = string.charAt(i);
        if(temp >= '0' && temp <= '9'){
            operand2 += temp;
        }
        else{
            if(operator){
                operand2 = parseFloat(operand2);
                if(operator === '+')
                    operand1 = add(operand1, operand2);
                else if(operator === '-')
                    operand1 = subtract(operand1, operand2);
                else if(operator === 'x')
                    operand1 = multiply(operand1, operand2);
                else{
                    if(operand2 === 0)
                        return 'Error';
                    operand1 = divide(operand1, operand2);
                }
            }
            operator = temp;
            operand2 = '';
        }
    }
    if(operator){
        operand2 = parseFloat(operand2);
        if(operator === '+')
            operand1 = add(operand1, operand2);
        else if(operator === '-')
            operand1 = subtract(operand1, operand2);
        else if(operator === 'x')
            operand1 = multiply(operand1, operand2);
        else{
            if(operand2 === 0)
                return 'Error';
            operand1 = divide(operand1, operand2);
        }
    }

    if(operand1){
        if(operand1 % 1 !== 0 && operand1.toString().split('.')[1].length > 6)
            operand1 = operand1.toFixed(6);
        return operand1;
    }
    return 'Error';
}



// Example mathematical operations
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return b === 0 ? 'Error' : a / b;
}

document.querySelectorAll('button').forEach((item) => {
    item.addEventListener("click", () => {
        if(item.innerHTML === '='){
            innerHtml = operate(innerHtml);
            document.querySelector('.display').innerHTML = innerHtml;
        }
        else if(item.innerHTML === 'Clear'){
            innerHtml = '';
            document.querySelector('.display').innerHTML = '';
        }
        else{
            innerHtml += item.innerHTML;
            document.querySelector('.display').innerHTML = innerHtml;
        }
    })
})