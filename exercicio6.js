var input = require('fs').readFileSync('entrada.txt', 'utf-8');
var lines = input.split(',');


codigo_mais_gordo = 0
codigo_mais_magro = 0
codigo_mais_alto = 0
codigo_mais_baixo = 0

 
peso_mais_gordo = 0

peso_mais_magro = 1000

altura_mais_alto = 0
altura_mais_baixo = 500  

soma_dos_pesos = 0
soma_das_alturas = 0
quantidade_de_clientes = 0
contador =0;
var codigo, peso, altura;


while(true) {
     
     contador ++;

     codigo   = lines.shift();
     altura = lines.shift();
     peso = lines.shift();

    if(codigo == "0" || !codigo)  {
              break;
    }

 

    quantidade_de_clientes += 1
 

    soma_dos_pesos += peso
    soma_das_alturas += altura

    if (altura > altura_mais_alto) {
        altura_mais_alto = altura;
        codigo_mais_alto = codigo;
    }
    if(altura < altura_mais_baixo) { 
        altura_mais_baixo = altura;
        codigo_mais_baixo = codigo;
    }
    if (peso > peso_mais_gordo) {
        peso_mais_gordo = peso;
        codigo_mais_gordo = codigo;
    }  
    if (peso < peso_mais_magro) {
        peso_mais_magro = peso;
        codigo_mais_magro = codigo;
    }
media_das_alturas = soma_das_alturas / quantidade_de_clientes
media_dos_pesos = soma_dos_pesos / quantidade_de_clientes

 
}
console.log("O cliente mais alto é o que tem o código " + codigo_mais_alto);
console.log('Que possuia a altura de ' + altura_mais_alto );

console.log("O cliente mais baixo é o que tem o código " + codigo_mais_baixo);
console.log('Que possuia a altura de ' + altura_mais_baixo );

console.log("O cliente mais gordo é o que tem o código " + codigo_mais_gordo);
console.log('Que possui o peso de  ' + peso_mais_gordo );

