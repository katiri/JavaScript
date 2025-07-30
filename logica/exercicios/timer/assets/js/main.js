function escopo(){
    const timer = document.querySelector('#timer');
    const iniciar = document.querySelector('#iniciar');
    const pausar = document.querySelector('#pausar');
    const zerar = document.querySelector('#zerar');
    let timerInterval;

    function leftZero(num){
        num = Number(num);
        return num < 10 ? `0${num}` : num;
    }

    function getValueTimer(){
        let valueTimer = timer.innerHTML;
        valueTimer = valueTimer.split(':');

        for(let i in valueTimer){
            valueTimer[i] = Number(valueTimer[i]);
        }

        return valueTimer;
    }

    iniciar.addEventListener('click', function (event){
        timer.classList.remove('pausado');

        clearTimeout(timerInterval);
        timerInterval = setInterval(function (){
            let [hour, minute, second] = getValueTimer();

            second++;
            
            if(second === 60){
                minute++;
                second = 0;
            }

            if(minute === 60){
                hour++;
                minute = 0;
            }

            hour = leftZero(hour);
            minute = leftZero(minute);
            second = leftZero(second);

            timer.innerHTML = `${hour}:${minute}:${second}`;
        }, 1000);
    });

    pausar.addEventListener('click', function (event){
        clearTimeout(timerInterval);
        timer.classList.add('pausado');
    });

    zerar.addEventListener('click', function (event){
        clearTimeout(timerInterval);
        timer.classList.remove('pausado');
        timer.innerHTML = `00:00:00`;
    });
}
escopo();