let startBtn = document.querySelector(".btn-start");
let stopBtn = document.querySelector(".btn-stop");
let resetBtn = document.querySelector(".btn-reset");

let counter = document.querySelector(".counter");

let totalSeconds = 0;
let intervalId;
let isTimer =false;
//3 4 11
function pad(num){
    // return num<10 ? "0"+num:num
    // 3/
    // 12 13
    if(num<10){
        return "0" +num
        // 03
    }
    else {
        return num;
    }
}
//03 04 11

function updateCounter() {
    totalSeconds++;
    let hours = Math.floor(totalSeconds/3600);
    let minutes = Math.floor((totalSeconds%3600)/60);
    let seconds = Math.floor(totalSeconds%60);

    let formatTiming=pad(hours) + ":" +pad(minutes) + ":" +pad(seconds);

    counter.textContent=formatTiming;
}

startBtn.addEventListener("click",function(){
    if(isTimer){
        return;
    }
    intervalId = setInterval(updateCounter,100);
    // console.log(intervalId)
    isTimer=true;
})
resetBtn.addEventListener("click",function(){
    totalSeconds=0;
    counter.textContent="00:00:00";
    clearInterval(intervalId);
    isTimer=false;
})

stopBtn.addEventListener("click",function(){

    clearInterval(intervalId);
    isTimer=false;
})



