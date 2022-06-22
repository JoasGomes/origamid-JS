function somar(a,b) {
    return a + b;
}

//function expression
const somar2 = function(a, b) {
    return a + b;
}

console.log(somar(4,5));

//com arrow
const somaArrow = (a, b) => a + b;

console.log(somar2(4, 5));
console.log(somaArrow(7, 8));

//exercicios
const priceNumber = n => +n.replace('R$', '').replace(',', '.');
console.log(priceNumber('R$ 99,99'));

(function() {
    const nome = 'andré';
    console.log(nome);
})();

const active = calback => calback();

active(function() {
    console.log('teste de active');
})



