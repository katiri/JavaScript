/* IF, ELSE IF e ELSE são estruturas condicionais que vão executar diferentes linhas de código dada uma expressão de comparação
 * 
 * IF:
*/

let hora = 10;

if(hora < 12){
    console.log('Bom dia');
}


// ELSE

hora = 12;

if(hora < 12){
    console.log('Bom dia');
}
else{
    console.log('Olá');
}


// ELSE IF

hora = 16;

if(hora < 12){
    console.log('Bom dia');
}
else if(hora >= 12 && hora < 18){
    console.log('Boa tarde');
}
else if(hora >= 18 && hora < 24){
    console.log('Boa noite');
}
else{
    console.log('Olá');
}


// Tudo em uma função

function cumprimentar(hora){
    if(hora >= 0 && hora < 12){
        return 'Bom dia';
    }
    else if(hora >= 12 && hora < 18){
        return 'Boa tarde';
    }
    else if(hora >= 18 && hora < 24){
        return 'Boa noite';
    }
    else{
        return 'Olá';
    }
}

console.log(cumprimentar(9)); // Bom dia
console.log(cumprimentar(12)); // Boa tarde
console.log(cumprimentar(17)); // Boa tarde
console.log(cumprimentar(20)); // Boa noite
console.log(cumprimentar('adfda')); // Olá
console.log(cumprimentar(false)); // Bom dia -> false pode ser considerado igual a 0
console.log(cumprimentar(undefined)); // Bom dia -> false pode ser considerado igual a 0
console.log(cumprimentar(null)); // Bom dia -> null pode ser considerado igual a 0
console.log(cumprimentar(NaN)); // Olá
console.log(cumprimentar(-32)); // Olá
console.log(cumprimentar(32)); // Olá