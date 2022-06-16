const carro = {
    marca: 'marca',
    rodas: 4,
    acelerar() {
        return this.marca + ' acelerou';
    },

    buzinar() {
        return this.marca + ' buzinou';
    },
}

const honda = Object.create(carro);
honda.marca = 'honda';

const funcaoAutomovel = {
    acelerar() {
        return 'acelerou';
    },

    buzinar() {
        return 'buzinou';
    },
}

const moto = {
    rodas: 2,
    capacete : true,
}

Object.assign(moto, funcaoAutomovel);

console.log(moto);

const moto2 = {}
Object.defineProperties(moto2, {
    rodas: {
        value: 2,
        configurable: false, //impede deletar
        enumerable: true, //torna enumerável
    },
    capacete: {
        value: true,
        configurable: true,
        writable: false, //impede mudança de valor
    }
})

Object.defineProperties(moto2, {
    rodas: {
        get() {
            return this._rodas;
        },

        set(valor) {
            this._rodas = valor * 4 + 'total de rodas';
        }
    }
})