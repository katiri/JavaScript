const pessoa = {
    nome: 'João Pedro',
    sobrenome: 'Ramos',
    idade: 24,

    endereco: {
        rua: 'Av Brasil',
        numero: 20
    }
}

console.log(pessoa.nome);
console.log(pessoa['nome']);

const {nome, sobrenome, idade} = pessoa;
console.log(nome);

const {endereco} = pessoa;
console.log(endereco);

const {rua, numero} = endereco;
console.log(rua);

const {endereco: endereco1, endereco: {rua: rua1, numero: numero1}} = pessoa;
console.log(endereco1, rua1, numero1);

const {nome: nomeTeste, sobrenomeTeste, idade: idadeTeste} = pessoa;
console.log(nomeTeste);
console.log(sobrenomeTeste); // Undefined

const {nome: nomeTeste1, sobrenomeTeste1 = 'Pazos', idade: idadeTeste1} = pessoa;
console.log(nomeTeste1);
console.log(sobrenomeTeste1);


const {nome: nomeTeste2, ...resto} = pessoa;
console.log(nomeTeste2);
console.log(resto);