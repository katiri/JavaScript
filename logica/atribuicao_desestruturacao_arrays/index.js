/* Uma forma de atribuir valores a variáveis por meio de arrays
 * 
 * Desestruturar um array em variáveis, dando para cada variável um valor do array
*/

let a = 'A'; // B
let b = 'B'; // C
let c = 'C'; // A

console.log(a, b, c);

[a, b, c] = [b, c, a];

console.log(a, b, c);


[a, b, c] = [1, 2, 3];

console.log(a, b, c);

const arr = [5, 6, 7];
[a, b, c] = arr;

console.log(a, b, c);


const arr2 = [100, 200, 300, 400, 500, 600, 700, 800, 900];
const [num1, num2] = arr2;
console.log(num1, num2);

const [num3, num4, ...resto] = arr2; // ... nesse caso é chamado de rest operator
console.log(num3, num4, resto);

const [num5, , num6, , num7] = arr2;
console.log(num5, num6, num7);


const arr3 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
// Pegar só o número 5
const [, [, num8,],] = arr3;
console.log(num8);