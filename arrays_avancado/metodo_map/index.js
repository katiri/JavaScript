/**
 * O método map é similar ao método filter, mas serve para alterar os valores de um array
 * map retorna sempre um array de mesmo tamanho do array mapeado
 * 
 * Toda a questão da função de callback e seus respectivos parametros também funciona para map
 * 
 * Sempre tomar cuidado para não alterar o array original quando se trada de um array de objetos 
 * por exemplo, os valores por referencia pode atrapalhar
 */

// Retorne os números multiplicados por 100
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const numeros100 = [];
for(let num of numeros){
    numeros100.push(num * 100);
}
console.log(numeros100);

// Com map
const num100 = numeros.map(v => v * 100);
console.log(num100);


// Para cada elemento:
// Retorne apenas uma string com o nome da pessoa
// Remova apenas a chave nome do objeto
// Adicione uma chave id em cada objeto
const pessoas = [
    {nome: 'Luiz', idade: 32},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 62},
    {nome: 'Wallace', idade: 47}
];

const apenasNomes = pessoas.map(v => v.nome);
// const removeNome1 = pessoas.map(v => delete(v.nome)); // Isso afeta os objetos do array original (valores por referencia)
const removeNome2 = pessoas.map(v => ({idade: v.idade}));
const removeNome3 = pessoas.map(v => {
    return {idade: v.idade};
});
const adicionaId = pessoas.map((v, i) => {
    // v.id = i; // Esse também afeta o array original (valores por referencia)
    const newObj = {id: i, ...v};
    return newObj;
});

console.log(apenasNomes);
// console.log(removeNome1);
console.log(removeNome2);
console.log(removeNome3);
console.log(adicionaId);

console.log(pessoas);