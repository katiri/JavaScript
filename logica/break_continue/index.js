/* break e continue são termos usados para interromper ou pular uma iteração de laços de repetição
 * 
 * break interrompe um laço de repetição, tudo que estiver abaixo de break dentro do laço não é executado
 * continue pula uma iteração do laço, pulando tudo que estiver abaixo da palavra naquela iteração
 * 
 * Funcionam em todos as estruturas de repetição
 * 
 * Nos laços while e do while sempre lembrar de fazer a iteração da variável de controle antes de continue
*/

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for(let numero of numeros){
    if(numero === 5){
        break;
    }
    console.log(numero);
}

console.log('');

for(let numero of numeros){
    if(numero === 2){
        continue;
    }
    console.log(numero);
}