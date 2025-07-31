/* O escopo lexico no contexto de funções quer dizer que ela sabe onde ela foi declarada e o que foi declara no mesmo grupo que ela (vizinhança)
 * 
*/

const nome = 'João';

function falaNome(){
    // Sabe-se que possível declarar variáveis com nomes iguais desde que em escopos diferentes
    // Nesse caso a função prioriza o que está dentro do próprio escopo
    // const nome = 'Pedro'; // Isso vai fazer ser exibido Pedro

    // Uma função pode acessar as variáveis declaradas na sua viznhança (Mesmo nível de escopo da declaração da função em si)
    console.log(nome);
}

function usaFalaNome(){
    const nome = 'Pedro';
    falaNome();
    // Apesar de a função ser executada aqui, ela lembra de onde foi declarada e do que foi declarada na vizinhança, 
    // portanto não tem acesso as variáveis do escopo de onde foi executada
}

usaFalaNome(); // João