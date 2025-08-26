const leia = require('readline-sync');

let numerosPositivos = 0;
let numeros;
 

do {
    numeros = leia.questionInt('Digite um numero: ');
    if (numeros > 0) {
        numerosPositivos += numeros;
    }
}
while (numeros !== 0);


    console.log(`\n A soma dos numeros positivos foi: ${numerosPositivos}`);