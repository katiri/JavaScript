const pessoas = [
    {id: 3, nome: 'Luiz'},
    {id: 2, nome: 'Maria'},
    {id: 1, nome: 'Helena'}
];

const novasPessoas = {};

for(const pessoa of pessoas){
    const {id} = pessoa;
    novasPessoas[id] = {...pessoa};
}

// Você vai perceber que foi criado um objeto com chaves no valor dos id e o valor são os objetos listados mesmo
// Porém a ordem dos objetos está diferente do que estava na lista e isso pode ser ruim
console.log(novasPessoas);


// Resolvendo com Map()

const novasPessoas2 = new Map();

for(const pessoa of pessoas){
    const {id} = pessoa;
    novasPessoas2.set(id, {...pessoa});
}

console.log(novasPessoas2);

console.log(novasPessoas2.get(2));

// Únicas diferenças aqui são na maneira de colocar novos valores e de pegar valores que usam .set e .get respectivamente

for(const pessoa of novasPessoas2){
    console.log(pessoa);
}

for(const [identifier, {id, nome}] of novasPessoas2){
    console.log(identifier, id, nome);
}

novasPessoas2.delete(2);
console.log(novasPessoas2);