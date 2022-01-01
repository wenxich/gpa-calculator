var timer;
var myInterval;
var isPaused;

function startTimer(duration, minDisplay, secDisplay) {
    var minutes, seconds;
    timer = duration, minutes, seconds;

    myInterval = setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        if(minutes >= 10) {
            minDisplay.innerHTML = parseInt(minutes);
        } else {
            minDisplay.innerHTML = "0" + parseInt(minutes);
        }
        if(seconds >= 10) {
            secDisplay.innerHTML = parseInt(seconds);
        } else {
            secDisplay.innerHTML = "0" + parseInt(seconds);
        }

        if (--timer < 0) {
            timer = 0;
        }
    }, 1000);
}
function reset(duration, minDisplay, secDisplay) {
    var minutes = duration / 60;
    var seconds = duration % 60;

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    timer = duration;

    clearInterval(myInterval);
    
    if(minutes >= 10) {
        minDisplay.innerHTML = parseInt(minutes);
    } else {
        minDisplay.innerHTML = "0" + parseInt(minutes);
    }
    if(seconds >= 10) {
        secDisplay.innerHTML = parseInt(seconds);
    } else {
        secDisplay.innerHTML = "0" + parseInt(seconds);
    }
}