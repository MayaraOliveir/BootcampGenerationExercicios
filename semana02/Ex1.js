const leia = require('readline-sync');

const A = leia.questionInt('Digite o numero A: ');
const B = leia.questionInt('Digite o numero B: ');
const C = leia.questionInt('Digite o numero C: ');

const soma = A + B;
console.log(`${A} + ${B} = ${soma}`);

if (soma > C) {
    console.log('A Soma de A + B e Maior do que C');
} else if (soma < C) {
    console.log('A Soma de A + B e Menor do que C');
} else {
    console.log('A Soma de A + B e Igual a C');
}