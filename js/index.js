//JS読み込み後設定
window.onload = function(){
    //start button
    var  start = document.getElementById('start');
    start.addEventListener('click', count_start, false);

    //stop button
    var  stop = document.getElementById('stop');
    stop.addEventListener('click', count_stop, false);

    //reset button
    var  reset = document.getElementById('reset');
    reset.addEventListener('click', count_reset, false);
}


var count = 0; //秒数
var min = 0;
var sec = 0
var start_f = false;
var interval;


//start function
function count_start(){
    //連続押しの防止
    if(start_f === false && count > 0){
        interval = setInterval(count_down,1000);
        start_f = true;
    }
}

//count_down function
function count_down(){
    if(count === 1){
        var display = document.getElementById('default');
        display.style.color ='red';
        display.innerHTML = "TIME UP!";
        clearInterval(interval);
    }else{
        count--;
        min = Math.floor(count / 60);
        sec = count % 60;
        var count_down = document.getElementById('default');
        if(min < 10){
            count_down.innerHTML = ("0" + min) +" : " + ("0"+sec).slice(-2);
        }else{
            count_down.innerHTML = (min) +" : " + ("0"+sec).slice(-2);
        }
    }
}

//stop function
function count_stop(){
    clearInterval(interval);
    start_f = false;
}

//reset function
function count_reset(){
    clearInterval(interval);
    count = 0;
    min = 0;
    sec = 0;
    start_f = false;
    var count_down = document.getElementById('default');
    count_down.style.color ='black';
    count_down.innerHTML = "00 : 00";  //初期化時に00:00にする
}

//add time function
function set_time(time){
    var count_down = document.getElementById('default');

    count += time;
    min = Math.floor(count / 60);
    sec = count % 60;
    if(min < 10){
        count_down.innerHTML = ("0" + min) +" : " + ("0"+sec).slice(-2);
    }else{
        count_down.innerHTML = (min) +" : " + ("0"+sec).slice(-2);
    }
}