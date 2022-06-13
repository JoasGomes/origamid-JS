function Carro(marca, precoInicial) {
    const taxa = 1.2;
    const precoFinal = precoInicial * taxa;
    this.marca = marca;
    this.preco = precoFinal;
    console.log(this);
}

const honda = new Carro('honda', 2000);


/* const Dom = {
    seletor: 'li',
    element() {
        return document.querySelector(this.seletor);
    },
    ativar() {
        this.element().classList.add('ativar');
    }
} */

function Dom(seletor) {
    this.element = function() {
        return document.querySelector(seletor);
    },
    this.ativar = function() {
        this.element().classList.add('ativar');
    }
}

const li = new Dom('li');
const ul = new Dom('ul');
const lastChild = new Dom('li:last-child');

/* Dom.ativar();
Dom.seletor = 'ul';
Dom.ativar(); */

//normal
const pesso = {
    nome:'joas',
    idade: 20,
    andar() {
        console.log(this.nome+ ' andou');
    }
}

//constructor
function Pessoa (nome,idade) {
    this.nome = nome
    this.idade = idade;
    this.andar = function() {
        console.log(this.nome + ' andou');
    }
}

const joao = new Pessoa('JOAO', 20);
const maria = new Pessoa('maria', 20);
const bruno = new Pessoa('bruno', 20);