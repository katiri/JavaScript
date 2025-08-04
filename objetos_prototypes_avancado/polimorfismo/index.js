/**
 * Polimorfismo é uma forma de fazer métodos se comportarem de maneiras diferentes em sub-classes
 * 
 * Veja que passamos a chamar nesse sentido o objeto de classe
 */

// Superclass
function Conta(agencia, conta, saldo){
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

Conta.prototype.sacar = function (valor){
    console.log(`Sacar ${valor.toFixed(2)}`);
    if(this.saldo < valor){
        console.log(`Saldo insuficiente: ${this.saldo.toFixed(2)}`);
        this.verSaldo();
        return;
    }

    this.saldo -= valor;
    this.verSaldo();
}

Conta.prototype.depositar = function (valor){
    console.log(`Depositar ${valor.toFixed(2)}`);
    this.saldo += valor;
    this.verSaldo();
}

Conta.prototype.verSaldo = function (){
    console.log(`Ag/c: ${this.agencia}/${this.conta} | Saldo: ${this.saldo.toFixed(2)}\n`);
}

const conta1 = new Conta(11, 22, 10);

console.log(conta1);

conta1.verSaldo();
conta1.depositar(11);
conta1.depositar(10);
conta1.sacar(30);
conta1.sacar(1);
conta1.sacar(0.01);


// Classe filha

function ContaCorrente(agencia, conta, saldo, limite){
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;
}
ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;

ContaCorrente.prototype.sacar = function(valor){
    console.log(`Sacar ${valor.toFixed(2)}`);
    if(valor > (this.saldo + this.limite)){
        console.log(`Valor solicitado ultrapassa o limite do saldo/crédito: Saldo: ${this.saldo.toFixed(2)}, Limite: ${this.limite.toFixed(2)}`);
        this.verSaldo();
        return;
    }

    this.saldo -= valor;
    this.verSaldo();
}

ContaCorrente.prototype.verSaldo = function (){
    console.log(`Ag/c: ${this.agencia}/${this.conta} | Saldo: ${this.saldo.toFixed(2)} | Limite: ${this.limite.toFixed(2)}\n`);
}

const contaCorrente1 = new ContaCorrente(12, 23, 1000, 1000);
console.log(contaCorrente1);
contaCorrente1.verSaldo();

contaCorrente1.sacar(1100);
contaCorrente1.depositar(1100);
contaCorrente1.sacar(3000);


// Outra Classe Filha

function ContaPoupanca(agencia, conta, saldo){
    Conta.call(this, agencia, conta, saldo);
}
ContaPoupanca.prototype = Object.create(Conta.prototype);
ContaPoupanca.prototype.constructor = ContaPoupanca;

const contaPoupanca1 = new ContaPoupanca(12, 23, 1000);
console.log(contaPoupanca1);
contaPoupanca1.verSaldo();

contaPoupanca1.sacar(1100);
contaPoupanca1.depositar(1100);
contaPoupanca1.sacar(3000);