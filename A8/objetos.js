var pessoa = {
    nome: 'joás',
    idade: 20,
}

console.log(pessoa);

var quadrado = {
    lados: 4,
    area: function(lado) {
        return lado * lado;
    },
    perimetro: function(lado) {
        return this.lados * lado;
    },
    cinco() {
        return 5;
    }
}

console.log(quadrado.area(5));
console.log(quadrado.perimetro(5));


//math
console.log(Math.random()); //num aleatório


var menu = {
    width: 800,
    height: 50,
    backgroundColor: '#84E',
    divideHeight() {
        return this.height / 2;
    }
}

menu.backgroundColor = '#000';
menu.color = 'blue';

var bg = menu.backgroundColor;
console.log(menu.color);
console.log(menu.divideHeight());

//exercicios
var dados = {
    nome: 'joás',
    sobrenome: 'gomes',
    idade: 20,
    gênero: 'masculino',
    estado: 'pernambuco',

    nomeCompleto() {
        return `${this.nome} ${this.sobrenome}`;
    }
}

var carro = {
    preco: 10000,
    portas: 4,
    marca: 'audi',
}

carro.preco = 30000;
console.log(carro.preco);