function Carro() {
    this.marca = 'marca';
    this.preco = 0;
}

const honda = new Carro();
honda.marca = 'honda';
honda.andar = function() {
    console.log('andou');
};
honda.preco = 4000;

const fiat = new Carro();
fiat.marca = 'fiat';
fiat.preco = 3000;