//vereficar se é truthy
function isTruthy(dado) {
    return !!dado;
}

//perimetro do quadrado
function perimetroQuadrado(lado) {
    return lado * 4;
}

//nome completo
function nomeCompleto(nome, sobrenome) {
    return nome + ' ' + sobrenome;
}

//se um número é par
function isEven(numero) {
    var modulo = numero % 2;
    if(modulo === 0) {
        return true;
    } else {
        return false;
    }
}

//tipo de dado
function tipoDado(dado) {
    return typeof dado;
}