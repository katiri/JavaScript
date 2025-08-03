/**
 * 705.484.450-52   070.987.720-03
 * 
 * 7x 0x 5x 4x 8x 4x 4x 5x 0x
 * 10  9  8  7  6  5  4  3  2
 * 70  0 40 28 48 20 16 15  0 = 237 (somar)
 * 
 * 11 - (237 % 11) = 5 (Primeiro digito) (Se for maior que 9 tem que ser 0)
 * 
 * 
 * 7x 0x 5x 4x 8x 4x 4x 5x 0x 5x
 * 11 10  9  8  7  6  5  4  3  2
 * 77  0 45 32 56 24 20 20  0 10 = 284 (somar)
 * 
 * 11 - (284 % 11) = 2 (Segundo digito) (Se for maior que 9 tem que ser 0)
 * 
 * 705.484.450-52 === 705.484.450-52 // CPF é válido
 */

(function (){
    const form = document.querySelector('#form');
    const resultado = document.querySelector('#resultado');

    function calculaDigito(arrayCPF){
        let tamanho = arrayCPF.length + 1;

        const conta = arrayCPF.reduce((acc, v) => {
            acc += v * tamanho;
            tamanho--;
            return acc;
        }, 0);

        const digito = 11 - (conta % 11);

        return digito > 9 ? 0 : digito;
    }

    function validarCPF(cpf){
        const cpfTratado = cpf.replace(/\D+/g, '');
        let arrayCPF = Array.from(cpfTratado);
        
        arrayCPF = arrayCPF.map(v => Number(v));

        const digito1 = calculaDigito(arrayCPF.slice(0, -2));
        const digito2 = calculaDigito(arrayCPF.slice(0, -1));

        const resultadoCPF = arrayCPF.slice(0, -2).join('') + digito1 + digito2;

        if(resultadoCPF === cpfTratado){
            resultado.classList.remove('invalid');
            resultado.classList.add('valid');
            resultado.innerText = 'O CPF digitado é válido';
        }
        else{
            resultado.classList.remove('valid');
            resultado.classList.add('invalid');
            resultado.innerText = 'O CPF digitado é inválido';
        }
    }

    form.addEventListener('submit', event => {
        event.preventDefault();

        const inputCPF = form.querySelector('#cpf');

        validarCPF(inputCPF.value);
    });
})();