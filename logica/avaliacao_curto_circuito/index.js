/* No js tudo pode ser avaliado em true ou em false
 * 
 * FALSY VALUES - 0, '', "", ``, null, undefined, NaN e false (esse último é o valor literal)
 * Ao serem usados sozinhos entre comparadores lógicos se comportam como false
 * 
 * Dito isso o js faz uma coisa chamada avaliação de curto-circuito
 * Em uma comparação de valores diretos, caso o valor final da expressão de comparação seja true, retora o último valor da comparação
 * Caso seja false, retorna o primeiro valor falso encontrado
*/

console.log('João' && 10 && 'Teste'); // Teste
console.log('João' && 0 && 'Teste'); // 0
console.log('João' && '' && 'Teste'); // ''

// Exemplo prático

function falarOi(){
    console.log('Oi');
}

let falar = undefined;
falar && falarOi(); // Vai retornar undefined e nem vai executar a função

falar = true;
falar && falarOi(); // Vai retornar o último valor verificado que no caso será a execução da função


// Usar essa avaliação com OR também fuciona e retorna o primeiro valor verdadeiro ou então o último valor falso

console.log(0 || NaN || null || 'João' || true); // João
console.log(0 || NaN || null || false || undefined); // undefined

// Exemplo prático

let corUsuario = null;
let corPadrao = corUsuario || 'red'; // red

corUsuario = 'black';
corPadrao = corUsuario || 'red'; // black