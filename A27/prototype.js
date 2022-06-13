//prototype é um objeto adicionado a uma função
function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
    this.pular = function() {
        return 'pulou';
    }
}

var obj = {
    nome:'joas',
    idade: 33,
}

Pessoa.prototype.andar = function() {
    return 'pessoa andou';
}

Pessoa.prototype.nadar = function() {
    return 'pessoa nadou';
}

const andre = new Pessoa('andre', 20);

console.log(Pessoa.prototype); //retorna o objeto
console.log(andre.prototype); //undefined

console.log(typeof Pessoa.prototype); //objeto

console.log(andre.andar());
console.log(andre.pular());
