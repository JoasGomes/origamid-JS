const img = document.querySelector('img');

//elemento.addEventListener(event, callback, options)

function callBack() {
    console.log('clicou');
}
img.addEventListener('click', callBack);

//propriedades do event
const animaisLista = document.querySelector('.animais-lista');

function executaCallback(event) {
    const currentTarget = event.currentTarget; // this
    const target = event.target; // onde o clique ocorreu
    const type = event.type; // tipo de evento
    const path = event.path;
}

animaisLista.addEventListener('click', executaCallback);

const linkExterno = document.querySelector('a[href^="htpp"]');

function handleLinkExterno(event){
    event.preventDefault();
    console.log('clicou');
}

linkExterno.addEventListener('click', handleLinkExterno);

//diferentes eventos
const h1 = document.querySelector('h1');

function callBack2(event) {
    console.log(event.type, event);
}

h1.addEventListener('click', callBack2);
h1.addEventListener('mouseenter', callBack2);

window.addEventListener('scroll', callBack2);
window.addEventListener('resize', callBack2);
window.addEventListener('keydown', callBack2);

//keyboard
function handleKeyBoard(event) {
    if(event.key === 'a')
        document.body.classList.toggle('azul');
    else if(event.key === 'v')
        document.body.classList.toggle('vermelho');
}

window.addEventListener('keydown', callBack2);

