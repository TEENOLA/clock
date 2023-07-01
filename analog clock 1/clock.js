let hrs = document.getElementById('hour')
let mins = document.getElementById('minute')
let secs = document.getElementById('second')

function time(){

	const newTime = new Date();

	
	let secHand = newTime.getSeconds()
	let minHand = newTime.getMinutes()
	let hrHand = newTime.getHours()
    
   
   secs.style.transform = `rotate(${((secHand/60 * 360) )}deg)`
   mins.style.transform = 'rotate(' + ((minHand/60 * 360) ) + 'deg)'
   hrs.style.transform = 'rotate(' + ((hrHand/12 * 360) ) + 'deg)'
}

setInterval(time,100)
