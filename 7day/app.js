var seconds = 0;
var minutes = 0;
var hours = 0;

function stopWatch(){
    seconds++;

    if(seconds / 60 == 1){
        seconds = 0;
        minutes++;

        if(minutes / 60 == 1){
            minutes = 0;
            hours++;
        }
    }

    document.getElementById('timeShow').innerHTML = hours+":"+ minutes + ":" + seconds;
}

function reset(){
    seconds = 0;
    minutes = 0;
    hours = 0;
    document.getElementById('timeShow').innerHTML = '00:00:00';
}