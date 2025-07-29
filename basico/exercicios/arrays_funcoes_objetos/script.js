function escopo(){
    const form = document.querySelector('.form');
    const results = document.querySelector('.results');

    const pessoas = [];
    
    // form.onsubmit = function (evento){
    //     evento.preventDefault(); // Isso evita o comportamento padrão do evento, no caso submeter o formulário
    // };

    function criaPessoa(nome, lastname, weight, height){
        return {
            nome,
            lastname,
            weight,
            height
        };
    }

    function recebeEventoForm(evento){
        evento.preventDefault();

        const name = form.querySelector('.name');
        const lastname = form.querySelector('.lastname');
        const weight = form.querySelector('.weight');
        const height = form.querySelector('.height');

        const pessoa = criaPessoa(name.value, lastname.value, weight.value, height.value);

        pessoas.push(pessoa);

        console.log(pessoas);

        results.innerHTML += `<p>${name.value} ${lastname.value} ${weight.value} ${height.value}</p>`;
    }

    form.addEventListener('submit', recebeEventoForm);
}

escopo();