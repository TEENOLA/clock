let hr = document.getElementById('hour');
let min = document.getElementById('minute');
let sec = document.getElementById('seconds');
let period = document.getElementById('period')

let clock = setInterval(function time() {
    let currentDate = new Date();
    let hr = currentDate.getHours();
    let min = currentDate.getMinutes();
    let sec = currentDate.getSeconds();
    

    if(hr>=12){
        period.innerHTML = 'PM'
    }else{
        period.innerHTML = 'AM'
    }

    if(hr < 10){
         hr = '0' + hr
    }
    if(min<10){
         min = '0' + min
    }
    if(sec<10){
         sec = '0' + sec
    }

document.getElementById('hour').innerHTML = hr
document.getElementById('minute').innerHTML = min
document.getElementById('seconds').innerHTML = sec

    
}, 1000);