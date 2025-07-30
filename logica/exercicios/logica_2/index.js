/* Escreva uma função chamada ePaisagem que receba dois argumentos, largura e altura de uma imagem (number).
 * 
 * Retorne true se essa imagem estiver no modo paisagem.
 * 
*/

function ePaisagem(w, h){
    // return w > h ? true : false;
    return w > h;
}

console.log(ePaisagem(1920, 1080));

// Arrow function

// const ePaisagem2 = (w, h) => w > h ? true : false;
const ePaisagem2 = (w, h) => w > h;

console.log(ePaisagem2(1080, 1920));