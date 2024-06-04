const turnOn = document.getElementById('buttonOn');
const turnOff = document.getElementById('buttonOff');
const lamp = document.getElementById('lamp');

function isLampBroken(){
    return lamp.src.indexOf('quebrada') > -1;
}

function ligarOn(){
    if(!isLampBroken()){
        lamp.src = './img/lampada.jpeg';
    }
}

function desligarOff(){
    if(!isLampBroken()){
        lamp.src = './img/desligada.jpg';
    }
}

function quebrarLamp(){
    lamp.src = './img/quebrada.jpg';
}


turnOn.addEventListener('click', ligarOn);
turnOff.addEventListener('click', desligarOff);
lamp.addEventListener('mouseover', ligarOn);
lamp.addEventListener('mouseleave', desligarOff);
lamp.addEventListener('dblclick', quebrarLamp);
