/* Funções de callback são funções que são executadas após uma determinada ação ser realizada
 * 
 * No desenvolvimento web algumas funções podem demorar mais que outras para serem executas, mas existem situações
 * em que uma função só deve ser executada após outra ter sido finalizada
 * 
 * Exemplos:
*/

function random(min, max){
    max++;
    return Math.floor(Math.random() * (max - min) + min);
}

function f1(callback){
    setTimeout(function (){ // Esse setTimeout serve para simular processos demorados na web
        console.log(`f1`);
        if(callback) callback();
    }, random(0, 5000));
}

function f2(callback){
    setTimeout(function (){
        console.log(`f2`);
        if(callback) callback();
    }, random(0, 5000));
}

function f3(callback){
    setTimeout(function (){
        console.log(`f3`);
        if(callback) callback();
    }, random(0, 5000));
}

// Essas serão executadas de forma aleatória e fora de ordem
// f1();
// f2();
// f3();

// Essas serão executadas exatamente na ordem independente de quanto tempo cada uma demorar;
// f1(function (){
//     f2(function (){
//         f3(function (){
//             console.log('Olá mundo!');
//         });
//     });
// });

// Essa forma pode deixar o código bagunçado ou com muita identação dependendo de quanto callbacks tiver
// posso declarar funções callback e usar elas no lugar das funções anônimas:
f1(f1Callback);

function f1Callback(){
    f2(f2Callback);
}

function f2Callback(){
    f3(f3Callback);
}

function f3Callback(){
    console.log('Olá mundo');
}