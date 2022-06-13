function Pessoa(nome, sobrenome, idade) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
    this.nomeCompleto = function() {
        return this.nome + ' ' + this.sobrenome;
    }
}

Pessoa.prototype.todosOsDados = function() {
    return `${this.nome} ${this.sobrenome} tem ${this.idade} anos`;
}

const joas = new Pessoa('joas', 'vitor', 20);
console.log(joas.nomeCompleto());
console.log(joas.todosOsDados());

const li = document.querySelector('li');

li; //HTMLLIElement
li.click; //function
li.innerText; //string
li.value; //number
li.hidden; //boolean
li.offsetLeft; //number
li.click(); //undefined

li.hidden.constructor.name; //string