/**
 * O método splice é um método que pode ser usado em qualquer array
 * Ele pode adicionar e remover itens de um array sendo bem versátil
 * Ele pode simular as funções pop, shift, push e unshift e atuar como combinações das mesmas
 * 
 * array.splice(arg1, arg2, elem1, elem2, elem3, ...);
 * 
 * arg1 = índice a partir do qual splice começa a afetar o array (ele incluso) (Aceita índices negativos)
 * arg2 = Quantos elementos serão afetados a partir do elemento do índice (arg1)
 * elem1, elem2, elem3, ... = Tudo que vier depois de arg1 e arg2 será adicionado no array a partir de arg1 (Empurra o arg1 pra frente)
 */

//            -6      -5       -4       -3           -2      -1
//             0       1        2        3            4       5
const nomes = ['João', 'Pedro', 'Diogo', 'Catharina', 'José', 'Fernanda'];
console.log(nomes); // ['João', 'Pedro', 'Diogo', 'Catharina', 'José', 'Fernanda']

nomes.splice(3, 1); // A partir do elemento 3, tira 1 elemento
console.log(nomes); // ['João', 'Pedro', 'Diogo', 'José', 'Fernanda']

const removidos = nomes.splice(3, 1); // Guarda o que foi removiso em um array
console.log(nomes, removidos); // ['João', 'Pedro', 'Diogo', 'Fernanda'] ['José']

nomes.splice(3, 0, 'Catharina', 'José'); // A partir do elemento 3 exclui 0 elementos e adiciona 'Catharina' e 'José'
console.log(nomes); // ['João', 'Pedro', 'Diogo', 'Catharina', 'José', 'Fernanda']

// Dá pra testar de várias maneiras, tirar todos os elementos depois de um determinado elemento (separar o array em 2)
// Substituir 1 elemento, ou vários elementos
// As possibilidades são várias