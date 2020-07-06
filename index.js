var min=0;
var sec=0;
var msec=0;
var msecHeading=document.getElementById("msec")
var secHeading=document.getElementById("sec")
var minHeading=document.getElementById("min")
var startBtn=document.getElementById("start")
var stopBtn=document.getElementById("stop")
var resetBtn=document.getElementById("reset")
var interval;
function timer(){
    msec++;
    msecHeading.innerHTML=msec;
    if (msec>=100){
    msec=0;
    sec++;
secHeading.innerHTML=sec}
    else if (sec>=60){
        min++;
        sec=0;
        msec=0

minHeading.innerHTML=min;

    }
    
}


function start(){
    interval=setInterval(timer,10);
    startBtn.disabled=true;
    stopBtn.disabled=false;
resetBtn.disabled=false;

}
function stop(){
    clearInterval(interval);
startBtn.disabled=false;
stopBtn.disabled=true;
resetBtn.disabled=false;
}
function reset(){
    clearInterval(interval);
    msec=0,sec=0,min=0;
    msecHeading.innerHTML=msec;
    secHeading.innerHTML=sec;
    minHeading.innerHTML=min;
    startBtn.disabled=false;
stopBtn.disabled=true;
resetBtn.disabled=true;

}