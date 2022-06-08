const imgs = document.querySelectorAll('img');

/* imgs.forEach(function(valorAtual, index, array){
    console.log(valorAtual); //o item atual do loop
    console.log(index); //o número do index
    console.log(array); //o array completo
}) */

//normal
let i = 0;
imgs.forEach(function(){
    console.log(i++)
});

//arrow function
imgs.forEach(() => console.log(i++))

//exercicios

//mostrar paragrafos
const paragra = document.querySelectorAll('p');
paragra.forEach((item) => {
    console.log(item);
})

//mostrar texto dos paragrafos
paragra.forEach((item) => {
    console.log(item.innerText);
})


