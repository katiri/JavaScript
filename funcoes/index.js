// Blocos de código que fazem o processamento de entradas e entregam uma saída (geralmente pelo menos)
// É interesante por serem reutilizaveis para diferentes ocasiões e valores de entrada

function saudacao(){
    console.log('Olá');
}

saudacao();


// Variáveis exclusivas da função

const teste = 'Teste';

function funcao(){
    const teste = 'Teste da funcao';
    const variavelDaFuncao = 'teste';

    console.log(teste);
}

funcao();
console.log(teste);
// console.log(variavelDaFuncao); // Vai gerar Erro


// Passando valores para a função

function soma(x, y){
    console.log(x + y);
}

soma(13, 43);
soma(154, 23);
soma(1, 3);
soma(10, 4);


// Retorno da função

function somaValor(x, y){
    const soma = x + y;

    console.log(`A soma de ${x} e ${y} é: ${soma}`);

    // return x + y;
    return soma; // Nada após de return é executado

    console.log('Isso não vai ser executado');
}

console.log(soma(10, 5));
console.log(somaValor(10, 5));

const resultado = somaValor(10, 5);
console.log(resultado);

console.log(somaValor());


// Função anônima

const raiz = function (n){
    return n ** 0.5;
};

console.log(raiz(4));
console.log(raiz(16));


// Arrow function

const quadrado = (n) => {
    return n ** 2;
}

console.log(quadrado(4));
console.log(quadrado(16));

const cubo = n => n ** 3;

console.log(cubo(4));
console.log(cubo(16));