function numeroAleatorio(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

let calculator = {
    plus: (a, b) => {
        return a + b;
    },
    minus: (a, b) => {
        return a - b;
    },
    multiply: (a, b) => {
        return a * b;
    },
    divide: (a, b) => {
        if (a !== 0 && b !== 0) {
            return a / b;
        } else {
            return 'ERROR!';
        }
    }
}

let numero1 = numeroAleatorio(1, 100);
let numero2 = numeroAleatorio(1, 100);

console.log(numero1 + ' + ' + numero2 + ' = ' + calculator.plus(numero1, numero2));
console.log(numero1 + ' - ' + numero2 + ' = ' + calculator.minus(numero1, numero2));
console.log(numero1 + ' * ' + numero2 + ' = ' + calculator.multiply(numero1, numero2));
console.log(numero1 + ' / ' + numero2 + ' = ' + calculator.divide(numero1, numero2));