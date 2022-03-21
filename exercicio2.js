var input = require('fs').readFileSync('entrada.txt', 'utf-8');
var lines = input.split('\n');

var nome = lines[0];
var idade = lines[1];


console.log('Olá ' + nome);
console.log('Você já viveu ' + (idade * 365) + ' dias ');