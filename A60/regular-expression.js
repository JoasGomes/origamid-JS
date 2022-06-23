//procura: a
const padraoRegexp = /a/;

const texto = 'javascript';
const novoTexto = texto.replace(padraoRegexp, 'b');
console.log(novoTexto);

//global
const regexp = /a/g
const frase = 'javascript'

const novaFrase = frase.replace(regexp, 'i');
console.log(novaFrase);

//procura: todo PE, Pe, pE e pe
const regexp2 = /Pe/gi;
const frase2 = 'Perdeu perdido';

const novaFrase2 = frase2.replace(regexp2,'bi');
console.log(novaFrase2);

//procura: - ou .
const regexp3 = /[-.]/g;

'111.222-333-44'.replace(regexp3, ''); //11122233344

//busca por itens de a à z
const regexp4 = /[a-z]/g;

'javascript é uma linguagem'.replace(regexp4, '0');
//j000s00000 é 0 000000000

//busca por itens de a à z e A à Z  
const regexp5 = /[a-zA-Z]/g;

'javascript é uma linguagem'.replace(regexp5, '1');
//1111111111 é 1 111111111

//busca todos os numeros de 0 à 9
const regexpNumero = /[0-9]/g;

'123.456.789-33'.replace(regexpNumero, 'x');
//xxx.xxx.xxx-xx

//negar tudo de a-z
const regexpNegacao = /[^a-z]/g