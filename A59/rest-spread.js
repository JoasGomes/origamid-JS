function perimetroForma(lado, totalLados = 4) {
    return lado * totalLados;
}

console.log(perimetroForma(10, 5)); //50
console.log(perimetroForma(10)); //40

//rest
function perimetroForma2(...listaArgs) {
    console.log(listaArgs);
    listaArgs.forEach(item => console.log(item));
}

perimetroForma2(10, 20, 30, 'oi', 'teste'); 

function anunciaGanhadores(premio, ...ganhadores) {
    ganhadores.forEach(ganhador => {
        console.log(ganhador + ' ganhou um ' + premio);
    });
}

anunciaGanhadores('carro', 'joao', 'pedro', 'maria', 'marta');

//spread
const frutas = ['banana', 'uva', 'abacaxi'];
const legumes = ['cenoura', 'batata'];

const comidas = [...frutas, 'pizza', 'lasanha', ...legumes];
console.log(comidas);

const listaNumeros = [1,13,12,34,56,67,43,22];
const numeroMaximoSpread = Math.max(...listaNumeros);
console.log(numeroMaximoSpread);

//criar um array
const btns = document.querySelectorAll('button');
const btnsArray = [...btns];
