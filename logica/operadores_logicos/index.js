/* Operadores lógicos
 * && -> AND -> E
 * || -> OR -> OU
 * ! -> NOT -> NÂO
 * 
 * Esses operadores servem para verificar duas ou mais comparações
 * Com excessão do NOT que pode ser usado para inverter o valor de uma comparação
*/

console.log(true && true); // true
console.log(10 > 5 && 50 < 100 && 5 === 5); // true
console.log(10 > 5 && 50 < 100 && 5 !== 5); // false
// AND implica que todas as comparações envolvidas tem que ser verdadeiras para retornar true
// Se apenas 1 não for então retorna false

console.log(true || false); // true
console.log(10 > 5 || 50 < 100 || 5 === 5); // true
console.log(10 > 5 || 500 < 100 || 5 !== 5); // true
console.log(10 > 50 || 500 < 100 || 5 !== 5); // false
// OR implica que pelo menos uma das compareções envolvidas tem que ser verdadeiras para retornar true
// Apenas se todas as comparações forem falsas vai retornar false

console.log(!false); // true
console.log(!true); // false
console.log(!(10 > 5)); // false


// Utilizando tudo junto
console.log( !(10 > 5) || 60 === 60 && !(90 < 50) ); // true