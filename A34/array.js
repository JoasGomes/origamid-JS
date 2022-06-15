const carros = new Array('ford', 'fiat', 'honda');

carros[2] = 'ferrari';
carros[3] = 'kia';
carros[20] = 'jaguar';

console.log(carros);
console.log(carros.length); //21

const instrumentos = ['guitarra', 'violão', 'baixo'];
instrumentos.sort(); //organiza em ordem alfabética
instrumentos.reverse(); //inverte o array

console.log(instrumentos);

const carros2 = ['ford', 'fiat', 'vw'];
carros2.unshift('kia'); //adiciona no começo
carros2.push('jaguar'); //adicona no final

console.log(carros2);

const cores = ['vermelho', 'azul', 'verde'];
cores.shift(); //remove do começo
cores.pop(); //remove do fim

console.log(cores);

const carros3 = ['ford', 'fiat', 'vw', 'kia', 'jaguar'];
carros3.splice(2, 0, 'fusca'); //apartir do 2 adiciona fusca e nao remove nada

console.log(carros3);

//preeche com banana da posição 0 a 1
console.log(['item1','item2','item3'].fill('banana', 0, 1));

const transporte1 = ['barco', 'aviao'];
const transporte2 = ['carro', 'moto'];
const transportes = transporte1.concat(transporte2); //concatena os 2

const linguagens = ['html', 'css', 'js', 'php', 'python', 'js'];

linguagens.includes('css'); //true se existir no array
linguagens.includes('ruby'); //falso
linguagens.indexOf('python'); //posição no array 4
linguagens.lastIndexOf('js'); //posição do último js com array

let htmlString = '<h2>titulo principal</h2>';
htmlString = htmlString.split('h2');
htmlString = htmlString.join('h1');

console.log(htmlString);

const linguagens2 = ['html', 'css', 'js', 'php', 'python'];

console.log(linguagens2.slice(2));