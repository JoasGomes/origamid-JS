const lista = document.querySelector('.animais-lista');

lista.parentElement; // retorna o pai

lista.parentElement.parentElement; //retorna o pai do pai

lista.previousElementSibling; // retorna o elemento acima

lista.nextElementSibling; //retorna o elemento abaixo


lista.children; // HTMLCollection comos filhos

lista.children[0]; // primeiro filho

lista.children[--lista.children.length]; // último filho


lista.querySelectorAll('li'); //todas as li's de lista
lista.querySelector('li:last-child'); // último filho


//node
lista.previousSibling; //node acima

lista.firstChild; //primeiro node child

lista.childNodes; //todos os node child