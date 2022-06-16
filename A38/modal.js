const botaoAbrir = document.querySelector('.abrir');
const botaoFechar = document.querySelector('.fechar');
const containerModal = document.querySelector('.container');

if(botaoAbrir && botaoFechar && containerModal) {
    function abrirModal(event) {
        event.preventDefault();
        containerModal.classList.add('ativo');
    }
    
    function fecharModal(event) {
        event.preventDefault();
        containerModal.classList.remove('ativo');
    }
    
    function cliqueFora(event) {
        if(event.target === this)
            fecharModal(event);
    
    }
    
    botaoAbrir.addEventListener('click', abrirModal);
    botaoFechar.addEventListener('click', fecharModal);
    containerModal.addEventListener('click', cliqueFora);
}
