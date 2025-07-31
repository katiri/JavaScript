/**
 * Funções fábrica são funções que criam objetos
 */

function criaPessoa(nome, sobrenome, idade){
    return {
        nome,
        sobrenome,
        idade,
        nivel: 'Administrador',
        fala: function (assunto){
            // console.log(this); // Vai dar um console.log no objeto
            // this diz respeito ao objeto em si, this.nivel é o atributo nivel do objeto
            return `${nome} (${this.nivel}): ${assunto}. Nasci em ${this.anoNascimento()} e tenho ${this.idade} anos`;
        },
        anoNascimento(){
            const date = new Date();
            return date.getFullYear() - idade;
        },
        // Getter
        // Usar um getter impede que possamos alterar o atributo de forma manual
        // Exemplo: pessoa.faixaEtaria = 'jovem'; não vai funcionar - pessoa.idade = 90; vai funcionar
        get faixaEtaria(){ // Esse get permite o acesso ao método como se ele fosse um atributo pessoa.faixaEtaria ao inves de pessoa.faixaEtaria()
            if(this.idade > 65) return 'velho';
            if(this.idade > 30) return 'adulto';
            if(this.idade > 18) return 'jovem';
            if(this.idade > 12) return 'adolescente';
            if(this.idade > 3) return 'criança'; 
            if(this.idade > 0) return 'bebê'; 
        },
        // Setter
        // Isso permite pessoa.nomeCompleto = 'João Pazos Ramos';
        // valor vai receber 'João Pedro Pazos Ramos'
        set nomeCompleto(valor){
            valor = valor.split(' ');

            [this.nome, ...this.sobrenome] = valor;
            this.sobrenome = this.sobrenome.join(' ');
        },
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`;
        }
    };
}

const pessoa1 = criaPessoa('João', 'Ramos', 24);
// console.log(pessoa1);
console.log(pessoa1.fala('Olá, tudo bem?'));
console.log(pessoa1.faixaEtaria);

const pessoa2 = criaPessoa('Pedro', 'Pazos', 89);
// console.log(pessoa2);
console.log(pessoa2.fala('Olá, tudo bem?'));
console.log(pessoa2.faixaEtaria);

console.log(' ');


// Testando getter
pessoa1.faixaEtaria = 'criança';
console.log(pessoa1.idade, pessoa1.faixaEtaria);

pessoa1.idade = 11;
console.log(pessoa1.idade, pessoa1.faixaEtaria);

console.log(' ');


// Testando setter
pessoa1.nomeCompleto = 'Diogo Pazos Ramos'; // setter

console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);
console.log(pessoa1.nomeCompleto); // getter