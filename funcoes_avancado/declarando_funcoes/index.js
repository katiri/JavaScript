/* Declaração normal de função
 * 
 * Funções são first-class objects (Objetos de primeira classe)
 * - Significa que a função pode ser tratada como dado
*/ 

// Funções declaradas dessa maneira passam pelo processo de hoisting do js
function falaOi(){
    console.log('Oi');
}

falaOi();


// Funções são first-class objects (Objetos de primeira classe)
// - Significa que a função pode ser tratada como dado

const souUmDado = function (){
    console.log('Sou um dado');
};

souUmDado();

// Isso permite o seguinte:

function executaFuncao(funcao){
    funcao();
}

executaFuncao(souUmDado);


// Arrow Functions:

const funcaoArrow = () => {
    console.log('Arrow Function');
};

funcaoArrow();

const funcaoArrow2 = () => console.log('Arrow Function 2');
funcaoArrow2();


// Métodos de objetos

const pessoa = {
    falar: function (){
        console.log('Falando');
    },

    falar2: () => console.log('Falando 2'),

    falar3: () => {
        console.log('Falando 3');
    },

    falar4(){
        console.log('Falando 4');
    }
};

pessoa.falar();
pessoa.falar2();
pessoa.falar3();
pessoa.falar4();