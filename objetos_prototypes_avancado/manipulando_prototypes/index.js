/**
 * Objetos declarados sem função construtura usam o prototype de Object
 */

const objA = {
    chaveA: 'A'
};

console.log(objA.__proto__ === Object.prototype);

// É possível tornar um objeto qualquer o prototype de outro objeto

const objB = {
    chaveB: 'B'
};

Object.setPrototypeOf(objB, objA);

console.log(objB.chaveA);

const objC = new Object();
Object.chaveB = 'C';

Object.setPrototypeOf(objC, objB);

console.log(objB.chaveA);
console.log(objC.chaveA);

// Funciona como uma herança


/**
 * Existem muitos riscos em usar a propridade __proto__ de um objeto
 * 
 * A recomendação é usar Object.getPrototypeOf(obj) para pegar o prototype de um objeto
 */

console.log(Object.getPrototypeOf(objC));
console.log(Object.getPrototypeOf(objB));
console.log(Object.getPrototypeOf(objA));


/**
 * Usando funções construtoras
 */

function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function (porcentagem){
    this.preco = this.preco * (100 - porcentagem) / 100;
}

Produto.prototype.aumento = function (porcentagem){
    this.preco = this.preco * (100 + porcentagem) / 100;
}

const p1 = new Produto('Camiseta', 100);
p1.desconto(10);
console.log(p1.preco);
p1.aumento(10);
console.log(p1.preco);

// Reutilizando o prototype da função construtora em um objeto literal (As chaves tem que bater pros métodos funcionarem)

const p2 = {
    nome: 'Calça',
    preco: 200
};

Object.setPrototypeOf(p2, Produto.prototype);

p2.desconto(10);
console.log(p2.preco);
p2.aumento(10);
console.log(p2.preco);

const p3 = Object.create(Produto.prototype, {
    nome: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 'Tênis'
    }
});
p3.preco = '300';

p3.desconto(10);
console.log(p3.preco);
p3.aumento(10);
console.log(p3.preco);