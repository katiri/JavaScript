// O finally é um bloco de código que que sempre será executado após o try catch, mas pode ser omitido

try {
    // console.log(a);
    console.log('Abri um arquivo');
    console.log('Manipulei o arquivo e gerou erro');
    console.log('Fechei o arquivo'); // Essa linha é ignorada por o erro leva direto pro bloco catch
}
catch(error){
    // É executada quando há erros
    console.log('Tratando o erro');

    // Não posso fechar o arquivo aqui por que não sei se vai realmente acontecer um erro
}
finally{
    // Sempre executa independente de ter erro
    console.log('FINALLY: Eu sempre sou executado');
}

console.log('');


// Mais exemplos

function retornaHora(data){
    if(data && !(data instanceof Date)){ // Data tem que ser algo como new Date()
        throw new TypeError('Esperando instância de Date.'); // TypeError é para erro em que se esperava um dado de tipo diferente
    }

    if(!data){
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
}

try{
    const hora1 = retornaHora();
    console.log(hora1);

    const data = new Date('12-06-2001 16:00:00')
    const hora2 = retornaHora(data);
    console.log(hora2);

    const hora3 = retornaHora(41);
    console.log(hora3);
}
catch(error){
    // Tratar erro
}
finally{
    console.log("Tenha um bom dia");
}