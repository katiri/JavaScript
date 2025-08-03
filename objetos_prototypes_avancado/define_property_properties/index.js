/**
 * Se viu que é possível impedir que um objeto seja modificado com Object.freeze
 * Mas as vezes a intenção é congelar apenas um atributo especifico
 */

function Produto(nome, preco, estoque){ // Quero que estoque não seja alterável e nem vísivel
    // this.nome = nome; // Vaiável pública
    // this.preco = preco;
    // this.estoque = estoque;

    Object.defineProperty(this, 'estoque', {
        enumerable: false,
        // Mostra a chave? (Funciona como uma chave secreta, não é mostrada no objeto, nem na lista de chaves mas pode ser acessada) 
        value: estoque,
        // Define o valor
        writable: false,
        // Consigo alterar o valor?
        configurable: false
        // Posso apagar ou reconfigurar?
    });

    // Reconfigurando:
    // Object.defineProperty(this, 'estoque', {
    //     enumerable: true,
    //     value: preco,
    //     writable: true,
    //     configurable: false
    // })

    Object.defineProperties(this, {
        nome: {
            enumerable: true,
            value: nome,
            writable: true,
            configurable: false
        },
        preco: {
            enumerable: true,
            value: preco,
            writable: true,
            configurable: false
        }
    });
}

const p1 = new Produto('Camiseta', 20, 3);
console.log(p1);

// enumerable false:
console.log('Estoque', p1.estoque);

console.log(Object.keys(p1));

for(let key in p1){
    console.log(key);
}

// writable false:
p1.estoque = 5;
console.log('Estoque', p1.estoque);

// configurable false:
delete p1.estoque;
console.log('Estoque', p1.estoque);