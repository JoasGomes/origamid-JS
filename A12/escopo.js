var carro = 'fusca';

function mostrarCarro() {
    console.log(carro);
}

mostrarCarro(); //fusca no console
console.log(carro);

if(true) {
    let mes = 'junho';
    console.log(mes);
}
//não vaza como o var
//console.log(mes);

{
    var carro2 = 'fusion';
    const ano = 2022;
}

console.log(carro2); //carro
//console.log(ano); //erro

const mes2 = 'dezembro';

//mes2 = 'janeiro' -> erro
//const semana; -> erro

const data = {
    dia: 28,
    mes: 'dezembro',
    ano: 2022,
}

data.dia = 29; // funciona
console.log(data.dia);

let ano1;
ano1 = 2018;
ano1++
console.log(ano1);
