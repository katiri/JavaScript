/**
 * Métodos úteis para objetos
 */

// Como copiar um objeto para outro (sem ser afetato por valores por referência)

const p1 = {nome: 'João', idade: 24};
const p2 = p1; // Jeito errado
console.log(p1, p2);

p2.idade = 54;
p1.nome = 'Diogo';
console.log(p1, p2);

const p3 = {...p1}; // Uma forma
console.log(p1, p3);

p3.idade = 16;
p1.nome = 'Catharina';
console.log(p1, p3);

const p4 = Object.assign({}, p1); // Outra forma

p4.idade = 25;
p1.nome = 'Caio';
console.log(p1, p4);


// Valores de um objeto:
console.log(Object.values(p1));

// Arrays com [chave, valor]
console.log(Object.entries(p1)); // [[chave1, valor1], [chave2, valor2]]

for(let [key, value] of Object.entries(p1)){
    console.log(key, value);
}

// Chaves de um objeto:
console.log(Object.keys(p1));

// Pegar as propriedades de um atributo de um objeto
console.log(Object.getOwnPropertyDescriptor(p1, 'nome'));
console.log(Object.getOwnPropertyDescriptor(p1, 'idade'));
console.log(Object.getOwnPropertyDescriptors(p1));

// Congelar um objeto:
Object.freeze(p1);
p1.nome = 'Paulo';
console.log(p1);

console.log(Object.getOwnPropertyDescriptor(p1, 'nome'));
console.log(Object.getOwnPropertyDescriptor(p1, 'idade'));
console.log(Object.getOwnPropertyDescriptors(p1));