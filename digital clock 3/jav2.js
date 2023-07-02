let hrs =document.getElementById("hrs")
let min =document.getElementById("min")
let sec =document.getElementById("sec")
let period = document.getElementById("period")

setInterval(function(tellTime){

 let currentTime = new Date();   
hrs.innerHTML = (currentTime.getHours()<10?"0":"")+ currentTime.getHours()
min.innerHTML = (currentTime.getMinutes()<10?"0":"")+ currentTime.getMinutes()
sec.innerHTML = (currentTime.getSeconds()<10?"0":"")+ currentTime.getSeconds()
period.innerHTML = hrs >= 12 ? "PM" : "AM"; 

},1000)

