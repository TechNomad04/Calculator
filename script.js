let operand1, operator, operand2;

function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a / b;
}

function operate(a, operator, b){
    if(operator === '+')
        add(a, b);
    else if (operator === '-')
        subtract(a, b);
    else if(operator === '*')
        multiply(a, b);
    else if(operator === '/')
        divide(a, b);
}