(function(){
    function criaCalculadora(){
        return {
            estado: 'Desligada',
            display: document.querySelector('#display'),
            botoes: document.querySelector('#botoes'),
            
            
            liga(){
                this.estado = 'Ligada';
                this.clickBotoes();
                this.pressionaTeclas();
            },
            desliga(){
                this.estado = 'Desligada';
            },
            setInDisplay(valor){
                this.display.value += valor;
            },
            clearDisplay(){
                this.display.value = '';
            },
            delInDisplay(){
                this.display.value = this.display.value.slice(0, -1);
            },
            execute(){
                try{
                    // A função eval lê uma string e tenta executar o que tem nela como se fosse código
                    // Isso pode ser perigoso quando a tring analisada é passada por meio de input
                    // O usuário poderia tentar passar um código malcioso que seria executado
                    // Para esse exercício serve
                    const resultado = eval(this.display.value);
                    
                    if(!resultado){
                        alert('Conta inválida');
                    }

                    this.display.value = resultado;
                }
                catch(error){
                    alert('Conta inválida');
                }
            },
            clickBotoes(){
                this.botoes.addEventListener('click', function(e){
                    const el = e.target;

                    if(
                        el.classList.contains('number') ||
                        el.classList.contains('operator') ||
                        el.classList.contains('manipulator')
                    ) this.setInDisplay(el.innerText);

                    if(el.classList.contains('clear')) this.clearDisplay();

                    if(el.classList.contains('execute')) this.execute();

                    if(el.classList.contains('del')) this.delInDisplay();
                }.bind(this));
                // bind(this) faz com que a função executada em addEventListener use o this do método de calculadora e não o próprio this
                // Não precisaria do bind se eu usasse (e) => {} ao invés de function (e){}
            },
            pressionaTeclas(){
                document.addEventListener('keyup', function(e){
                    const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
                    const operator = ['+', '-', '*', '/'];
                    const manipulators = ['(', ')', '.'];

                    const clear = 'C';
                    const execute = 13;
                    const del = 8;

                    if(
                        numbers.indexOf(e.key) !== -1 ||
                        operator.indexOf(e.key) !== -1 ||
                        manipulators.indexOf(e.key) !== -1
                    ) this.setInDisplay(e.key);

                    if(e.key === clear) this.clearDisplay();

                    if(e.keyCode === execute) this.execute();

                    if(e.keyCode === del) this.delInDisplay();
                }.bind(this));
            }
        };
    }

    const calculadora = criaCalculadora();
    calculadora.liga();
})();