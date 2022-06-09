const menu = document.querySelector('.menu');

menu.className; //string

menu.classList; //lista de classes

menu.classList.add('ativo'); //adiciona ativo

menu.classList.add('ativo', 'mobile'); //adicona 2

menu.classList.remove('ativo'); //remove classe

menu.classList.toggle('ativo'); //adiciona/remove a classe

menu.classList.contains('ativo'); //true ou false

menu.classList.replace('ativo', 'inativo'); //troca um pelo outro


//adicionar na string uma nova classe (sem usar .add)
menu.className = menu.className + ' novaClasse';

menu.className += ' novaClasseModo2';

//mostra os atributos do que foi selecionado
const animais = document.querySelector('.animais');

//mostra o primeiro atributo de animais
console.log(animais.attributes[0]);

//getAttribute e setAttribute
const img = document.querySelector('img');

img.getAttribute('src'); //busca o valor do src

img.setAttribute('alt', 'texto'); //muda de alt para texto

img.hasAttribute('id'); //true ou false

img.removeAttribute('alt'); //remove o alt

img.hasAttribute(); //true ou false se tem algo
