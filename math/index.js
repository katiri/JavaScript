// Objeto Math

let num1 = 9.54578;


// Arredondando

console.log(Math.floor(num1)); // Para baixo
console.log(Math.ceil(num1)); // Para cima
console.log(Math.round(num1)); // Automático
console.log(Math.round(9.44578));


// Maior ou menor número de uma lista

console.log(Math.max(1, 2, 3, 4, -32, 432, 534, 14, 5));
console.log(Math.min(1, 2, 3, 4, -32, 432, 534, 14, 5));


// Números aleatórios

console.log(Math.random()); // Entre 0 e 1, 1 não incluido
const aleatorio = Math.random() * (10 - 5) + 5; // Entre 5 e 10
console.log(aleatorio);
console.log(Math.round(aleatorio));


// PI

console.log(Math.PI);


// Potenciação e raiz

console.log(10 ** 2);
console.log(Math.pow(10, 2));

console.log(10 ** (1/2)); // Raiz quadrada
console.log(10 ** 0.5); // Raiz quadrada


// ATENÇÃO: Em JavaScript você consegue dividir um número por zero, retorna Infinity

console.log(100 / 0); // Importante destacar que isso avalia como true