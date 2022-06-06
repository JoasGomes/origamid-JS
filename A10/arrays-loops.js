var videoGames = ['switch', 'ps4', 'xbox'];
console.log(videoGames[0]);

var retiraUltimoItem = videoGames.pop();
console.log(retiraUltimoItem);

var adicionaUltimoItem = videoGames.push('psp');
console.log(adicionaUltimoItem);

console.log(videoGames);

//loop
for(let i = 0; i<= 10; i++){
    console.log(i);
}

console.log('')

var i = 0;
while (i <= 10) {
    console.log(i);
    i++;
}


var cores = ['vermelho', 'azul', 'roxo', 'verde'];

for(let i = 0; i < cores.length; i++) {
    console.log(cores[i]);
}

var estados = ['rj', 'sp', 'pe', 'bahia'];

for(let i = 0; i < estados.length; i++) {
    console.log(estados[i]);
    if(estados[i] === 'pe'){
        break;
    }
}

var frutas = ['banana', 'maçã', 'uva', 'abacaxi'];
frutas.forEach(function(item, index){
    console.log(item, index);
})


//exercicio
var brasilCampeao = [1959, 1962, 1970, 1994, 2002];

for(let i = 0; i < brasilCampeao.length; i++){
    console.log(`o brasil foi compeão em ${brasilCampeao[i]}`)
}