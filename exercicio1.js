var input = require('fs').readFileSync('entrada.txt', 'utf-8');
var lines = input.split('\n');

var a = parseInt(lines.shift());
var b = parseInt(lines.shift());
var c = parseInt(lines.shift());

var raizA = Math.sqrt(a);
var raizB = Math.sqrt(b);
var raizC = Math.sqrt(c);

console.log('Raíz de '+ a + ' é igual a ' + raizA );
console.log('Raiz de '+ b + ' é igual a ' + raizB );
console.log('Raiz de '+ c + ' é igual a ' + raizC );