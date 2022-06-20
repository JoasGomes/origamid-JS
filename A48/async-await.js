async function puxarDados() {
    try {
        const dadosResponse = await fetch('./dados.json');
        const dadosJSON = await dadosResponse.json();

        console.log(dadosJSON);
        document.body.innerText = dadosJSON[0].aula;
    } catch(erro) {
        console.log(erro);
    }
    
}

puxarDados();