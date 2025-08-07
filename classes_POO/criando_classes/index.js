/**
 * No JavaScript classes são a mesma coisa que funções construtoras, escrita de um modo diferente
 */

class Pessoa {
    // Toda classe pode ou não ter o método constructor, serve para instânciar uma classe de uma maneira específica, recebendo parametros por exmeplo
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar(){
        console.log(`${this.nome} está falando.`);
    }

    comer(){
        console.log(`${this.nome} está comendo.`);
    }

    beber(){
        console.log(`${this.nome} está bebendo.`);
    }
}

const p1 = new Pessoa('João', 'Ramos');
console.log(p1);
p1.falar();
p1.comer();
p1.beber();

// O interessante de usar classes é que os métodos de uma classe já são automáticamente linkados no prototype, sem que tenhamos que declarar
// isso por fora (É possível visualizar isso no navegador)