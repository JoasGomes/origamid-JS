// && compara se uma e a outra é verdadeira
var t1 = true && true;
console.log(t1);
var t2 = true && false;
console.log(t2);
var t3 = false && true;
console.log(t3);
var t4 = 'gato' && 'cão';
console.log(t4);
var t5 = (5-5) && (5 + 5);
console.log(t5);
var t6 = 'gato' && false;
console.log(t6);
var t7 = (5 >= 5) && (3 < 6);
console.log(t7);

console.log('');

// || compara se uma ou a outra é verdadeira
var u1 = true || true;
console.log(u1);
var u2 = true || false;
console.log(u2);
var u3 = false || true;
console.log(u3);
var u4 = 'gato' || 'cão';
console.log(u4);
var u5 = (5-5) || (5 + 5);
console.log(u5);
var u6 = 'gato' || false;
console.log(u6);
var u7 = (5 >= 5) || (3 < 6);
console.log(u7);

//switch é usado para caso algo aconteça faça algo
var corFavorita = 'rosa';

switch(corFavorita) {
    case 'azul':
        console.log('é azul');
        break;
    case 'vermelho':
        console.log('é vermelho'); 
        break;   
    case 'amarelo':
        console.log('é amarelo'); 
        break; 
    default:
        console.log('nenhuma cor');
}