function escopo(){
    const container = document.querySelector('.container');

    const elementos = [
        {tag: 'p', texto: 'Frase 1'},
        {tag: 'div', texto: 'Frase 2'},
        {tag: 'footer', texto: 'Frase 3'},
        {tag: 'section', texto: 'Frase 4'}
    ];

    for(let i = 0; i < elementos.length; i++){
        let {tag, texto} = elementos[i];
        let elemento = document.createElement(tag);
        
        // elemento.innerHTML = texto;
        // elemento.innerText = texto;
        let textoCriado = document.createTextNode(texto)
        elemento.appendChild(textoCriado);

        container.appendChild(elemento);
    }
}
escopo();