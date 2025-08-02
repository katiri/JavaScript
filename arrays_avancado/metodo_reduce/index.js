/**
 * Reduce é um método que serve para reduzir/resumir um array em um único elemento
 * 
 * A diferença de reduce para map e filter é que dos parametros passados na função callback, existe mais um que é o acumulador
 * Além do parametro acumulador na função callback o método reduce em si recebe também um segundo parametro que é o valor inicial do acumulador,
 * se nada for passado acumulador vai ter o mesmo valor do primeiro elemento do array
 */

// Qual a somatória dos números no array?
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

let soma = 0;
for(let num of numeros){
    soma += num;
}
console.log(soma);

// Com reduce
const somatoria = numeros.reduce((acumulador, v) => {
    // console.log(acumulador);
    return acumulador += v;
}, 0);
console.log(somatoria);


// O reduce também pode funcionar como filter e/ou map:
const numerosMaiores10 = numeros.reduce((a, v) => {
    if(v > 10) a.push(v);
    return a
}, []);

console.log(numerosMaiores10);

const numerosDobrados = numeros.reduce((a, v) => {
    a.push(v * 2);
    return a;
}, []);
console.log(numerosDobrados);


// Retorne a pessoas mais velha
const pessoas = [
    {nome: 'Luiz', idade: 32},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 62},
    {nome: 'Wallace', idade: 47}
];

const pessoaMaisVelha = pessoas.reduce((a, v) => {
    if(v.idade > a.idade) a = {...v};
    return a;
});

console.log(pessoaMaisVelha);