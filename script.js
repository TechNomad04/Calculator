let innerHtml = '';

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

function operate(innerHtml) {
    let i, res = null, num = 0, operator = null;
    for (i = 0; i < innerHtml.length; i++) {
        let c = innerHtml.charAt(i);
        if (c >= '0' && c <= '9') {
            num = num * 10 + parseInt(c);
        } else {
            if (operator) {
                switch (operator) {
                    case '+':
                        res = add(res, num);
                        break;
                    case '-':
                        res = subtract(res, num);
                        break;
                    case 'x':
                        res = multiply(res, num);
                        break;
                    case '÷':
                        res = divide(res, num);
                        break;
                }
            } else {
                res = num;
            }
            operator = c;
            num = 0;
        }
    }
    // Perform the last operation
    if (operator) {
        switch (operator) {
            case '+':
                res = add(res, num);
                break;
            case '-':
                res = subtract(res, num);
                break;
            case 'x':
                res = multiply(res, num);
                break;
            case '÷':
                res = divide(res, num);
                break;
        }
    }
    innerHtml = res;
    document.querySelector('.display').innerHTML = innerHtml;
    return innerHtml;
}


document.querySelectorAll('button').forEach((item) => {
    item.addEventListener("click", () => {
        if(item.innerHTML !== '=' && item.innerHTML !== 'Clear'){
            innerHtml += item.innerHTML;
            document.querySelector('.display').innerHTML = innerHtml;
        }
        else if(item.innerHTML === 'Clear'){
            innerHtml = '';
            document.querySelector('.display').innerHTML = innerHtml;
        }
        else{
            innerHtml = operate(innerHtml);
        }
    })
});