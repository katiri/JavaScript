/**
 * Funções imediatas ou IIFE (Immediately invoked function expression)
 * 
 * São funções (anonimas) que são executadas ao serem declaradas, sem precisar chamar uma execução
 * 
 * Muito bom para criar um escopo separado do escopo global que pode ser afetado por bibliotecas e outros códigos
 * 
 * (funcao_anonima(){})();
 */

const nome = 'Pedro';

(function (){
    console.log(123456);

    const nome = 'João';

    console.log(nome); // João
})();

console.log(nome); // Pedro


// Ainda assim essas funções ainda vão ter acesso ao escopo global

(function (){
    console.log(nome); // Pedro
})();


// Outra coisa que dá pra fazer é passar argumentos e receber parâmetros nessas funções

(function (idade, peso, altura){
    console.log(idade, peso, altura);
})(24, 110, 1.72);