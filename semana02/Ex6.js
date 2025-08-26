const leia = require('readline-sync');

const listaNumeros = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6];


let numeroProcurado = leia.questionInt('Digite o numero que voce deseja encontrar no array: ');

let posicao = listaNumeros.indexOf(numeroProcurado);

posicao !== -1
    ? console.log(`\n O numero ${numeroProcurado} esta na posicao: ${posicao}`)
    : console.log(`\n O numero ${numeroProcurado} nao foi encontrado!`);
