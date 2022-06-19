const promessa = new Promise(function(resolve, reject) {
    let condicao = true;
    if(condicao) {
        setTimeout(() => {
            resolve('estou pronto!');
        }, 1000)
        
    } else {
        reject(Error('um erro ocorreu'));
    }
});
const retorno = promessa.then(function(resolucao) {
    console.log(resolucao);
    return 'teste';
}).then(resolucao => {
    console.log(resolucao);
}).catch(rejeitada => {
    console.log(rejeitada);
}).finally(() => {
    console.log('acabou');
})

const login = new Promise((resolve) => {
    setTimeout(() => {
        resolve('usuario logado');
    }, 1000)
})

const dados = new Promise((resolve) => {
    setTimeout(() => {
        resolve('dados carregados');
    }, 1500)
})

const carregouTudo = Promise.all([login, dados]);

carregouTudo.then((resolucao) => {
    console.log(resolucao);
})