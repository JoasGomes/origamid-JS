var nome = 'Joás'

var minusculo = nome.toLocaleLowerCase();
console.log(minusculo);

var altura = 1.8;

altura.toFixed(); // '2'
altura.toString(); // '1.8'


// <a class = "btn"> Clique </a>

var btn = document.querySelector('.btn');

btn.classList.add('azul'); //adiciona uma classe
btn.innerText; // 'clique';
btn.addEventListener('click', function(){
    console.log('clicou');
})


var nome2 = 'andré';
//fixed
//length
//slice
//toLowerCase


var btn2 = document.querySelector('.btn2');
// addEventListener
// appendChild
// id
// innerHtml
// outerHtml