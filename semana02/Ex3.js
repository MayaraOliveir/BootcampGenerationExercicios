const leia = require('readline-sync');

let contadorPar = 0;
let contadorImpa = 0;

for (let i = 0; i < 10; i++){
    let numeros = leia.questionInt(`Digite o ${i+1} numero: `);
    if(numeros % 2 === 0) {
        contadorPar++;
    }
    else {
        contadorImpa++;
    }
}

console.log(`Total de numeros pares: ${contadorPar}`);

console.log(`Total de numeros impares: ${contadorImpa}`);

