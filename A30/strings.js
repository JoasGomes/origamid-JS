const comida = 'pizza';
const agua = new String('agua');
const frase = 'a melhor comida';

console.log(comida.length); //5
console.log(frase.length); //15

console.log(comida[0]); //p
console.log(frase[0]); //a
console.log(frase[frase.length - 1]); //a

console.log(frase.charAt(0)); //a


const frase2 = 'a melhor linguagem é ';
const linguagem = 'javascript';

const fraseFinal = frase2.concat(linguagem, '!!', 'eita');
console.log(fraseFinal);


const fruta = 'banana';
const listaFrutas = 'melancia, banana, laranja';

listaFrutas.includes(fruta); //true
fruta.includes(listaFrutas); //false


const transacao1 = 'deposito de cliente';
const transacao2 = 'deposito de fornecedor';
const transacao3 = 'taxa de camisas';

transacao1.slice(0, 3); //dep
transacao2.slice(0, 3); //dep
transacao3.slice(0, 3); //tax

transacao1.slice(12); //cliente
transacao1.slice(-4); //ente
transacao1.slice(3, 6); //osi


const carro = 'fusion';

carro.indexOf('f'); //0
carro.indexOf('u'); //1

carro.lastIndexOf('n'); //5
carro.lastIndexOf('o'); //4
