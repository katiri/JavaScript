/**
 * A função construtora é muito semelhante a função fábrica, retorna objetos
 * 
 * A função construtora é semelhante ao que seria declarar uma classe em linguagens como php ou python
 */

// Por convenção os nomes de funções construtoras começam com letra maiúscula
function Pessoa(nome, sobrenome){
    // Considere o escopo a função como se fosse o escopo do objeto
    // Inclusive podendo usar this

    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = 24;

    this.altura; // undefined;
    this.defineAltura = function (altura){
        this.altura = altura;
    };

    this.peso;
    this.definePeso = (peso) => this.peso = peso;

    // Se eu não usar o this, posso criar variáveis e funções dentro do escopo da função que não estarão
    // disponíveis fora dela ou através dos objetos

    const segredo1 = 'segredo';
    let segredo2 = 'segredo2';
    function criaSegredo(){
        console.log('Tenho novo segredo');
    }
    // Posso usar essas coisas dentro da função construtora sem problemas
}


// Também é diferente para declarar novos objetos quando se usa funções construtoras
// É obrigatório o uso da palavra new antes do nome da função
const pessoa1 = new Pessoa('João', 'Pedro');
console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);
console.log(pessoa1.idade);

console.log(pessoa1.altura);
pessoa1.defineAltura(1.72);
console.log(pessoa1.altura);

console.log(pessoa1.peso);
pessoa1.definePeso(110);
console.log(pessoa1.peso);