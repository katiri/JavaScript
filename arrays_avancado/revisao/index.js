/**
 * Vimos que arrays são basicamente listas de valores (valores do mesmo tipo ou de tipos mistos)
 * Esses valores são indexados de 0 até o número de elementos - 1
 * É possível trocar os valoes especificos de um array acessando seus os mesmos através dos indices
 * É possível ver o tamanho de um array acessando o atributo length
 * É possível adicionar valores atribuindo valores a indices novo ou usando funções como push e unshift
 * É possível adicionar remover valores usando funções como pop, shift e delete (esse último deixa um 'valor vazio' ao invés de diminuir o array)
 * É possível recortar arrays com slice e junta-los em strings com join
 * É possível transformar strings em arrays com split, passando um argumento que será o separador
 * Os arrays são valores atrubuidos por referencia: arrB = arrA, qualquer mudança em qualquer dos dois afeta ambos
 */

// Declaração comum de um array
const arr1 = [1, 2, 3];
console.log(arr1);

// Declaração como isntância de objeto (Serve pra qualquer tipo de dado)
const arr2 = new Array(1, 2, 3);
console.log(arr2);

// Um meio de copiar um array para outra variável sem que os valores seram afetados por referência:
const arr3 = [...arr2];
console.log(arr2, arr3);

arr2.push(4);
arr3.unshift(0);
console.log(arr2, arr3);