// Arrays são basicamente listas de valores

const alunos = ['João', 'Maria', 'Luiz', 'Matheus'];
console.log(alunos);


// Um array pode ter vários tipos de dados dentro dele

const coisas = [32, 'Teste', 32.4, true]; // Recomendado sempre usar o mesmo tipo dentro de um array


// Arrays são indexados por elemento:

console.log(alunos[0]);
console.log(alunos[1]);
console.log(alunos[2]);
console.log(alunos[3]);
console.log(alunos[4]); // undefined


// Posso trocar um valor dentro do array

alunos[0] = 'Pedro';
console.log(alunos);


// Tamanho do array

console.log(alunos.length);


// Adicionando valores a um array

alunos[4] = 'Júlia'; // Ao final
console.log(alunos);

alunos[alunos.length] = 'Roberto'; // Ao final
console.log(alunos);

alunos.push('Vítor'); // Ao final
console.log(alunos);

alunos.unshift('João'); // Ao começo
console.log(alunos);


// Remover itens de um array

alunos.pop(); // Tira o último
console.log(alunos);

const removido = alunos.pop();
console.log(alunos);
console.log(removido);

alunos.shift(); // Tira do começo
console.log(alunos);


delete alunos[1]; // Apaga o valor do índice 1
console.log(alunos);


// Pegar um recorte de elementos

console.log(alunos.slice(1, 4)); // Elemento 4 não é incluído


// Tipo do array (Objeto Array)

console.log(typeof alunos);


// Verificando se é array

console.log(alunos instanceof Array);

// Array dentro de array (Matrizes)

const arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(arr);
console.log(arr[0]);
console.log(arr[0][0]);