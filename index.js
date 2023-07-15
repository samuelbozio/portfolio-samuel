const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const relogio = setInterval(function time(){
    let horaAtual = new Date();


    let hr = horaAtual.getHours();
    let min = horaAtual.getMinutes();
    let sec = horaAtual.getSeconds();

    horas.innerText = hr;
    minutos.innerText = min;
    segundos.innerText = sec;

});