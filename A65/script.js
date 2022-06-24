import ValidarCPF from "./validar-cpf.js";

const cpf = document.querySelector('#cpf');
const validarCpf = new ValidarCPF(cpf);

console.log(validarCpf.fomatar('434-433.434.44'));