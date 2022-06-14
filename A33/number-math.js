console.log(Number.isNaN(NaN)); //true
console.log(Number.isNaN(1 + 2)); //false

console.log(Number.isInteger(20)); //true
console.log(Number.isInteger(20.9)); //false

console.log(Number.parseFloat('99.50')); //99.5
console.log(Number.parseFloat('200.5 reais')); //200.5
console.log(Number.parseInt('200.5 reais')); //200

const preco = 2.99;
preco.toFixed(); //3

const carro = 1000.455;
preco.toFixed(2); //1000.46

const preco2 = 1499.49;
preco.toFixed(); // 1499


Math.abs(-5.5); //5.5
Math.ceil(4.888); //5
Math.ceil(4.3); //5
Math.floor(4.888); //4
Math.floor(4.3); //4
Math.round(4.888); //5
Math.round(4.3); //4

Math.max(5,3,6,8,9); //9
Math.min(5,3,6,8,9); //3

Math.random(); //0.xxx
Math.floor(Math.random() * 100); //entre 0 e 100
Math.floor(Math.random() * 500); //entre 0 e 500