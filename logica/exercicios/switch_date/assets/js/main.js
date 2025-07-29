function escopo(){
    const date = new Date();
    const dateText = document.querySelector('#dateText');

    function getWeekDayText(date){
        const weekDay = date.getDay();

        switch(weekDay){
            case 0:
                return 'domingo';
            case 1:
                return 'segunda-feira';
            case 2:
                return 'terça-feira';
            case 3:
                return 'quarta-feira';
            case 4:
                return 'quinta-feira';
            case 5:
                return 'sexta-feira';
            case 6:
                return 'sábado';
        }
    }

    function getMonthText(date){
        const month = date.getMonth();

        switch(month){
            case 0:
                return 'janeiro';
            case 1:
                return 'fevereiro';
            case 2:
                return 'março';
            case 3:
                return 'abril';
            case 4:
                return 'maio';
            case 5:
                return 'junho';
            case 6:
                return 'julho';
            case 7:
                return 'agosto';
            case 8:
                return 'setembro';
            case 9:
                return 'outubro';
            case 10:
                return 'novembro';
            case 11:
                return 'dezembro';
        }
    }

    function leftZero(num){
        return num < 10 ? `0${num}` : num;
    }

    const weekDayText = getWeekDayText(date);
    const day = date.getDate();
    const monthText = getMonthText(date);
    const year = date.getFullYear();
    const hour = leftZero(date.getHours());
    const minute = leftZero(date.getMinutes());

    const text = `${weekDayText}, ${day} de ${monthText} de ${year} ${hour}:${minute}`;

    dateText.innerHTML = text;
}
escopo();