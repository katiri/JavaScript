/* For in é uma variação da estrutura de repetição for
 * 
 * Utilizada para percorrer os índices de arrays e as chaves de objetos de forma mais intuitiva
 * 
*/

const frutas = ['Pera', 'Maçã', 'Uva'];

// Forma tradicional

for(let i = 0; i < frutas.length; i++){
    console.log(frutas[i]);
}

// Usando for in

for(let i in frutas){
    console.log(frutas[i]);
}


// Usando com objetos

const pessoa = {
    nome: 'João',
    sobrenome: 'Ramos',
    idade: 24
};

for(let i in pessoa){
    console.log(i, pessoa[i]);
}