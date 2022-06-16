// find e findIndex
const frutas = ['banana', 'pera', 'uva', 'maçã'];
const buscaUva = frutas.findIndex((fruta) => {
    return fruta === 'uva';
}); // 2

const numeros = [6, 43, 22, 56, 67, 100];
const buscaMaior45 = numeros.find(X => X > 45); // 56

//filter
const frutas2 = ['banana', '', null, undefined, 'maçã'];
const arrayLimpa = frutas.filter((fruta) => {
    return fruta;
}); // ['banana', 'maçã']

const numeros2 = [6, 48, 56, 212, 7, 63];
const buscaMaior60 = numeros2.filter( x => x > 60); // [212, 63]

//exercicios
const cursos = document.querySelectorAll('.curso');
const arrayCursos = Array.from(cursos);

const objetosCursos = arrayCursos.map((curso) => {
    const titulo = curso.querySelector('h1').innerText;
    const descricao = curso.querySelector('p').innerText;
    const aulas = curso.querySelector('.aulas').innerText;
    const horas = curso.querySelector('.horas').innerText;
    return {
        titulo,
        descricao,
        aulas,
        horas,
    }
})


const instrumentos = ['guitarra', 'baixo', 'bateria'];
const possuiBaixo = instrumentos.some((item) => {
    return item === 'baixo';
}) 


const produtos = [
    {
        item: 'carne',
        preco: 'R$ 25,49',
    },
    {
        item: 'refrigerante',
        preco: 'R$ 25,49',
    },
    {
        item: 'queijo',
        preco: 'R$ 25,49',
    },
    {
        item: 'arroz',
        preco: 'R$ 25,49',
    }
]

const valorTotal = produtos.reduce((acumulador, item) => {
    const precoLimpo = +item.preco.replace('R$ ', '').replace(',', '.');
    return acumulador + precoLimpo;
}, 0);

console.log(valorTotal);
