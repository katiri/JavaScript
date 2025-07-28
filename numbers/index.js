let num1 = 1;
let num2 = 2.5;

console.log(num1 + num2); // Como são numbers, vai somar

console.log(num1.toString() + num2); // Concatena, mas sem mudar num1 para string, não altera a variável de fato
// num1 = num1.toString(); // Realmente altera num1 para string


// Mostrar versão binária de um número

num1 = 1500;

console.log(num1.toString(2));


// Arredondar valores

num1 = 10.4325322435;

console.log(num1.toFixed(2));
console.log(num1.toFixed(4));


// Conferir se número é inteiro

num1 = 1;

console.log(Number.isInteger(num1)); // true
console.log(Number.isInteger(num2)); // false
console.log(Number.isInteger('20')); // false


// Verificar se o número é NaN

let temp = num1 * 'Olá';

console.log(temp);
console.log(Number.isNaN(temp)); // true
console.log(Number.isNaN(num1)); // false


// Imprecisão das contas e casas decimais (Parão IEEE 754-2008)

num1 = 0.7;
num2 = 0.1;

console.log(num1 + num2); // 0.79999999999

num1 += num2; // 0.8
num1 += num2; // 0.9
num1 += num2; // 1.0

console.log(num1); // 0.999999999999999

let num = num1.toFixed(2);

console.log(num); // 1.00

console.log(Number.isInteger(1.00)); // 1.00 true
console.log(Number.isInteger(num)); // 1.00 false (em binário esse número não é inteiro)

num = parseFloat(num1.toFixed(2));
console.log(Number.isInteger(num));

// Outra forma:
num1 = 0.7;

num1 = ((num1 * 100) + (num2 * 100)) / 100;

console.log(num1);