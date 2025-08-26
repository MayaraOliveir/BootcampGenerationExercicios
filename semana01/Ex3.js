const leia = require('readline-sync');

let SalarioBruto = leia.questionInt('Digite o seu Salario Bruto: ');
console.log(`O seu Salario Bruto: ${SalarioBruto}`);

let AddNoturno = leia.questionInt('Digite o seu Adicional Noturno: ');
console.log(`O seu Adicional Noturno: ${AddNoturno}`);

let HoraExtra = leia.questionInt('Digite o valor por Hora Extra: ');
console.log(`O Valor da Hora Extra: ${HoraExtra}`);


let Descontos = leia.questionInt('Digite o valor do Desconto: ');
console.log(`O Valor do Desconto: ${Descontos}`);

let SalarioLiquido  = SalarioBruto + AddNoturno + (HoraExtra * 5) - Descontos;

console.log(`O seu Salario Liquido: ${SalarioLiquido}`);


