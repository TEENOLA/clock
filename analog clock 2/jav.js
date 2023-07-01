const secondsHand = document.getElementById('seconds-hand');
const minutesHand = document.getElementById('minutes-hand');
const hoursHand = document.getElementById('hours-hand');

function time() {
    const newTime = new Date();
    const minutesHandDeg = newTime.getMinutes()/60 * 360;
    const secondsHandDeg = newTime.getSeconds()/60 * 360;
    const hoursHandDeg = newTime.getHours()/12 * 360;

    minutesHand.style.transform = `rotate(${minutesHandDeg}deg)`;
    secondsHand.style.transform = `rotate(${secondsHandDeg}deg)`;
    hoursHand.style.transform = `rotate(${hoursHandDeg}deg)`;
}

setInterval(time, 100);