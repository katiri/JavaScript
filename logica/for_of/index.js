/* For of é uma variação da estrutura de repetição for
 * 
 * Utilizado para percorrer diretamente os valores de um valor iterável, ao invés de usar os indices
 * 
 * Objetos não são iteráveis
*/

const frutas = ['Uva', 'Banana', 'Maçã'];

for(let fruta of frutas){
    console.log(fruta);
}

const texto = 'abcdefghijklmnopqrstuv';

for(let letra of texto){
    console.log(letra);
}