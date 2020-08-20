function register()
{
    window.open("https://tinyurl.com/y88jzle5");
}


var deadline = new Date("aug 26, 2020 00:00:00").getTime(); 
var x = setInterval(function() { 
    var now = new Date().getTime(); 
    var t = deadline - now;
    if(t>0){ 
        var days = Math.floor(t / (1000 * 60 * 60 * 24)); 
        var hours = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60)); 
        var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60)); 
        var seconds = Math.floor((t % (1000 * 60)) / 1000); 
        document.getElementById("days").innerHTML =days; 
        document.getElementById("hours").innerHTML =hours; 
        document.getElementById("minutes").innerHTML = minutes;  
        document.getElementById("seconds").innerHTML =seconds;
    }
else{
    document.getElementById("reg").innerHTML ="Registration has been closed. Hope you have Registered!!!";
    document.getElementById("days").innerHTML ="0"; 
    document.getElementById("hours").innerHTML ="0"; 
    document.getElementById("minutes").innerHTML ="0";
    document.getElementById("seconds").innerHTML ="0";
}
}, 1000);




    