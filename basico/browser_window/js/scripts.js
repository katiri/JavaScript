/* Alert:
 * Janela que mostra aviso e só continua o código após o usuário clicar em "ok"
 * Ao clicar no "ok" só retorna undefined
*/ 

window.alert('Teste');
alert('Teste');

console.log(alert('Teste')); // undefined

/* Confirm:
 * Janela que mostra texto e dois botões, um "ok" e um "cancelar"
 * Se clicar em "ok" retorna true
 * Se clicar em "cancelar" retorna false
*/ 

window.confirm('Confirma?');
confirm('Confirma?');

console.log(confirm('Clicar em "ok"')); // true
console.log(confirm('Clicar em "cancelar"')); // false

/* Prompt:
 * Janela que mostra texto e também um campo para ser preenchido com texto
 * Ao digitar um texto e clicar em "ok" retorna o que foi digitado sempre no formato de string
 * Ao não digitar nada e clicar em "ok" retorna uma string vazia
 * Ao clicar em "cancelar" retorna null
*/ 

window.prompt('Digite um texto:');
prompt('Digite um texto:');

console.log(prompt('Digite um texto:')); // 'texto digitado'
console.log(prompt('Não digite nada e clique em "ok":')); // ''
console.log(prompt('Clique em "cancelar":')); // null