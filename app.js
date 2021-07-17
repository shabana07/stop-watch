var hours = document.getElementById('hour');
var minute = document.getElementById('min');
var second = document.getElementById('sec');
var milliSecond = document.getElementById('millSec');
var starts = document.getElementById('start');
var part = document.getElementById('list');
var heading = document.getElementById('heading');

var milliSec = 0;
var sec = 0;
var min = 0;
var hour = 0;
var timer;

function startTimer() {
    timer = setInterval(function () {
        milliSec++;
        milliSecond.innerHTML = milliSec;
        if (millSec >= 100) {
            sec++;
            second.innerHTML = sec;
            milliSec = 0;
        }
        else if (sec >= 60) {
            min++;
            minute.innerHTML = min;
            sec = 0;
        }
        else if (min >= 60) {
            hour++;
            hours.innerHTML = hour;
            minute = 0;
        }
        starts.disabled = true;
    }, 100)
}



function resetTimer() {

    hour = 0;
    min = 0;
    sec = 0;
    milliSec = 0;
    hours.innerHTML = hour;
    minute.innerHTML = min;
    second.innerHTML = sec;
    milliSecond.innerHTML = milliSec;
}

function stopTimer() {
    clearInterval(timer);
    starts.disabled = false;
    var list= document.createElement('li');
    list.innerText = (heading.innerText);
    part.appendChild(list); 
    var button= document.createElement('button');
    button.innerHTML = ('<i class="far fa-times-circle fa-1x"></i>');
    button.setAttribute('onclick','deleteIt(this)');
    list.appendChild(button);
}
function deleteIt(e){
    e.parentNode.remove()
}

