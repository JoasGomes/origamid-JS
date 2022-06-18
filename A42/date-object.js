const agora = new Date();
agora;
//semana mês dia ano hh:mm:ss gmt
agora.getDate(); //dia
agora.getDay(); //dia da semana
agora.getMonth(); //numero dia mês
agora.getFullYear(); //ano
agora.getHours(); //hora
agora.getMinutes(); //minutos
agora.getTime(); //desde 1970
agora.getUTCHours() - 3; //brasilia

function transformaDia(tempo) {
    return tempo / (24 * 60 * 60 * 1000);
}

const diasAgora = transformaDia(agora.getTime());
console.log(diasAgora);

const funcionamento = document.querySelector('[data-semana]')
const diasSemana = funcionamento.dataset.semana.split(',').map(Number);
const horarioSemana = funcionamento.dataset.horario.split(',').map(Number);

const dataAgora = new Date();
const diaAgora = dataAgora.getDay();
const horarioAgora = dataAgora.getHours();

const semanaAberto = diasSemana.indexOf(diasAgora) !== -1;
const horarioAberto = (horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1]);

if(semanaAberto && horarioAberto) {
    funcionamento.classList.add('aberto');
}