const pais = 'brasil';
const cidade = new String('garanhuns');

const listaAnimais = ['gato', 'rato', 'coelho'];

const lista = document.querySelectorAll('li');

//transforma em array
const listaArray1 = Array.prototype.slice.call(lista);
const listaArray2 = Array.from(lista);

Object.getOwnPropertyNames(Array); //retorna as propriedades de Array
Object.getOwnPropertyNames(Array.prototype);

const Carro = {
    marca: 'ford',
    preco: 20000,
    andar() {
        return true;
    }
}
Carro.andar(); //true
Carro.marca.toUpperCase(); //maiusculo
Carro.marca.charAt; //função
Carro.marca.charAt(0) //string da posição 0 