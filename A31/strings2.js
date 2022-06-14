const frase = 'ta';

frase.repeat(5); //tatatatata

let listaItens = 'camisas bones calças bermudas';

listaItens = listaItens.replace('camisas', 'shirts');
console.log(listaItens);

const htmlText = '<div>o melhor item</div><div>a melhor lista</div>';
const htmlArray = htmlText.split('div');
const novoHtml = htmlArray.join('section');

console.log(htmlText);
console.log(htmlArray);
console.log(novoHtml);

const sexo1 = 'feminino';
const sexo2 = 'FEMININO';

sexo1.toUpperCase(); //FEMININO
sexo2.toLowerCase(); //feminino

const preco = '  R$29,50  '
preco.trim(); // 'R$29,50'