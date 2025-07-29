function escopo(){
    const form = document.querySelector('.form');
    const results = document.querySelector('.results');
    const error = document.querySelector('.error');
    
    function envioFormulario(event){
        event.preventDefault();

        const peso = Number(form.querySelector('#peso').value);
        const altura = Number(form.querySelector('#altura').value);
        
        results.innerHTML = '';
        error.innerHTML = '';

        if(Number.isNaN(peso) || !peso){
            error.innerHTML += 'Peso inválido<br>';
        }

        if(Number.isNaN(altura) || !altura){
            error.innerHTML += 'Altura inválida<br>';
        }

        if(peso && altura && !Number.isNaN(peso) && Number.isNaN(altura)){
            const imc = peso / (altura ** 2);
        
            if(imc){ // Se for NaN vai dar false
                results.innerHTML = `Seu IMC é ${imc.toFixed(2)}`;
            }

            if(imc < 18.5){
                results.innerHTML += ' (Abaixo do peso)';
            }
            else if(imc >= 18.5 && imc < 25){
                results.innerHTML += ' (Peso normal)';
            }
            else if(imc >= 25 && imc < 30){
                results.innerHTML += ' (Sobrepeso)';
            }
            else if(imc >= 30 && imc < 35){
                results.innerHTML += ' (Obesidade grau 1)';
            }
            else if(imc >= 35 && imc < 40){
                results.innerHTML += ' (Obesidade grau 2)';
            }
            else if(imc >= 40){
                results.innerHTML += ' (Obesidade grau 3)';
            }
        }
    }

    form.addEventListener('submit', envioFormulario);
}
escopo();