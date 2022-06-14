const transacoes = [
    {
        descricao: 'taxa do pão',
        valor: 'R$ 39',
    },
    {
        descricao: 'taxa do mercado',
        valor: 'R$ 129',
    },
    {
        descricao: 'recebimento de cliente',
        valor: 'R$ 99',
    },
    {
        descricao: 'taxa do banco',
        valor: 'R$ 129',
    },
    {
        descricao: 'recebimento de taxa de cliente',
        valor: 'R$ 49',
    },
]


let taxaTotal = 0;
let recibimentoTotal = 0;

transacoes.forEach((item) => {
    const numeroLimpo = +item.valor.replace('R$ ', '');

    if(item.descricao.slice(0, 4) === 'taxa') {
        taxaTotal += numeroLimpo;
    } else if(item.descricao.slice(0, 4) === 'rece') {
        recibimentoTotal += numeroLimpo;
    }
})

console.log(taxaTotal);
console.log(recibimentoTotal);


const transportes = 'carro;avião;trem,bicicleta;onibus';

const arrayTransportes = transportes.split(';');
console.log(transportes);


let html = `<ul>
                <li><span>sobre</span></li>
                <li><span>produtos</span></li>
                <li><span>contato</span></li>
            </ul>`;

html = html.split('span').join('a');
console.log(html);

