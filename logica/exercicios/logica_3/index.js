/* Escreva uma função que receba um número e retorne o seguinte:
 * 
 * Número é divisível por 3 = Fizz
 * Número é divisível por 5 = Buzz
 * Número é divisível por 3 e 5 = FizzBuzz
 * Número NÂO é divisível por 3 e 5 = Retorna o próprio número
 * Checar se o número é realmente um número = retorna o próprio número
 * Use a função com números de 0 a 100
*/

function fizzBuzz(num){
    if(Number.isNaN(num)) return num;
    
    if(num % 3 === 0 && num % 5 === 0) return 'FizzBuzz';
    if(num % 3 === 0) return 'Fizz';
    if(num % 5 === 0) return 'Buzz';
    
    return num;
}

for(let i = 0; i <= 100; i++){
    console.log(i, fizzBuzz(i));
}

console.log('30');