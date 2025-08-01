/**
 * Uma função geradora pode retornar valores diferentes de acordo com quantas vezes ela foi chamada
 * 
 * Na primeira vez executa parte do código até retornar o primeiro valor
 * Na segunda vez executa tudo o anterior, mais um pouco e retorna o segundo valor
 * Na terceira ...
 * 
 * É interessante para executar certas funções em uma ordem correta, respeitando uma fila
 */

function* geradora1(){
    // Um código qualquer ...
    yield 'Valor 1';

    // Um código qualquer ...
    yield 'Valor 2';
    
    // Um código qualquer ...
    yield 'Valor 3';
}

const g1 = geradora1();

console.log(g1); // Object [Generator] {}

// Para utilizar do yield tem que usar o next();
// Isso vai retornar um objeto com 'value' e 'done'
// 'value' é o valor retornado em yield
// 'done' é um boolean que me diz se a função ainda tem mais valores para retornar (true acabou - false ainda tem mais)
console.log(g1.next().value);
console.log(g1.next().done);
console.log(g1.next());
console.log(g1.next());

console.log('');


// Usando o for
const g1_1 = geradora1();
for(let valor of g1_1){
    console.log(valor);
}

console.log('');


// Criando uma função geradora infinita que sempre vai ter mais um valor para entregar
function* geradora2(){
    let i = 0;

    while(true){
        yield i;
        i++;
    }
}

const g2 = geradora2();
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
// ...

console.log('')


// Função geradora que delega tarefa para outra função geradora

function* geradora3(){
    yield 1;
    yield 2;
    yield 3;
}

function* geradora4(){
    yield* geradora3(); // Vai retornar todos os yields da geradora3 antes de seguir pros próximos dela mesma

    yield 4;
    yield 5;
    yield 6;
}

const g4 = geradora4();
for(let valor of g4) console.log(valor);

console.log('');


// Usando o return ele encerra a função geradora, se for chamada novamente não vai ter um próximo valor

function* geradora5(){
    yield 1;
    yield 2;
    yield 3;
    
    return 4;

    yield 5;
}

const g5 = geradora5();
console.log(g5.next().value);
console.log(g5.next().value);
console.log(g5.next().value);
console.log(g5.next().value);
console.log(g5.next().value);