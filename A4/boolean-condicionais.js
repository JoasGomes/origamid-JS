var possuiGraduacao = true;
var possuiDoutorado = false;

// if e else testam se um valor é verdadeiro ou falso
// após isso executam uma ação ou no if ou no else
if(possuiGraduacao) {
    console.log('ele tem graduação');
} else {
    console.log('ele não tem graduação');
}

//else if é pra quando queremos testar mais de 1 coisa
if(possuiDoutorado) {
    console.log('ele tem graduação e doutorado');
} else if(possuiGraduacao) {
    console.log('ele não tem doutorado,mas é graduado');
} else {
    console.log('não possui graduação');
}

//operador de negação
if(!possuiGraduacao) {
    console.log('não possui graduação');
} else {
    console.log('possui graduação');
}

//operadores de comparação
var t1 = 10 > 5; //true
console.log(t1)
var t2 = 5 > 10; //false
console.log(t2)
var t3 = 20 < 10; //false
console.log(t3)
var t4 = 10 <= 10; //true
console.log(t4)
var t5 = 10 >= 11; //false
console.log(t5)