let seconds = 00;
let minutes = 00;
let secondstext = document.getElementById("seconds");
let minutestext = document.getElementById("minutes");
let startbutton = document.getElementById("button_start");
let pausebutton = document.getElementById("button_pause");
let stopbutton = document.getElementById("button_stop");
let interval;
let round = 0;

function startTimer(){
    seconds++;

    if(seconds < 10){
        secondstext.innerHTML = "0" + seconds;
    } else if (seconds < 60){
     secondstext.innerHTML = seconds;
    } else{
        seconds = 00;
     secondstext.innerHTML = "0" + seconds;
        minutes++;
            if(minutes < 10){
                minutestext.innerHTML = "0" + minutes;
            } else {
                minutestext.innerHTML = minutes;
            }       
    }
}

function addround(){
    let li = document.createElement("li");
    li.textContent = "Runde " + round + ": " + minutestext.innerHTML + ":" + secondstext.innerHTML;
    document.getElementById("round_list").appendChild(li);
}


startbutton.onclick = function() {
    if(!interval){
        interval = setInterval((startTimer), 1000);
    }
    }

pausebutton.onclick = function() {
    interval = clearInterval(interval);
}

stopbutton.onclick = function() {
    if(minutes == 0 && seconds == 0)
        return;
    round++;
    addround();
    interval = clearInterval(interval);
    seconds = 00;
    minutes = 00;
    minutestext.innerHTML = "0" + minutes;
    secondstext.innerHTML = "0" + seconds;
    
}
