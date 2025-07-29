// Objetos funcionam como estruturas que tem características e comportamentos
// Servem muito bem em casos em que temos diversos dados das mesmas caracteristicas de um tipo de coisa (pessoas, carros etc)

// Exemplo com dados de pessoas:

const nome1 = 'João';
const sobrenome1 = 'Ramos';
const idade1 = '24';

const nome2 = 'Maria';
const sobrenome2 = 'Silva';
const idade2 = '84';

// ...
// Ao invés de ficar declarando infinitas variáveis criamos um objeto:

const pessoa1 = {
    nome: 'João',
    sobrenome: 'Ramos',
    idade: 24
}

console.log(pessoa1.nome, pessoa1.sobrenome, pessoa1.idade, 'anos');

// Só isso não melhora tanto a situação, mas já fica mais organizado

//  Ao invés de declarar diversos objetos podemos ter uma função que cria pessoas:

function criaPessoa(nome, sobrenome, idade){
    // return {
    //     nome: nome,
    //     sobrenome: sobrenome,
    //     idade: idade
    // };

    return {
        nome,
        sobrenome,
        idade
    };
}

const pessoa2 = criaPessoa('Maria', 'Silva', 84);
console.log(pessoa2.nome, pessoa2.sobrenome, pessoa2.idade, 'anos');


// Objetos também podem ter métodos, que normalmente representam comportamentos do objeto em si:

const pessoa3 = {
    nome: 'Catharina',
    sobrenome: 'Pazos',
    idade: 16,

    falar(){
        console.log('blablablablablablablablablablabla');
    },

    seApresentar(){
        console.log(`Olá, me chamo ${this.nome} ${this.sobrenome} e tenho ${this.idade} anos`)
    },

    envelhece(){
        ++this.idade;
    }
}

pessoa3.falar();
pessoa3.seApresentar();
pessoa3.envelhece();
pessoa3.seApresentar();