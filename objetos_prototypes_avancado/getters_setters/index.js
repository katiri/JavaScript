/**
 * getters e setters
 * 
 * getters faz com que metodos possam ser acessados como atributos, serve bem para processar o valor de um atributo antes de entrega-lo
 * setters funciona de forma parecida servindo para setar o valor de um atributo após o valor original passar por um processamento
 * 
 * Vamos ver como integrar ambos com defineProperty, no lugar de value e writable
 */

function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: true,
        get: function(){ // Substitui value
            return `${estoque} ${nome} em estoque`;
        },
        set: function(valor){
            if(typeof valor !== 'number'){
                // throw new TypeError('Tipo de dado errado setado para estoque');
                console.log('Tipo de dado errado setado para estoque');
                return;
            }
            estoque = valor;
        }
    });
}

const p1 = new Produto('Camiseta', 20, 3);
console.log(p1);
console.log(p1.estoque);

p1.estoque = 'Teste';
console.log(p1.estoque);

p1.estoque = 5;
console.log(p1.estoque);