function areaQuadrado(lado) {
    return lado * lado;
}

console.log(areaQuadrado(10));

function pi() {
    return 3.14;
}

var total = 5 * pi(); 
console.log(total);

function imc(peso, altura) {
    var imc = peso / (altura * altura);
    return imc;
}

console.log(imc(80,1.8));

function corFavorita(cor) {
    if(cor === 'azul') {
        return 'eu gosto do céu';
    } else if(cor === 'verde') {
        return 'eu gosto de árvores';
    } else {
        return 'eu não gosto de cores';
    }
}

console.log(corFavorita('verde'));

/* addEventListener('click', function(){
    console.log('clicou mane');
}); */

//valores retornados
function terceiraIdade(idade) {
    if(typeof idade !== 'number') {
        return 'por favor preencha um número.';
    } else if(idade >= 60) {
        return true;
    } else {
        return false;
    }
}

console.log(terceiraIdade(60));

function faltaVisitar(paisesVisitados) {
    var totalPaises = 193;
    return `falta visitar ${totalPaises - paisesVisitados} países`;
}

console.log(faltaVisitar(13));

var profissao = 'programador';

function dados() {
    var nome = 'joas';
    var idade = 20;
    function outrosDados() {
        var endereco = 'pernambuco';
        var idade = 19;
        return `${nome},${idade},${endereco}`;
    }

    return outrosDados();
}

console.log(dados());