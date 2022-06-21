const button = {
    get element() {
        return this._element;
    },
    set element(tipo) {
        this._element = document.createElement(tipo);
    }
}

button.element = 'button'; //set
button.element; //get (<button></button>) 

const frutas = {
    lista: [],
    set nova(fruta) {
        this.lista.push(fruta);
    }
}

frutas.nova = 'banana';
frutas.nova = 'maçã';

console.log(frutas);

class Button {
    constructor(text, color) {
        this.text = text;
        this.color = color;
    }

    get element() {
        const buttonElement = document.createElement('button');
        buttonElement.innerText = this.text;
        buttonElement.style.color = this.color;
        return buttonElement;
    }
    set element(type) {
        this._elementType = type;
    }
}
const novoBotao = new Button('COMPRAR', 'azul');