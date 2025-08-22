const leia = require('readline-sync');

let valor1 = leia.questionFloat('Digite o Primeiro Valor: ');

let valor2 = leia.questionFloat ('Digite o Segundo Valor: ');

let valor3 = leia.questionFloat('Digite o Terceiro Valor: ');

let valor4 = leia.questionFloat('Digite o Quarto Valor: ');

let diferenca = (valor1 * valor2) - (valor3 * valor4);

console.log(`Diferença: ${diferenca.toFixed(1)}`);