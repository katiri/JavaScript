/**
 * Herança serve para dar a objetos mais específicos caracteristicas e metodos que ele compartilha com outros objetos especificos
 * Vários tipos de objetos dentro do guardachuva de um objeto que pode representar os outros de uma forma mais abstrata
 * 
 * Camiseta, Caneca e Lápis -> São coisas bem diferentes mas no quesito de uma loja podem ser abstraidos como Produtos
 */

function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.aumento = function(porcentagem){
    this.preco = this.preco * (100 + porcentagem) / 100;
}
Produto.prototype.desconto = function(porcentagem){
    this.preco = this.preco * (100 - porcentagem) / 100;
}


function Camiseta(nome, preco, cor, tamanho){
    Produto.call(this, nome, preco);
    this.cor = cor;
    this.tamanho = tamanho;
}
Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;

const produto1 = new Produto('Generico', 50);
produto1.desconto(20);
console.log(produto1);

const camiseta1 = new Camiseta('Regata', 50, 'Vermelha', 60);
camiseta1.desconto(20);
console.log(camiseta1);

// Se eu quiser posso modificar funções herdadas:
Camiseta.prototype.desconto = function(valor){
    this.preco -= valor;
}

produto1.desconto(20);
console.log(produto1);

camiseta1.desconto(20);
console.log(camiseta1);

// Um objeto diferente também pode herdar Produto e ter outros atributos que não os da camiseta:

function Caneca(nome, preco, material, estoque){
    Produto.call(this, nome, preco);
    this.material = material;
    this.estoque = estoque;
}
Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

Caneca.prototype.aumentarEstoque = function(quantidade){
    this.estoque += quantidade;
}

const caneca1 = new Caneca('Caneca Vingadores', 60, 'Cerâmica', 100);
console.log(caneca1);

caneca1.aumentarEstoque(100);
caneca1.desconto(50);
console.log(caneca1);


/**
 * É importante destacar que o que acontece aqui não é exatamente uma herança e sim uma delegação
 * o objeto Caneca não tem os métodos de desconto e aumento, mas adicionando o objeto produto na cadeia de prototypes dele
 * o js vai procurar na cadeia tudo que ele não encontrar no objeto...
 */