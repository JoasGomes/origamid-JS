export default class ValidarCPF {
    constructor(element) {
        this.element = element;
    }
    limpar(cpf) {
        return cpf.replace(/\D/g, '');
    }

    construir(cpf) {
        return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4');
    }

    fomatar(cpf) {
        const cpfLimpo = this.limpar(cpf);
        return this.construir(cpfLimpo);
    }
}
