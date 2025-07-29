/* Switch case é um tipo de estrutura condicional
 * Mais utilizada quando já se tem mapeados todos os valores possíveis
 * 
*/

const data = new Date();
let diaSemana = data.getDay();
let diaSemanaTexto;

// Forma normal
if(diaSemana === 0){
    diaSemanaTexto = 'Domingo';
}
else if(diaSemana === 1){
    diaSemanaTexto = 'Segunda';
}
else if(diaSemana === 2){
    diaSemanaTexto = 'Terça';
}
else if(diaSemana === 3){
    diaSemanaTexto = 'Quarta';
}
else if(diaSemana === 4){
    diaSemanaTexto = 'Quinta';
}
else if(diaSemana === 5){
    diaSemanaTexto = 'Sexta';
}
else if(diaSemana === 6){
    diaSemanaTexto = 'Sábado';
}
else{
    diaSemanaTexto = 'Erro';
}

console.log(diaSemana, diaSemanaTexto);


// Com switch

diaSemana = 0
diaSemanaTexto = undefined;

switch(diaSemana){
    case 0:
        diaSemanaTexto = 'Domingo';
        break;
    case 1:
        diaSemanaTexto = 'Segunda';
        break;
    case 2:
        diaSemanaTexto = 'Terça';
        break;
    case 3:
        diaSemanaTexto = 'Quarta';
        break;
    case 4:
        diaSemanaTexto = 'Quinta';
        break;
    case 5:
        diaSemanaTexto = 'Sexta';
        break;
    case 6:
        diaSemanaTexto = 'Sábado';
        break;
    default:
        diaSemanaTexto = 'Erro';
        break;
}

console.log(diaSemana, diaSemanaTexto);


// Usando em função

function getDiaSemanaTexto(diaSemana){
    switch(diaSemana){
        case 0:
            return 'Domingo';
        case 1:
            return 'Segunda';
        case 2:
            return 'Terça';
        case 3:
            return 'Quarta';
        case 4:
            return 'Quinta';
        case 5:
            return 'Sexta';
        case 6:
            return 'Sábado';
        default:
            return 'Erro';
    }
}

diaSemanaTexto = getDiaSemanaTexto(5);

console.log(diaSemanaTexto);