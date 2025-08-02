/**
 * Como juntar dois arrays em um
 */

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

console.log(arr1 + arr2, typeof (arr1 + arr2)); // 1,2,34,5,6 (Deixa de ser array e passa a ser string)

// Jeito correto

const arr3 = arr1.concat(arr2);
console.log(arr3);

const arr4 = arr1.concat(arr3, arr1, [6, 7, 8], 'João', true); // arr1 + arr3 + arr1 + [6, 7, 8] + 'João' + true
console.log(arr4); // [1, 2, 3, 1, 2, 3, 4, 5, 6, 1, 2, 3, 6, 7, 8, 'João', true]


// Usando spread operator (rest operator)

const arr5 = [...arr1, ...arr2];
console.log(arr5);

const arr6 = [...arr1, ...arr3, ...arr1, [6, 7, 8], 'João', true];
console.log(arr6); // [1, 2, 3, 1, 2, 3, 4, 5, 6, 1, 2, 3, [6, 7, 8], 'João', true]

const arr7 = [...arr1, ...arr3, ...arr1, ...[6, 7, 8], 'João', true];
console.log(arr7); // [1, 2, 3, 1, 2, 3, 4, 5, 6, 1, 2, 3, 6, 7, 8, 'João', true]