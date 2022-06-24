const regexp = /\w+/gi;

regexp.flags; // 'gi'
regexp.global; // true
regexp.ignoreCase; // true
regexp.multiline; // false
regexp.source; // '\w+'

//com construtor
const regexpObj1 = new RegExp('\\w+', 'gi');
const regexpObj2 = new RegExp(/\w+/, 'gi');

'javascript liguagem 101'.replace(regexpObj1, 'x');
// x x x

//.test
const regexp1 = /java/g;

const frase = 'javascript e java linguagem 101';

/* console.log(regexp1.lastIndex); //0
console.log(regexp1.test(frase)); // true
console.log(regexp1.lastIndex); //4
console.log(regexp1.test(frase)); // true
console.log(regexp1.lastIndex); //17
console.log(regexp1.test(frase)); // false
console.log(regexp1.lastIndex); //0 */

let i = 1;
while(regexp1.test(frase)) {
    console.log(i++, regexp1.lastIndex);
}

//.exec
const frase1 = 'javascript, typescript, coffescript, java';

const regexpExec = /script/g;

console.log(regexpExec(frase1));

//.replace
const tags = `
<ul>
    <li>item 1</li>
    <li>item 2</li>
</ul>
`;

const regexpReplace = /ul/g;

const resultado = tags.replace(regexpReplace, 'div');
console.log(resultado);
