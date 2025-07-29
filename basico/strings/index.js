// Toda string é um array de caracteres

let string = 'Um texto';
//            01234567

console.log(string);
console.log(string[0]);
console.log(string[4]);
console.log(string.charAt(4));
console.log(string[8]); // undefined por que esse indíce não existe
console.log(string.charAt(8)); // valor vazio


// É possível escapar certos caracteres com \

string = "Um \"Texto\"";
console.log(string);
string = "Um Texto";


// Formas de concatenar textos

console.log(string + ' texto adicionado');
console.log(`${string} texto adicionado`);
console.log(string.concat(' texto adicionado'));


// Procurar qual o indíce de uma palavra detro de uma string

console.log(string.indexOf('Texto')); // Retorna 3 que é o indíce onde a palavra Texto começa
console.log(string.indexOf('Verbo')); // Retorna -1 indicando que essa palavra não se encontra dentro da outra string
console.log(string.indexOf('T', 4)); // Começa a procurar a letra T a partir da quarta posição indíce (Não encontra, pois T entá em 3)
console.log(string.lastIndexOf('T', 4)); // Começa a procurar a letra T a partir da quarta posição indíce de traz pra frente


// Usando expressões regulares

console.log(string.match(/[a-z]/g)); // Procura todas as letras do texto entre a e z, minúsculos
console.log(string.search(/[a-z]/)); // Procura o indíce onde a primeira compatibilidade com a expressão aparece na string


// Substituindo texto

console.log(string.replace('Um', 'Outro')); // Não altera de verdade o valor da string
console.log(string);
console.log(string.replace(/[a-z]/, 'b')); // Usando expressões regulares (Só troca a primeira ocorrência)
console.log(string.replaceAll(/[a-z]/g, 'b')); // Usando expressões regulares (Só funciona com g no final)


// Tamanho de uma string

console.log(string.length); // 'Um Texto' -> 01234567 -> 8 indíces


// Recortar um pedaço de uma string

console.log(string.slice(1, 4)); // Pega tudo nas posições 123 (O 4 não entra, apenas delimita)
console.log(string.slice(-3)); // Inícia a partir de string.length - 3, ou seja 5
console.log(string.substring(string.length - 3, string.length -1)); // Muito mais trabalhoso


// Separa string em array

string = "O rato roeu a roupa do rei de roma";

console.log(string.split(' ')); // Divide a partir do espaço " "
console.log(string.split('r')); // Divide a partir do r


// Deixando tudo maiúsculo ou tudo minúsculo

console.log(string.toUpperCase());
console.log(string.toLowerCase());

