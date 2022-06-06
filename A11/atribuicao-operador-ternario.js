var numero1 = 10;
var numero2 = 30;

console.log(numero1 += numero2);
console.log(numero1 -= numero2);
console.log(numero1 *= numero2);

var idade = 20;
var naoPossuiDiabetes = false;

var podeBeber;
podeBeber = (idade >= 18 && naoPossuiDiabetes) ? 'pode beber' : 'nao pode beber'

console.log(podeBeber);

var possuiFaculdade = true;

if(possuiFaculdade)
    console.log('possui faculdade');
else
    console.log('nao possui faculdade');


var possuiCarro = true;
var possuiCasa = true;
var darCredito;

darCredito = (possuiCarro && possuiCasa);
darCredito = (possuiCarro && possuiCasa) ? 'dar credito' : 'não dar credito';

