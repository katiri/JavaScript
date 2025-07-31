/* As funções são feitas para retornar respostas
 * 
 * Esse retorno se dá por meio da palavra return
 * 
 * Tudo que vem depois de um return dentro do bloco de uma função é ignorado
*/

function somar(a, b){
    return a + b;
}

let soma1 = somar(1, 2); // Ela retorna um valor que pode ser atribuido a uma variável ou ser usado como dado
console.log(soma1);
console.log(somar(6, 9));

// Funções que não tem return retornam undefined

function somar2(a, b){
    console.log(a + b); // Console.log não é um retorno ele apenas exibe algo no console
}
console.log(somar2(5, 2));

// É normal que algumas funções não retornem nada (alert por exemplo), mas ainda assim podem fazer coisas úteis

// O retorno de um função pode retornar qualquer coisa: valores, arrays, objetos, outra função


// Exemplo de uma função retornando outra função

function falaFrase(comeco){
    function falaResto(resto){
        return comeco + ' ' + resto;
    }
    
    return falaResto;
}

const f = falaFrase('Olá');

console.log(f);
console.log(typeof f);
console.log(f('mundo!')); // Eu posso colocar várias funções uma dentro da outra

// Exemplo mais interessante:

function criaMultiplicador(multiplicador){
    return function (n){
        return n * multiplicador;
    };
}

const duplicador = criaMultiplicador(2);
const triplicador = criaMultiplicador(3);
const quadruplicador = criaMultiplicador(4);

console.log(duplicador(4)); // 8
console.log(triplicador(4)); // 12
console.log(quadruplicador(4)); // 16