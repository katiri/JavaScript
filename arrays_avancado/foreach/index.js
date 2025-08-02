/**
 * forEach é um metodo que faz um laço de repetição de um array
 * A estrutura é bem parecida com filter, map, reduce -> recebe uma função callback que recebe o valor, indice e o array completo
 */

const a1 = [1, 2, 3, 4];

a1.forEach((v, i, a) => {
    console.log(a,  i, v);
})