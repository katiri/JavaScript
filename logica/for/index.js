/* Estrutura de repetição for
 * 
 * Muito utilizado quando precisamos repetir um bloco de código com vários parametros, normalmente iteráveis
 * 
*/

console.log('Linha 1');
console.log('Linha 2');
console.log('Linha 3');
console.log('Linha 4');
console.log('Linha 5');
console.log('Linha 6');
console.log('Linha 7');
console.log('Linha 8');
console.log('Linha 9');
console.log('Linha 10');

// Podemos fazer isso com o for

for(let i = 1; i <= 10; i++){
    console.log(`Linha ${i}`);
}

// for(declara a variavel iteravel, condição de parada, regra de iteração){ bloco de código }

for(let i = 0; i <= 100; i += 2){
    console.log(`Linha ${i}`);
}

for(let i = 100; i >= 0; i -= 2){
    console.log(`Linha ${i}`);
}


for(let i = 0; i < 10; i++){
    const par = i % 2 === 0 ? 'par' : 'impar';
    console.log(i, par);
}


// Uso do for com arrays

const frutas = ['maça', 'pera', 'banana', 'abacaxi'];

for(let i = 0; i < frutas.length; i++){
    console.log(frutas[i]);
}