/* Quais as principais diferenças entre usar var e let
 * 
 * let não permite redeclaração
 * let tem escopo de bloco {...bloco}
 * var tem escopo apenas de função
*/

let nome = 'João';
// let nome = 'Pedro'; // Isso gera erro

var nome2 = 'Diogo';
var nome2 = 'Catharina'; // Isso não gera erro

if(true){
    let nome = 'Carlos'; // Isso não é redeclarar e nem é mesma variável de antes, é uma variável nova no escopo desse if
    var nome2 = 'Giovana';
    
    console.log('if 1', nome, nome2);

    if(true){
        let nome = 'Vitor';
        var nome2 = 'Isabela' // Isso está redeclarando a variável, como não tem escopo por bloco, essa toma o lugar das anteriores

        console.log('if 2', nome, nome2);
    }
}

console.log('fora do if', nome, nome2);


// Escopo de função da var

var sobrenome = 'Miranda';

function teste(){
    var nome3 = 'Luiz';
    console.log(nome3, sobrenome);
}

// console.log(nome3); // Isso gera erro por que a função protege o próprio escopo, como se fosse um let com qualquer escopo

teste();


// Hoisting: o js reconfigura seu código para corrigir funções ou variáveis que foram chamadas antes de serem criadas

console.log(teste1);
var teste1 = 'Isso é com var';

// console.log(teste2); // Isso vai gerar erro, por que o let não permite o hoisting
// let teste2 = 'Isso é com var'; // Isso vai gerar erro, por que o let não permite o hoisting


// Exemplificando o que o hoisting faz com var:
/* console.log(teste1);
 * var teste1 = 'Isso é com var';
 * 
 * VIRA:
 * 
 * var teste1;
 * console.log(teste1); // undefined
 * teste1 = 'Isso é com var';
 * 
*/ 