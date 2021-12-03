'use strict'

const num1 = prompt('Введите первое число')
const math = prompt('Введите +,-,/ или *')
const num2 = prompt('Введите второе число')

if ((num1 === null) || (num1 === '') || (num1 === undefined)) {
    console.log('Отсутствует первое число');
}
else if ((num2 === null) || (num2 === '') || (num2 === undefined)) {
    console.log('Отсутсвует второе число');
}
else if ((math === null) || (math === '') || (math === undefined)) {
    console.log('Отсутствует знак выполняемой операции');
}
else if (isNaN(Number(num1)) || isNaN(Number(num2))) {
    console.log('Проверьте правильность введенных данных');
}

else if ((math !== '+') && (math !== '-') && (math !== '/') && (math !== '*')) {
    console.log('Невозможно выполнить данную операцию');
}
else{
    const num3 = Number(num1);
    const num4 = Number(num2);
    switch(math) {
        case '+': console.log(num3 + num4);
        break;
        case '-': console.log(num3 - num4);
        break;
        case '/': {
            if (num2 === '0') {
                console.log('Нельзя делить на ноль')
            }
            else  {
                console.log(num3 / num4);
            }
            break;
        }
        case '*': console.log(num3 * num4);
        break;
    }
}
