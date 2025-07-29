/* Operadores ternáros podem substituir algumas estruturas condicionais em casos simples 
 * 
 * (condição) ? 'Valor se verdadeiro' : 'Valor se falso'
*/

let pontuacaoUsuario = 999;
let tipoUsuario;

// Com estrutura condicional:
if(pontuacaoUsuario >= 1000){
    tipoUsuario = 'VIP';
}
else{
    tipoUsuario = 'Standart';
}

console.log(tipoUsuario);

// Com operação ternária

pontuacaoUsuario = 1100;
tipoUsuario = pontuacaoUsuario >= 1000 ? 'VIP' : 'Standart';

console.log(tipoUsuario);