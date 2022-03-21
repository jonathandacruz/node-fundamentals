var input = require('fs').readFileSync('entrada.txt', 'utf-8');
var lines = input.split('\n');

var nome = lines[2];
var valorHora = lines[0];
var totHorasTrabalhadas = lines[1];


console.log('Seu nome é ' + nome);
console.log('Seu salário bruto é ' + new Intl.NumberFormat().format(valorHora * totHorasTrabalhadas) );
console.log('- IR (11%) ' + ((valorHora * totHorasTrabalhadas) * 0.11 ));
console.log('- INSS (8%) ' +((valorHora * totHorasTrabalhadas) * 0.08));
console.log('- Sindicato (5%) '+((valorHora * totHorasTrabalhadas) * 0.05));
console.log('Total de descontos.... ' + ( (valorHora * totHorasTrabalhadas) * 0.24) );
console.log('Liquido é: ' +( valorHora * totHorasTrabalhadas - ( (valorHora * totHorasTrabalhadas) * 0.24)) );