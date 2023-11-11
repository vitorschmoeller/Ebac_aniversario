AOS.init();

const birthday = new Date("jul 1, 2024 19:00:00");
const timeStamp = birthday.getTime();

const contaTempo = setInterval(function(){
    const dataAtual = new Date();
    const timeStampAtual = dataAtual.getTime();

    const distanciaAteBirthday = timeStamp - timeStampAtual;
    
    
    const diaBirthday = Math.floor(distanciaAteBirthday / (1000*60*60*24));
    const horaBirthday = Math.floor((distanciaAteBirthday % (1000*60*60*24)) / (1000*60*60));
    const minutoBirthday = Math.floor((distanciaAteBirthday % (1000*60*60))/ (1000*60));
    const segundoBirthday = Math.floor((distanciaAteBirthday % (1000 * 60)) / 1000);
    

    document.getElementById('contador').innerHTML = `${diaBirthday}d ${horaBirthday}h ${minutoBirthday}m ${segundoBirthday}s`
    

    if (distanciaAteBirthday < 0 ) {
        clearInterval(contaTempo);
        document.getElementById('contador').innerHTML = `Evento expirado`;
    }

},1000)

    