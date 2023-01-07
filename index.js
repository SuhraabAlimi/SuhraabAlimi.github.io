// Set the date we're counting down to
var countDownDate = new Date("May 26, 2023 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    document.getElementById("demo").innerHTML = "Only " + days + "D  " + hours + "H "
	+ minutes + "M " + "and " + seconds + "S Left Until SUPER Sale Ends!! Act Fast!!";

    // If the count down is finished, write some text
    if (distance < 0) {
	clearInterval(x);
	document.getElementById("demo").innerHTML = "Too Late!!";
    }
}, 1000);

function sussy ()
{
    location.replace("https://www.google.com/maps/place/1509+riverdale+dr+allen+tx/@33.1230448,-96.7090652,3a,75y,161.51h,90t/data=!3m4!1e1!3m2!1sC1Bv8HfpjfCpfEzisIgkzw!2e0!4m2!3m1!1s0x864c17aad6c4c905:0x605007774ecffb6d?sa=X&ved=2ahUKEwjvrbqu0c75AhVAlWoFHTDmDFQQxB16BAglEAI");
}
function isp_sussy ()
{
    location.replace("CS-III/isp.html");
}
function white ()
{
    location.replace('../index.html');
}
function suessy ()
{
    location.replace('CS-III/classes.html');
}
function important ()
{
    location.replace('CS-III/important.html')
}
function fingerk ()
{
    location.replace('CS-III/Essays/finger.html')
}
function sustience ()
{
    location.replace('CS-III/Essays/AI%20Sentience.html')
}
function Gitsus()
{
    location.replace('https://suhraabalimi.github.io/');
}
function Optisus()
{
    location.replace('CS-III/Projects/Optimal%20Sort.html');
}

function gayntt()
{
    location.replace('CS-III/Projects/Business%20Plan/index.html');
}
function clashRoyale()
{
    location.replace('CS-III/Projects/Business%20Plan/considered.html');
}
function gregorSamsa()
{
    location.replace('CS-III/Projects/ISP/index.html');
}
function readIfStupid()
{
    location.replace('CS-III/Essays/Decision%20Making.html');
}
function jourNal()
{
    location.replace('CS-III/Projects/ISP/Journal.html');
}

