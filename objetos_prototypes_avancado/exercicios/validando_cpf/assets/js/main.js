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

    function ValidaCPF(cpfEnviado){
        Object.defineProperty(this, 'cpfLimpo', {
            enumerable: true,
            get: function (){
                return cpfEnviado.replace(/\D+/g, '');
            }
        })
    }
    
    ValidaCPF.prototype.valida = function (){
        if(typeof this.cpfLimpo === 'undefined') return false;
        if(this.cpfLimpo.length !== 11) return false;
        // if(this.isSequencia()) return false;

        const digito1 = this.calculaDigito(this.cpfLimpo.slice(0, -2));
        const digito2 = this.calculaDigito(this.cpfLimpo.slice(0, -1));

        const resultadoCPF = this.cpfLimpo.slice(0, -2) + digito1 + digito2;

        return resultadoCPF === this.cpfLimpo;
    }

    ValidaCPF.prototype.calculaDigito = function (cpfParcial){
        let cpfArray = Array.from(cpfParcial);
        cpfArray = cpfArray.map(v => Number(v));

        let tamanho = cpfArray.length + 1;

        const conta = cpfArray.reduce((acc, v) => {
            acc += v * tamanho;
            tamanho--;
            return acc;
        }, 0);

        const digito = 11 - (conta % 11);

        return digito > 9 ? 0 : digito;
    }

    ValidaCPF.prototype.isSequencia = function (){
        const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
        
        return sequencia === this.cpfLimpo;
    }

    form.addEventListener('submit', event => {
        event.preventDefault();

        const inputCPF = form.querySelector('#cpf');
        
        const cpf = new ValidaCPF(inputCPF.value);

        if(cpf.valida()){
            resultado.classList.remove('invalid');
            resultado.classList.add('valid');
            resultado.innerText = 'O CPF digitado é válido';
        }
        else{
            resultado.classList.remove('valid');
            resultado.classList.add('invalid');
            resultado.innerText = 'O CPF digitado é inválido';
        }
    });
})();