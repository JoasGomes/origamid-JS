import ValidarCPF from "./validar-cpf.js";

const cpf = document.querySelector('#cpf');
const validarCpf = new ValidarCPF(cpf).iniciar();
