const carro = {
    marca: 'fiat',
    ano: 2018,
    portas: 4
}

const {marca, ano} = carro;

console.log(marca); //fiat
console.log(ano); //2018

const cliente = {
    nome: 'joas',
    compras: {
        digitais: {
            livros: ['livro 1', 'livro 2'],
            videos: ['video JS', 'video HTML']
        },
        fisicas: {
            cadernos: ['cadernos 1']
        }
    }
    }

console.log(cliente.compras.digitais.livros);
console.log(cliente.compras.digitais.videos);

const {livros, videos} = cliente.compras.digitais;

console.log(livros);

//mudar nome da variável
const cliente2 = {
    nome: 'andre',
    compras:10,
}

const {nome: nomeAndre} = cliente;

//valor padrão
const cliente3 = {
    nome: 'joas',
    compras: 10,
}

const {nome: nomeJoas, email = 'email@gmail.com'} = cliente;
console.log(email);

//arrays
const frutas = ['banana', 'uva', 'manga'];

const primeiraFruta = frutas[0];
const segundaFruta = frutas[1];
const terceiraFruta = frutas[2];

//com destructuring
const [primeira, segunda, terceira] = frutas;

console.log(primeira);
console.log(segunda);
console.log(terceira);

function handleKeyBoard({key, keyCode}) {
    console.log(key, keyCode);
}

document.addEventListener('keyup', handleKeyBoard);