let [seconds, minutes, hours] = [0,0,0];
let displayTime = document.getElementById("displayTime");
let timer = null;

// Thease function increase second minute and hours
// Thease function excute every second
function stopwatch(){
    seconds++;
    if(seconds == 60){
        seconds = 0;
        minutes++;
        if(minutes == 60){
            minutes = 0;
            hours++;
        }
    }
    // Thease code initilize two digits of zero
    let hourss = hours < 10 ? "0" + hours : hours;
    let minutess = minutes < 10 ? "0" + minutes : minutes;
    let secondss = seconds < 10 ? "0" + seconds : seconds;

    // This line display time in ui
    displayTime.innerHTML = hourss + ":"+ minutess +":"+ secondss;
}

// Thease function set interval
// Thease function call on click button
function watchStart(){
    if(timer!== null){
        clearInterval(timer);
    }
    timer = setInterval(stopwatch,1000);
}

// Thease function stop the watch
function watchStop(){
    clearInterval(timer);
}

// Thease function Reset the watch
function watchReset(){
    clearInterval(timer);
    [seconds,minutes,hours] = [0,0,0];
    displayTime.innerHTML = "00:00:00";
}