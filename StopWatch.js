let time=0;
function stopwatch(){
time++;
let millisec= time%100;
let sec= Math.floor((time/100)%60);
let min= Math.floor((time/(100*60)));
document.getElementById("res").textContent=`${min}:${sec}:${millisec}`;
} setInterval(stopwatch,10);