//setTimeout
function espera(texto) {
    console.log('passou 0');
}

setTimeout(() => {
    console.log('testando');
}, 1000);

for(let i = 0; i < 20; i++) {
    setTimeout(() => {
        console.log(i);
    }, 1000 * i)
}

const btn = document.querySelector('button');

btn.addEventListener('click', handleClick);

function handleClick() {
    setTimeout(() => {
        this.classList.add('active')
    }, 1000)
}

//setInterval
function loop(texto) {
    console.log(texto);
}

setInterval(loop, 1000, 'passou 1s');

//loop a cada segundo
let i = 0;
const meuLoop = setInterval(() => {
    console.log(i++);
    if(i > 20) {
        clearInterval(meuLoop);
    }
}, 1000);

//exercicios
function mudarClasse() {
    document.body.classList.toggle('active');
}

setInterval(mudarClasse, 2000);

const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const tempo = document.querySelector('.tempo');

iniciar.addEventListener('click', iniciarTempo);
pausar.addEventListener('click', pausarTempo);
pausar.addEventListener('dblclick', resetarTempo);

let i2 = 0;
let timer;

function iniciarTempo() {
    timer = setInterval(() => {
        tempo.innerText = i++;
    }, 100);
    iniciar.setAttribute('disabled', '');
}

function pausarTempo() {
    clearInterval(timer);
    iniciar.removeAttribute('disabled');
}

function resetarTempo() {
    tempo.innerText = 0;
    i = 0;
}