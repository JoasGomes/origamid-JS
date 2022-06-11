const lista = document.querySelector('.animais-lista');

const contato = document.querySelector('.contato');

const titulo = contato.querySelector('.titulo');

const mapa = document.querySelector('.mapa');


contato.appendChild(lista); //move a lista para o final de contato
contato.insertBefore(lista,titulo); //insere a lista antes de titulo
contato.removeChild(titulo); //remove titulo de contato
contato.replaceChild(lista, titulo); //substitui titulo por lista


const novoH1 = document.createElement('h1'); //cria novo elemento
novoH1.innerText = 'novo titulo criado';
novoH1.classList.add('titulo');

mapa.appendChild(novoH1);

const cloneTitulo = titulo.cloneNode(true); //clona elemento

//exercicios
const menu = document.querySelector('.menu');
const copy = document.querySelector('.copy');

const cloneMenu = menu.cloneNode(true);

copy.appendChild(cloneMenu);


