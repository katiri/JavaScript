/* O objeto Date é o objeto padrão do javascript para manipulação de datas
*/

const date = new Date();
console.log(date);
console.log(date.toString());

const date1 = new Date(0); // Data inicial padrão -> 01/01/1970 00:00:00
console.log(date1);

const ano_ms = 365 * 24 * 60 * 60 * 1000; // 1 ano em milésimos de segundo
const date2 = new Date(ano_ms * 5); // 5 anos após a data padrão 31/12/1974;
console.log(date2);

const date3 = new Date(2019, 3, 20, 15, 14, 27, 500); // ano, mês (começa em 0), dia, hora, minuto, segundo (Dessa forma pelo menos dois paramêtros para não consideras ms)
console.log(date3); // 20/04/2019 15:14:27:500
console.log(date3.toString()); // 20/04/2019 15:14:27:500

const date4 = new Date('2022-06-12 20:51:29');
console.log(date4.toString());

console.log(Date.now()); // Milésimos de segundo que representam a data atual

console.log(''); // Pular linha

// Formas de exibição

console.log(date);
console.log(date.toString());
console.log('Dia', date.getDate());
console.log('Mês', date.getMonth()); // Mês começa em 0 no js, então é sempre date.getMonth() + 1
console.log('Ano', date.getFullYear());
console.log('Hora', date.getHours());
console.log('Minuto', date.getMinutes());
console.log('Segundo', date.getSeconds());
console.log('Milisegundo', date.getMilliseconds());
console.log('Dia da semana', date.getDay()); // Dia da semana começa em 0 no js, então 2 é o terceiro dia, terça (começa no domingo)

function zeroEsquerda(num){
    return num < 10 ? `0${num}` : num;
}

function formataData(data){
    const dia = zeroEsquerda(date.getDate());
    const mes = zeroEsquerda(date.getMonth() + 1);
    const ano = date.getFullYear();
    const horas = zeroEsquerda(date.getHours());
    const minutos = zeroEsquerda(date.getMinutes());
    const segundos = zeroEsquerda(date.getSeconds());

    return `${dia}/${mes}/${ano} ${horas}:${minutos}:${segundos}`;
}

const dataBrasil = formataData(date);
console.log(dataBrasil);