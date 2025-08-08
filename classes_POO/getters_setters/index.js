/**
 * Como usar getters e setters em classes
 */

class Carro {
    constructor(nome){
        this.nome = nome;
        this.velocidade = 0;
    }

    acelerar(){
        if(this.velocidade < 100){
            this.velocidade++;
        }
    }

    freiar(){
        if(this.velocidade >= 0){
            this.velocidade--;
        }
    }
}

const c1 = new Carro('Fusca');

for(let i = 0; i < 110; i++){
    c1.acelerar();
    console.log(c1);
}

// Como acelerar e freiar tem limites dos quais não podem passar eu tenho que imperdir que a velocidade seja alterada sem critério.
// Por exemplo, isso não pode acontecer ou dar certo: c1.velocidade = 10000;
// Pra isso definimos variáveis privadas e definimos setters e getters


class Carro2 {
    #velocidade = 0; // Define uma variável privada

    constructor(nome){
        this.nome = nome;
    }

    get velocidade(){
        return this.#velocidade;
    }

    set velocidade(valor){
        if(typeof valor !== 'number') return;
        if(valor > 100 || valor < 0) return;
        this.#velocidade = valor;
    }

    acelerar(){
        if(this.#velocidade < 100){
            this.#velocidade++;
        }
    }

    freiar(){
        if(this.#velocidade >= 0){
            this.#velocidade--;
        }
    }
}

const c2 = new Carro2('Fusca');

for(let i = 0; i < 110; i++){
    console.log(c2, c2.velocidade);
    c2.acelerar();
}

c2.velocidade = 1000
console.log(c2.velocidade)

c2.velocidade = -1000
console.log(c2.velocidade)

c2.velocidade = 0
console.log(c2.velocidade)