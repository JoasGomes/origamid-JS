// var, let, const
var nome = 'joás';
var idade = 20;
var curso = 'ciência da computação';

console.log(nome,idade,curso);

var preco = 25;
var totalComprado = 5;
var totalPreco = totalComprado * preco;

console.log(totalPreco);

var semDefinir;
console.log(semDefinir);
//undefined

//hosting
var comida;
console.log(comida); //undefined
comida = 'pizza';
console.log(comida)

//var e let podem modificar
var time = 'vasco';
time = 'flamengo'
console.log(time)

let cor = 'azul';
cor = 'vermelho'
console.log(cor)

//const não muda
const carro = 'ford';
//carro = 'bmw' = erro
console.log(carro)

