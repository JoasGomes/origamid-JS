function createButton(text) {
    function element() {
        const buttonElement = document.createElement('button');
        buttonElement.innerText = text;
        return buttonElement;
    }
    return {
        element: element,
        text: text,
    }
}

const comprarBtn = createButton('comprar');

//privado na factory
function criarPessoa(nome, sobrenome) {
    const nomeCompleto = `${nome} ${sobrenome}`;

    function andar() {
        return `${nomeCompleto} andou`;
    }

    function nadar() {
        return `${nomeCompleto} nadou`;
    }

    return {
        nome,
        sobrenome,
        andar,
        nadar,
    }
}

const pessoa1 = criarPessoa('joas', 'vitor');
console.log(pessoa1.andar());