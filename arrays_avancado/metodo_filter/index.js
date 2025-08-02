/**
 * Filter é um dos poderosos métodos de arrays que permite filtrar os itens de um array retornando um array filtrado
 * 
 * Filter sempre vai retornar um array com o mesmo número de elementos do array filtrado ou menos
 */

// Retorne os números maiores que 10
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const resultado = [];
for(let num of numeros){
    if(num > 10){
        resultado.push(num);
    }
}
console.log(resultado);

// Com filter   
function callbackFilter(valor, index, array){
    if(valor > 10){
        return true; // Se retorna true adiciona no novo array
    }
    return false;
}

const resultadoFilter = numeros.filter(callbackFilter);
console.log(resultadoFilter);

// De forma mais resumida:
const resultado2Filter = numeros.filter(v => v > 10);
console.log(resultado2Filter);

console.log('');

// Explorando os parâmetros passados:
const resultado3Filter = numeros.filter((valor, index, array) => {
    console.log(valor, index, array);
    return valor > 10;
});
console.log(resultado3Filter);


// Retorne as pessoas que tem o nome com 5 letras ou mais
// Retorne as pessoas com mais de 50 anos
// Retorne as pessoas cujo nome termina com a

const pessoas = [
    {nome: 'Luiz', idade: 32},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 62},
    {nome: 'Wallace', idade: 47}
];

const tamanhoNomeFilter = pessoas.filter(v => v.nome.length >= 5);
const idadeFilter = pessoas.filter(v => v.idade > 50);
const ultimaLetraFilter = pessoas.filter(v => v.nome.toLowerCase().endsWith('a'));

const allFilters = pessoas.filter(v => (v.nome.length >= 5 && v.idade > 50 && v.nome.toLowerCase().endsWith('a')));

console.log(tamanhoNomeFilter);
console.log(idadeFilter);
console.log(ultimaLetraFilter);
console.log(allFilters);