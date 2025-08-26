const leia = require('readline-sync');

let numero1 = leia.questionInt('Digite o Primeiro Numero: ');
let numero2 = leia.questionInt('Digite o Segundo Numero:');

if (numero1 >= numero2) {
    console.log('Intrvalo inválido!');
}
else {
    console.log(`No intervalo entre ${numero1} e ${numero2}:`);

    for (let i = numero1; i <= numero2; i++){
        if (i % 3 === 0 && i % 5 == 0) {
            console.log(`${i} é um múltiplo de 3 e 5`);
        }
    }

}
