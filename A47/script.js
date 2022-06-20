/* fetch('./dados.json')
.then(r => r.json())
.then(json => {
    json.forEach(materia => {
        console.log(materia.aula);
    })
}) */

//JSON.parse
fetch('./dados.json')
.then(r => r.text())
.then(jasonText => {
    const jsonFinal = JSON.parse(jasonText);
    console.log(jsonFinal);
})

//JSON.stringfy
const configuracoes = {
    player: "google",
    tempo: 25.5,
    aula: "2 javascript",
}

localStorage.config = JSON.stringify(configuracoes);
console.log(JSON.parse(localStorage.config));

/* const stringConfig = JSON.stringify(configuracoes);
console.log(stringConfig); */