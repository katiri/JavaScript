/**
 * Prototypes
 * 
 * Um grande problema dos objetos é que sempre que um objeto é instânciado, cada instância desses objetos tem os mesmos métodos
 * isso quando o número de instâncias é muito grande pode não ser muito muito bom
 * 
 * Ai que entram os prototypes do js, a criaçãod e objetos a partir de funções construtoras permite o uso de prototypes, o prototype
 * funciona como algo ao qual a função construtora faz referência, então sempre que um objeto é criado ele vai ter a referência desse
 * prototype, dentro do prototype é possível declarar metodos que seriam iguais para todos os objetos, dessa forma ao invés de cada
 * instência ter o mesmo método, todas fazem referência ao prototype da função construtora e podem usar os métodos armazenados lá
 * 
 * Grande parte dos objetos de js usam esse método, o próprio objeto Date tem todos os seus métodos no prototype da função construtora
 */

function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
    
    // this.getNomeCompleto = () => `${nome} ${sobrenome}`; // Todas os objetos instânciados terão esse esse método
}

Pessoa.prototype.getNomeCompleto = () => `${nome} ${sobrenome}`;

/**
 * É importante destacar que é possível que um método do prototype tenha o mesmo nome de um método da função construtora
 * nesse caso o método da função sobreescreve o do prototype (na verdade o motor js procura primeiro na função e para se achar)
 */

const p1 = new Pessoa('João', 'Ramos');
const p2 = new Pessoa('Diogo', 'Ramos');


// É possível ver os métodos presentes em um prototype observando o __proto__ (ou [[prototype]]) de um objeto instânciado:
 
console.dir(p1);
console.dir(p2);

console.log(p1.__proto__);