let hours = 0
let minutes = 0
let seconds = 0
let centiseconds = 0

let intervalID;

let timer = document.getElementById("time");
let startStopButton = document.getElementById("start-stop");
let resetButton = document.getElementById("reset")


function updateTimer() {
    let h = hours < 10 ? `0${hours}`:`${hours}`;
    let m = minutes < 10 ? `0${minutes}`:`${minutes}`;
    let s = seconds < 10 ? `0${seconds}`:`${seconds}`;
    let cs = centiseconds < 10 ? `0${centiseconds}`:`${centiseconds}`;

    timer.innerHTML = `${h}:${m}:${s}:${cs}`
}

function start(){

    intervalID = setInterval(function(){
        updateTimer();
        centiseconds += 1;
        
        if (centiseconds == 100){
            seconds += 1;
            centiseconds = 0;
        }

        if (seconds == 60){
            minutes += 1;
            seconds = 0;
        }

        if (minutes == 60){
            hours += 1;
            minutes = 0;
        }
    }, 10);
    
}

function stop(){
    clearInterval(intervalID);
}

function start_stop() {
    let text = startStopButton.innerText;
    if (text == "Iniciar" || text == "Continuar") {
        startStopButton.innerHTML = "Parar"
        startStopButton.style.backgroundColor = "#FF4500";
        start()
    
    } else if (text == "Parar") {
        startStopButton.innerHTML = "Continuar";
        startStopButton.style.backgroundColor = "#07b107";
        stop();
    }
}

function reset() {
    stop()
    hours = 0;
    minutes = 0;
    seconds = 0;
    centiseconds = 0;
    updateTimer();
    startStopButton.innerHTML = "Iniciar";
    startStopButton.style.backgroundColor = "#07b107";
}

startStopButton.addEventListener("click", start_stop);
resetButton.addEventListener("click", reset);