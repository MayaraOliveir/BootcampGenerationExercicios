const leia = require('readline-sync');

let salario = leia.questionInt('Digite o seu Salario: ');
console.log(`O seu Salario: ${salario}`);

let abono = leia.questionInt('Digite o seu Abono: ');
console.log(`O seu Abono: ${abono}`);

let NovoSalario = salario + abono;
console.log(`Seu Salário atualizado: ${NovoSalario}`);

