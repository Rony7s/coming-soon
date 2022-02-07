// Set the date we're counting down to m/d/y/h/m/s
var finalDate = new Date("Jan 01, 2023 00:00:00").getTime();


// Update the count down every 1 second
var x = setInterval(function() {

// Get todays date and time m/d/y/h/m/s
var today = new Date().getTime();

// Find the count Times between today an the count down date
var countTime = finalDate - today;

// Time calculations for days, hours, minutes and seconds
var days = Math.floor(countTime / (1000 * 60 * 60 * 24));
var hours = Math.floor((countTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((countTime % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((countTime % (1000 * 60)) / 1000);

// Display the result in an element with id="name"
document.getElementById("days").innerHTML = days ;
document.getElementById("hours").innerHTML =  hours ;
document.getElementById("minutes").innerHTML = minutes ;
document.getElementById("seconds").innerHTML = seconds ;

// If the count down is finished, show 'EXPIRED' text
if (countTime < 0) {
    clearInterval(x);
    document.getElementById("time").innerHTML = "EXPIRED";
}
}, 1000);
