/* setInterval e setTimeout são funções presentes tanto no navegador quanto no node
 * 
 * Ambas funcionam para inserir intervalos de tempo no código
*/

function retornaHora(){
    const data = new Date();

    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
}

function funcaoDoInterval(){
    console.log(retornaHora());
}

// setInterval(funcaoDoInterval, 1000); // Execute a função passada de 1000 em 1000 milissegundos

// setInterval(function (){
//     console.log(retornaHora());
// }, 1000);

// Importante destacar que setInterval não tem fim, vai executar até algo forcar sua parada

const timer = setInterval(function (){
    console.log(retornaHora());
}, 1000);

// setTimeout: é semelhante a setInterval, mas vai executar sua função depois de um periodo de tempo apenas 1 vez

setTimeout(function (){
    clearInterval(timer);
}, 5000);

setTimeout(function (){
    console.log(retornaHora());
    console.log('Olá mundo');
}, 5000);
