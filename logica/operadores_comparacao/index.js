/* Operadores de comparação:
 * > maior que
 * >= maior que ou igual a
 * < menor que
 * <= menor que ou igual a
 * == igual a (compara valor) (Não recomendado)
 * === estritamente igual a (compara valor e tipo)
 * != diferente de (compara valor) (Não recomendado)
 * !== estritamente diferente de (compara valor e tipo)
 * 
 * O uso desses operadores em expressões sempre vai retornar true ou false
*/

console.log(10 > 5); // true
console.log(10 > 50); // false

console.log(10 >= 9); // true
console.log(10 >= 10); // true
console.log(10 >= 50); // false

console.log(10 < 5); // false
console.log(10 < 50); // true

console.log(10 <= 9); // false
console.log(10 <= 10); // true
console.log(10 <= 50); // true

console.log(10 == 10); // true
console.log(10 == '10'); // true
console.log(10 == 50); // false

console.log(10 === 10); // true
console.log(10 === '10'); // false
console.log(10 === 50); // false

console.log(10 != 10); // false
console.log(10 != '10'); // false
console.log(10 != 50); // true

console.log(10 !== 10); // false
console.log(10 !== '10'); // true
console.log(10 !== 50); // true


// É possível salvar comparações em variáveis

const comparacao = 10 <= 15;
console.log(comparacao); // true


// É possível comparar variáveis

const num1 = 10;
const num2 = 50;

console.log(num1 < num2); // true