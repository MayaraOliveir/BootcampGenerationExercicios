const leia = require('readline-sync');

let Nota1 = leia.questionFloat('Digite sua Primeira Nota: ');

let Nota2 = leia.questionFloat('Digite sua Segunda Nota: ');

let Nota3 = leia.questionFloat('Digite sua Terceira Nota: ');

let Nota4 = leia.questionFloat('Digite sua Quarta Nota para obter a Media : ');


let media = (Nota1 + Nota2 + Nota3 + Nota4) / 4; 

console.log(`A media de suas Notas foi : ${media.toFixed(1)}`);