const leia = require('readline-sync');

let contadorPessoas = 0;
let contadorPessoasMais50 = 0;

let idade = leia.questionInt('Digite uma idade: ');

while (idade >= 0) {

    if (idade < 21) {
        contadorPessoas++;
}
    if (idade > 50) {
        contadorPessoasMais50++;
    }

    idade = leia.questionInt("Digite uma idade: ");
}

console.log(`Total de pessoas menores de 21 anos: ${contadorPessoas}`);
console.log(`Total de pessoas maiores de 50 anos: ${contadorPessoasMais50}`);