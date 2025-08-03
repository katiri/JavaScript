/**
 * Uma breve revisão sobre objetos
 */

// Declaração literal
const pessoa = {
    nome: 'João',
    idade: 24
};

console.log(pessoa);
console.log(pessoa.nome);
console.log(pessoa['nome']);
const chave = 'nome'
console.log(pessoa[chave]);

// Declaração com construtor
const pessoa1 = new Object();
pessoa1.nome = 'Pedro';
pessoa1.idade = 10;

console.log(pessoa1);


// Apagar uma chave do objeto
delete pessoa1.nome;
console.log(pessoa1);


// Métodos
pessoa.falarNomeEIdade = function(){
    console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos`);
}
pessoa.falarNomeEIdade();

pessoa.getDataNascimento = function(){
    return 2025 - this.idade;
};
console.log(pessoa.getDataNascimento());


// Iterando sobre um objeto
for(let key in pessoa){
    console.log(key, pessoa[key]);
}

for(let value in pessoa){
    console.log(value);
}


// função fabrica e função construtora
function fabricaPessoa(nome, idade){
    return {
        nome,
        idade,

        get falarNomeEIdade(){
            return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos`;
        },

        get getDataNascimento(){
            return 2025 - this.idade;
        }
    };
}

const pessoa3 = fabricaPessoa('Cahtarina', 16);
console.log(pessoa3.falarNomeEIdade, pessoa3.getDataNascimento);


function Pessoa(nome, idade){
    this.nome = nome;
    this.idade = idade;

    this.falarNomeEIdade = () => {
        return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos`;
    };

    this.getDataNascimento = () => {
        return 2025 - this.idade;
    };
}

// new cria um objeto vazio e atrela a palavra this a esse objeto instanciado
const pessoa4 = new Pessoa('Diogo', 22);
console.log(pessoa4.falarNomeEIdade(), pessoa4.getDataNascimento());


// Apesar de declarar objetos como constantes eu ainda consigo alterar o valor do local o qual a variável está apontando na memória
// Só não posso mudar o local para o qual a variável aponta
// Isso me permite alterar os atributos de um objeto
// Dito isso posso impedir que esses valores sejam alterados da seguinte maneira:

Object.freeze(pessoa4); // Isso também funciona com arrays Object.freeze(arr)
pessoa4.nome = 'Enzo';

console.log(pessoa4.nome);
console.log(Object.isFrozen(pessoa4));

function PessoaInalteravel(nome, idade){
    this.nome = nome;
    this.idade = idade;

    Object.freeze(this);
}