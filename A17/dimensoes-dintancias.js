const section = document.querySelector('.animais');

section.clientHeight; //height + padding
section.offsetheight; //height + padding + border
section.scrollHeight; //height total mesmo dentro de scroll

section.clientWidth; //width + padding
section.offsetwidth; //width + padding + border
section.scrollWidth; //width total mesmo dentro de scroll

const rect = section.getBoundingClientRect();
rect.height; // height do elemento
rect.width; // width do elemento
rect.top; // distância entre o topo do elemento

//window
window.innerWidth; //width da janela
window.outerWidth; //soma dev tools também

window.innerHeight; //height da janela
window.outerHeight; //soma a barra de endereço

window.pageYOffset; //ve o quanto que o scroll rolou

if(window.innerWidth < 600) {
    console.log('tela menor que 600px');
}

//testando tamanhos de telas
const small = window.matchMedia('(max-width: 600px)').matches;

if(small) {
    console.log('usuário mobile');
} else {
    console.log('usuário desktop');
}
