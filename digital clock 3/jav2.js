let hrs =document.getElementById("hrs")
let min =document.getElementById("min")
let sec =document.getElementById("sec")
let period = document.getElementById("period")


setInterval(()=>{

let currentTime = new Date();

if (hrs >= 12){
    period.innerHTML = 'PM'
}else{
    period.innerHTML = 'AM'
}

hrs.innerHTML = (currentTime.getHours()<10?"0":"")+ currentTime.getHours()
min.innerHTML = (currentTime.getMinutes()<10?"0":"")+ currentTime.getMinutes()
sec.innerHTML = (currentTime.getSeconds()<10?"0":"")+ currentTime.getSeconds()

},1000)

