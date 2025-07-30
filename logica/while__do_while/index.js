/* While é outro laço de repetição muito comum em várias linguagens de programação
 * 
 * Tem uma estrutura um pouco diferente do for
 * 
*/

let i = 0; // Cria a variável de controle
while(i < 10){ // Define a condição de parada
    console.log(i);
    i++; // Itera a variável de controle (MUITO IMPORTANTE)
}

console.log('');

// Esse laço while é mais comum para quando não sabemos exatamente quando o laço deve parar
// Exemplo:

function random(min, max){
    max++; // Garante que o máximo gerado será max e não max - 1
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

const min = 1;
const max = 50;

let rand = random(min, max);

while(rand !== 10){
    rand = random(min, max);
    console.log(rand);
}

console.log('');


/* Outro laço de repetição muito parecido com o while é o do while
 * 
 * A diferença entre eles é que o while primeiro confere a condição e depois executa o código
 * O do while, primeiro executa o código e depois confere a condição
*/

rand = 10; // Mesmo sendo 10 o do while vai executar e por consequencia mudar seu valor, por que ele só confere depois de executar
// Isso nos diz que o do while sempre vai rodar seu bloco de código pelo menos 1 vez

do{
    console.log(rand);
    rand = random(min, max);
}
while(rand !== 10);