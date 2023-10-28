let hours = 0
let minutes = 0
let seconds = 0
let miliseconds = 0

let intervalID;

let timer = document.getElementById("time");
let startButton = document.getElementById("start");
let stopButton = document.getElementById("stop");
let resetButton = document.getElementById("reset")


function updateTimer(){
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

function reset(){
    hours = 0;
    minutes = 0;
    seconds = 0;
    miliseconds = 0;
    
    updateTimer();
}

startButton.addEventListener("click", start);
stopButton.addEventListener("click", stop);
resetButton.addEventListener("click", reset);