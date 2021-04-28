const turnOn = document.getElementById('turnOn');
const turnOff = document.getElementById('turnOff');
const lamp = document.getElementById('lamp');

function isLampbroken() {
    return lamp.src.indexOf('quebrada') > -1
}

function lampOn() {
    if ( !isLampbroken() ) {
        lamp.src = './image/ligada.jpg';
    }
}

function lampOff() {
    if ( !isLampbroken() ) {
        lamp.src = './image/desligada.jpg';
    }
}

function lampBroken() {
    lamp.src = ',/image/quebrada.jpg';
}

turnOn.addEventListener('click', lampOn);
turnOff.addEventListener('click', lampOff);
lamp.addEventListener('mouseover', lampOn);
lamp.addEventListener('mouseleave', lampOff);
lamp.addEventListener('dbclick', lampBroken);