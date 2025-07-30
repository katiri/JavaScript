// Escreva uma função que recebe 2 números e retorne o maior deles

function biggerNum(n1, n2){
    return n1 > n2 ? n1 : n2;
}

console.log(biggerNum(9, 4));

// Forma mais compactada usando arrow function

const biggerNum2 = (x, y) => x > y ? x : y;
console.log(biggerNum2(10, 20));