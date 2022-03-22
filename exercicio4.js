var paisA = 80000;
var crescA = 0.03;

var paisB = 200000;
var crescB = 0.015;

var anos = 0;
while(paisB > paisA){
    paisA = paisA + (paisA * crescA);
    paisB = paisB + (paisB * crescB);
    //
    anos ++;
}

console.log('País A precisou de ' + anos + ' anos para ultrapassar o país B.');