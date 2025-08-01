/**
 * Funções recursivas são funções que podem chamar a si mesmas
 * 
 * Algo similar ao que estruturas de repetição fazem
 */

// Importante destacar que o motor js/node tem um limite para recursividade e pode interromper seu código
// testei até uns 10350 loops e deu erro, varia um pouco
function recursiva(max){
    if(max >= 10) return; // Sempre tomar cuidado para não criar loop infinito
    
    console.log(max);
    
    max++;
    
    recursiva(max);
}

recursiva(0);