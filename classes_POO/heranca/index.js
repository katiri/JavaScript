/**
 * Como usar herança em classes javascript
 */

class DispositivoEletronico {
    constructor(nome){
        this.nome = nome;
        this.ligado = false;
    }

    ligar(){
        if(this.ligado){
            console.log(`${this.nome} já está ligado`);
            return;
        }
        this.ligado = true;
    }

    desligar(){
        if(!this.ligado){
            console.log(`${this.nome} já está desligado`);
            return;
        }
        this.ligado = false;
    }
}

const d1 = new DispositivoEletronico('Smartphone');
d1.ligar();
console.log(d1);

d1.ligar();
console.log(d1);

d1.desligar();
console.log(d1);

d1.desligar();
console.log(d1);


// Criando classe que vai herdar dispositivo eletrênico:

class Smartphone extends DispositivoEletronico {
    constructor(nome, cor, modelo){
        super(nome); // Chama a classe da qual essa é extendida e usa o construtor dela para as variáveis compartilhadas/herdadas
        this.cor = cor;
        this.modelo = modelo;
    }
}

const s1 = new Smartphone('iPhone', 'Preto', '15 Pro Max');

s1.ligar();
console.log(s1);

s1.desligar();
console.log(s1);


const s2 = new Smartphone('Samsung', 'Branco', 'Galaxy S11');

s1.ligar();
console.log(s1);

s1.desligar();
console.log(s1);

// É possível extender classes de classes extendidas gerando uma cadeia
// Também é possível extender uma classe em várias outras independentes
// Mesmo extendendo a classe é possível sim sobrescrever métodos criando métodos com os mesmos nomes
//   primeiro ele procura os métodos na classe e se não encontrar procura na classe pai