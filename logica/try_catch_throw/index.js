/* try, catch e throw são palavras reservadas relacionadas a um dos meios de tratar e lançar erros
 * 
 * 
*/

try { // Tente fazer algo que potencialmente pode gerar erro
    console.log(naoExisto);
}
catch (error) { // Se gerar erro, recebe o erro e faz algo
    console.log('naoExisto não existe');
    console.log(error);
}   

console.log('');


// Usando throw

function soma(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        // throw ('x e y precisam ser números.'); // Isso vai mostrar apenas uma string no erro (Vai faltar informações)
        // throw new Error('x e y precisam ser números.');
        throw new ReferenceError('x e y precisam ser números.');
    }

    return x + y;
}

try{
    soma('10', '30');
}
catch(error){
    console.log(error); // Não é interessante que o usuário veja esses erros
}