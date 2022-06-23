//selecionar tudo
const regexp = /./g

//escapar caracteres
const regexp2 = /\./g;
const regexpAlternativa = /[.]/g;

'999.222.222.11'.replace(regexp2, '-');
//999-222-222-11

//procura: 4 a's seguidos
const regexp3 = /aaaa/g;
const regexpAlt = /a{4}/g;
const regexpAlt2 = /a+/g;

'vaaaai ali por favor'.replace(regexp3, 'a');
//vai ali por favor

//ultima palavra com caracteres alfanumericos da linha
const regexp4 = /\w+$/gm
//primeira palavra com caracteres alfanumericos da linha
const regexp5 = /^\w+$/gm

//seleciona o 'enter'(linha pulada)
const regexp6 = /\n/gm

//grupo de capturas
const regexpCap = /(\w+)@([\w.]+)/g;

'andre@email.com.br'.replace(regexpCap, '$1@gmail.com');
//andre@gmail.com

//selecionando cada ta mas tbm tata ou tatatata
const regexp7 = /(ta)+/gi