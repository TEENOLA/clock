function displayTime(){
    // line 3 declares the variable date_time and by assigning the class Date to said variable, an instance of the class Date is assigned by using the keyword "new"
    let date_time = new Date();
    let hours = date_time.getHours();
    let minutes = date_time.getMinutes();
    let seconds = date_time.getSeconds();
    let period = document.getElementById('period');
   
    period.innerHTML = hours >= 12 ? "PM" : "AM";
    // line 16 output is a tenary 
    document.getElementById('hours').innerHTML = (hours < 10 ? "0" : "") + hours;
    document.getElementById('minutes').innerHTML = (minutes < 10 ? "0" : "") + minutes;
    document.getElementById('seconds').innerHTML = (seconds < 10 ? "0" : "") + seconds;
}
setInterval(displayTime, 10);