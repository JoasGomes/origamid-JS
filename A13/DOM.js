//vai mostrar o link da página...
const href = window.document.location.href;

console.log(href);

//vai selecionar os forms que estiverem na página
//e colocar em uma constante
const h1Selecionado = document.querySelector('form');

//vai selecionar a primeira classe do form selecionado
h1Selecionado.classList[0];


const titulo = document.querySelector('h1');
titulo.innerText; //retorna o texto
titulo.classList; //retorna as classes
titulo.id; //retorna o id
titulo.offsetHeight; //retorna a altura do elemento

//ativa a função callback ao click
titulo.addEventListener('click',callback);

//seleciona a linguagem atual do navegador
const linguagemDoNavegador = window.navigator.language;

//seleciona a largura da página
const larguraDaPagina = window.innerWidth;



