/* Já vimos que existem tipos de dados primitivos (Aqueles cuja o VALOR não pode ser alterado)
 * Veja bem não é que o valor da variável não pode mudar, mas uma vez atribuído um valor ele 
 * não pode ser mudado a menos que se atribua um valor diferente a variável
 * 
 * Exemplos: strings, number, boolean, undefined, null, bigint e symbol
 * 
 * Veja o que quero dizer:
*/

//           01234
let texto = 'Texto';
console.log(texto[2]); // x

texto[2] = 'm';
console.log(texto[2], texto); // x, Texto

// Diferente de um array, onde isso teria funcionado
// Outro ponto é que esses valores não são passados por referencia:

let a = 'A';
let b = a; // Cria uma cópia do valor de a na memória para b

console.log(a, b); // A A

a = 'Outra coisa';
console.log(a, b); // Outra coisa A


/* Dados por referência (mutáveis): array, object, function */

//       0  1  2  3
let m = [1, 2, 3, 4];
console.log(m[2]);

m[2] = 5;
console.log(m[2], m);

// Veja como o valor é passado por referência

let n = m; // n referencia o mesmo lugar de m na memória
console.log(m, n); // [1, 2, 5, 4] [1, 2, 5, 4]

m[0] = 100;
console.log(m, n); // [100, 2, 5, 4] [100, 2, 5, 4]

m.push(900);
console.log(m, n); // [100, 2, 5, 4, 900] [100, 2, 5, 4, 900]

n.pop();
console.log(m, n); // [100, 2, 5, 4] [100, 2, 5, 4]

let i = n; // i referencia o mesmo lugar de n na memoria que por sua vez referencia o mesmo lugar de m na memoria

i.push(800);
console.log(m, n, i); // [100, 2, 5, 4, 800] [100, 2, 5, 4, 800] [100, 2, 5, 4, 800]


// Copiando um dado de referncia para outra variável sem apontar para o mesmo lugar na memória

let j = [...m];

j.push(9000);
console.log(m, n, i, j); // [100, 2, 5, 4, 800] [100, 2, 5, 4, 800] [100, 2, 5, 4, 800] [100, 2, 5, 4, 800, 9000]

i.pop()
console.log(m, n, i, j); // [100, 2, 5, 4] [100, 2, 5, 4] [100, 2, 5, 4] [100, 2, 5, 4, 800, 9000]

// Com objetos

const pessoa1 = {
    nome: 'João',
    idade: 24
}

const pessoa2 = pessoa1;
const pessoa3 = {...pessoa1};

console.log(pessoa1, pessoa2, pessoa3);

pessoa2.nome = 'José';
pessoa3.idade = 89;

console.log(pessoa1, pessoa2, pessoa3);