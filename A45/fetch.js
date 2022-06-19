const doc = fetch('./doc.txt');

doc.then(resolucao => {
   return resolucao.text();
}).then((body) => {
    const conteudo = document.querySelector('.conteudo');
    conteudo.innerText = body;
    console.log(body);
}) 

const css = fetch('./style.css');

css.then(r => {
    return r.text();
}).then(body => {
    const conteudo2 = document.querySelector('.conteudo2');
    const style = document.createElement('style');
    style.innerText = body;
    conteudo2.appendChild(style);
})