const start = document.getElementById("start")
const reset = document.getElementById("reset")
const stop = document.getElementById("stop")
const input = document.getElementById("input")
const time= document.getElementById("time")
let seconds = 1
let minutes = 0
let hours = 0
let isIntervalCreated = false
let interval

start.addEventListener("click",function () {
    if(isIntervalCreated) return

    interval = setInterval(() => {
        seconds--
        if (minutes == 0 && seconds ==0) {
            clearInterval(interval)
            time.textContent = minutes+":"+seconds
            return
        }
        if(seconds <0){
            seconds = 59
            minutes--
        }
        
        time.textContent = minutes+":"+seconds
    }, 100);

    isIntervalCreated = true
})
reset.addEventListener("click",function () {s
    clearInterval(interval)
    isIntervalCreated = false
    minutes = 0
    seconds = 0
    time.textContent = minutes+":"+seconds
})
stop.addEventListener("click",function () {
    clearInterval(interval)
    isIntervalCreated = false
})
input.addEventListener("change",function () {
    minutes = input.value
})