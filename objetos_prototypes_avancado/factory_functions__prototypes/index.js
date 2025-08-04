const falar = {
    falar(){
        console.log(`${this.nome} está falando`);
    }
}
const beber = {
    beber(){
        console.log(`${this.nome} está bebendo`);
    }
}
const comer = {
    comer(){
        console.log(`${this.nome} está comendo`);
    }
}

const pessoaPrototype = Object.assign({}, falar, comer, beber);

function criaPessoa(nome, sobrenome){
    // const pessoaPrototype = { // Comentei para usar mixagem (Ou composição)
    //     falar(){
    //         console.log(`${this.nome} está falando`);
    //     },
    //     beber(){
    //         console.log(`${this.nome} está bebendo`);
    //     },
    //     comer(){
    //         console.log(`${this.nome} está comendo`);
    //     }
    // };
    
    return Object.create(pessoaPrototype, {
        nome: {enumerable: true, value: nome},
        sobrenome: {enumerable: true, value: sobrenome}
    });
}

const pessoa1 = criaPessoa('João', 'Ramos');
console.log(pessoa1);
console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);
pessoa1.falar();
pessoa1.beber();
pessoa1.comer();