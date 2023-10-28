let hours = 0
let minutes = 0
let seconds = 0
let miliseconds = 0

let intervalID;

let timer = document.getElementById("time");
let startStopButton = document.getElementById("start-stop");
let resetButton = document.getElementById("reset")


function updateTimer() {
    timer.innerHTML = `${hours}:${minutes}:${seconds}:${miliseconds}`;
}

function start(){

    intervalID = setInterval(function(){
        updateTimer();
        miliseconds += 10;
        
        if (miliseconds == 1000){
            seconds += 1;
            miliseconds = 0;
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
        start()
    
    } else if (text == "Parar") {
        startStopButton.innerHTML = "Continuar";
        stop();
    }
}

function reset() {

    hours = 0;
    minutes = 0;
    seconds = 0;
    miliseconds = 0;
    
    updateTimer();
}

startStopButton.addEventListener("click", start_stop);
resetButton.addEventListener("click", reset);