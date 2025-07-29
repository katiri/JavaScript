function escopo(){
    const date = new Date();
    const dateText = document.querySelector('#dateText');

    dateText.innerHTML = date.toLocaleString('pt-BR', {
        dateStyle: 'full',
        timeStyle: 'short'
    });
}
escopo();