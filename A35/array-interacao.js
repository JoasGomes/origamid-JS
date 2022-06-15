//foreach
const carros = ['ford', 'fiat', 'honda'];

carros.forEach((item, index,array) => {
    console.log(item, index, array);
})

//arrow function
const li = document.querySelectorAll('li');
li.forEach(i => i.classList.add('ativa'));

//map -> igual a foreach,a diferença está no retorno
const carros2 = ['ford', 'fiat', 'honda'];

const novoArray = carros2.map((item,index,array) => {
    return item.toUpperCase();
})

console.log(novoArray);
console.log(carros2);

//reduce
const aulas = [10, 25, 30];

const reduceAulas = aulas.reduce((acumulador, item, index, array) => {
    return acumulador + item;
}, 0)

console.log(reduceAulas);

const numeros = [10, 24, 556, 34, 65];

const maiorNumero = numeros.reduce((anterior, atual) => {
    if(anterior > atual) {
        return anterior;
    } else {
        return atual;
    }
})

console.log(maiorNumero);


const aulas2 = [
    {
        nome: 'html 1',
        min: 15,
    },
    {
        nome: 'html 2',
        min: 10,
    },
    {
        nome: 'css 1',
        min: 20,
    },
    {
        nome: 'css 2',
        min: 25,
    },
]

const listaAulas = aulas.reduce((acumulador, atual, index) => {
    acumulador[index] = atual.nome;
    return acumulador;
}, {});