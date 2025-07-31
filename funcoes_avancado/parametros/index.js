/* Parâmetros de funções são valores que elas podem receber e trabalhar com
 * 
*/

function cumprimentar(nome){
    console.log('Olá, meu nome é', nome);
}
cumprimentar('João');

const nome = 'Pedro';
cumprimentar(nome);

console.log('');


// O js não se importa muito se você está enviando mais parametros do que os declarados na função:

function funcao(){
    console.log('Os paramêtros passados foram:')
}
funcao('Valor', 412, 43, 23, 43); // Isso não gera erro

// Entretanto para funções declaradas com a palavra 'function' esses argumentos passados são salvos em uma variável chamada 'arguments':

function funcao2(texto){
    console.log(texto);
    console.log(arguments); // Argumentos passados na chamada da função independente de se foram declarados como parametros
}
funcao2('Valor', 412, 43, 23, 43);

// Caso interessante de uso do 'arguments':

function soma(){
    let total = 0;
    for(let i of arguments){
        total += i;
    }

    console.log(total);
}
soma(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

console.log('');


// Quando eu passo menos argumentos do que eu tenho de parametros declarados, os parametros restantes ficam como undefined

function funcao3(a, b, c, d, e, f){
    console.log(a, b, c, d, e, f);
}
funcao3(1, 2, 3);

// Isso muda se colocarmos valores padrão para os parametros no caso de não serem enviados argumentos

function subtracao(x = 20, y = 1, c){
    console.log(x - y);
    console.log(c);
    console.log('');
}
subtracao(5, 2, 16);
subtracao(10);
subtracao(undefined, 100, 0);


// Declaração de parametros por desestruturação
// Com arrays:

function desestruturacaoArray([x, y, z]){
    console.log(x, y, z);
}
desestruturacaoArray([1, 2, 3]);

// Com objetos:

function desestruturacaoObj({nome, sobrenome, idade}){
    console.log(nome, sobrenome, idade);
}
desestruturacaoObj({nome: 'João', sobrenome: 'Ramos', idade: '24'}); // Não precisa ser o objeto literal, pode ser salvo em uma variável

console.log('');


// Receber argumentos excedentes com rest operator

function conta(operador, acumulador, ...numeros){ // O rest operator tem que ser o último a ser declarado
    console.log(operador, acumulador, numeros);

    for(let numero of numeros){
        if(operador === '+') acumulador += numero;
        if(operador === '-') acumulador -= numero;
        if(operador === '/') acumulador /= numero;
        if(operador === '*') acumulador *= numero;
    }

    console.log(acumulador);
}
conta('+', 0, 1, 3, 4, 5, 6, 7);
conta('-', 0, 1, 3, 4, 5, 6, 7);
conta('*', 1, 1, 3, 4, 5, 6, 7);
conta('/', 1, 1, 3, 4, 5, 6, 7);