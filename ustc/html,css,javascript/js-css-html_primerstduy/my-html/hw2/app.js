var setid;
var left_time;
var left_hour = 0;
var left_minute = 0;
var left_second = 0;
var input_hour = 0;
var input_minute = 0;
var input_second = 0;


var seti2;
var second = 0;
var second2 = 0;
var minute = 0;
var minute2 = 0;
var hour = 0;
var hour2 = 0;

var flag=0;
//状态标志变量 0计时前 1正计时中 2倒计时中 3正计时暂停中 4倒计时暂停中 5倒计时结束

document.onkeydown = function (event) {
    var e = event || window.event || arguments.callee.caller.arguments[0];
    if (e && e.keyCode == 13 && flag == 0) {
        flag = 1;
        countup();
        hide_button("hour"); hide_button("hour-label"); hide_button("minute");
        hide_button("minute-label"); hide_button("second"); hide_button("second-label");
        hide_button("countup");
        hide_button("countdown");
        hide_button("resume");
        show_button("pause");
        show_button("clear");
        show_button("restart");
    }
    if (e && e.keyCode == 32) {
        if (flag == 1) {
            clearTimeout(seti2); flag = 3;
            show_button("resume");
            hide_button("pause");
            show_button("clear");
            show_button("restart");
        }
        else if (flag == 2) {
            clearInterval(setid);
            var tishi = "暂停倒计时" + " " + input_hour + ":" + input_minute + ":" + input_second;
            document.getElementById("hint").innerText = tishi;
            flag = 4;
            show_button("resume");
            hide_button("pause");
            show_button("clear");
            show_button("restart");
        }
        else if (flag == 3) {
            countup(); flag = 1;
            hide_button("resume");
            show_button("pause");
            show_button("clear");
            show_button("restart");
        }
        else if (flag == 4) {
            setid = setInterval(countdown, 1000);
            flag = 2;
            var tishi = "正在倒计时" + " " + input_hour + ":" + input_minute + ":" + input_second;
            document.getElementById("hint").innerText = tishi;
            hide_button("resume");
            show_button("pause");
            show_button("clear");
            show_button("restart");
        }
    }

}

var istart = document.getElementById("countdown");
istart.onclick = function () {
    initial_countdown();
    setid = setInterval(countdown, 1000);
    flag = 2;
    hide_button("hour"); hide_button("hour-label"); hide_button("minute");
    hide_button("minute-label"); hide_button("second"); hide_button("second-label");
    show_button("hint");
    hide_button("countup");
    hide_button("countdown");
    hide_button("resume");
    show_button("pause");
    show_button("clear");
    show_button("restart");
}

var istart2 = document.getElementById("countup");
istart2.onclick = function () {
    flag = 1;
    countup();
    hide_button("hour"); hide_button("hour-label"); hide_button("minute");
    hide_button("minute-label"); hide_button("second"); hide_button("second-label");
    hide_button("countup");
    hide_button("countdown");
    hide_button("resume");
    show_button("pause");
    show_button("clear");
    show_button("restart");
}

var istop = document.getElementById("pause");
istop.onclick = function () {
    if (flag == 2) {
        clearInterval(setid);
        var tishi = "暂停倒计时" + " " + input_hour + ":" + input_minute + ":" + input_second;
        document.getElementById("hint").innerText = tishi;
        flag = 4;
        show_button("resume");
        hide_button("pause");
        show_button("clear");
        show_button("restart");
    }
    if (flag == 1) {
        clearTimeout(seti2); flag = 3;
        show_button("resume");
        hide_button("pause");
        show_button("clear");
        show_button("restart");
    }
}

var clear = document.getElementById("clear");
clear.onclick = function () {
    if (flag == 2 || flag==5 || flag==4) {
        cleartext("second"); cleartext("minute"); cleartext("hour");
        document.getElementById("time").innerText = "00:00:00";
        clearInterval(setid);
        flag = 0;
        hide_button("hint");
        var tishi = "";
        document.getElementById("hint").innerText = tishi;
    }
    if (flag == 1 || flag == 3) {
        hour = 0; hour2 = 0; minute = 0; minute2 = 0; second = 0; second2 = 0;
        attime2 = "00:00:00";
        document.getElementById("time").innerText = attime2 + "";
    }
    if (flag == 1) { clearTimeout(seti2); }
    show_button("hour"); show_button("hour-label"); show_button("minute");
    show_button("minute-label"); show_button("second"); show_button("second-label");
    hide_button("resume");
    hide_button("pause");
    hide_button("clear");
    hide_button("restart");
    show_button("countup");
    show_button("countdown");
}

var restart = document.getElementById("restart");
restart.onclick = function () {
    if (flag == 1) {
        second2 = 0; second = 0; minute2 = 0; minute = 0; hour2 = 0; hour = 0;
        attime2 = hour + "" + hour2 + ":" + minute + minute2 + ":" + second + second2;
        document.getElementById("time").innerText = attime2 + "";
    }
    if (flag == 3) {
        second2 = 0; second = 0; minute2 = 0; minute = 0; hour2 = 0; hour = 0;
        attime2 = hour + "" + hour2 + ":" + minute + minute2 + ":" + second + second2;
        document.getElementById("time").innerText = attime2 + "";
        countup();
        flag = 1;
    }
    if (flag == 4) { initial_countdown(); setid = setInterval(countdown, 1000);flag = 2;}
    if (flag == 5) { initial_countdown(); setid = setInterval(countdown, 1000); flag = 2; }
    if (flag == 2) { clearInterval(setid); initial_countdown(); setid = setInterval(countdown, 1000); }
    hide_button("resume");
    show_button("pause");
    show_button("clear");
    show_button("restart");
}

var resume = document.getElementById("resume");
resume.onclick = function () {
    if (flag == 3) { countup(); flag = 1;}
    if (flag == 4) {
        setid = setInterval(countdown, 1000);
        flag = 2;
        var tishi = "正在倒计时" + " " + input_hour + ":" + input_minute + ":" + input_second;
        document.getElementById("hint").innerText = tishi;
    }
    hide_button("resume");
    show_button("pause");
    show_button("clear");
    show_button("restart");
}
  
window.onload = function(){
    hide_button("clear");
    hide_button("resume");
    hide_button("restart");
    hide_button("pause");
}
//最开始加载界面的时候就执行

function initial_countdown() {
    input_hour = document.getElementById('hour').value;
    input_minute = document.getElementById('minute').value;
    input_second = document.getElementById('second').value;
    if (input_minute > 59) { input_minute = 59; }
    if (input_second > 59) { input_second = 59; }
    left_time = (Number(input_hour * 3600) + Number(input_minute * 60) + Number(input_second));
    if (input_hour < 10 && input_hour > 0) input_hour = "0" + input_hour;
    else if (input_hour == 0) input_hour = "00";
    if (input_minute < 10 && input_minute > 0) input_minute = "0" + input_minute;
    else if (input_minute == 0) input_minute = "00";
    if (input_second > 0 && input_second < 10) input_second = "0" + input_second;
    else if (input_second == 0) input_second = "00";
    var tishi = "正在倒计时" + " " + input_hour + ":" + input_minute + ":" + input_second;
    document.getElementById("hint").innerText = tishi;
    attime2 = input_hour + ":" + input_minute + ":" + input_second;
    document.getElementById("time").innerText = attime2 + "";
}

function countdown() {
    if (left_time >= 1)
        left_time = left_time - 1;
    left_hour = "" + (parseInt(left_time / 3600));
    left_minute = "" + (parseInt((left_time % 3600) / 60));
    left_second = "" + (parseInt(left_time % 60));
    //辣鸡浮点数和字符串搞人心态。
    //javascript是弱类型语言，用除法会保留小数。
    //parseInt
    if (left_hour < 10) left_hour = "0" + left_hour;
    else if (left_hour == 0) left_hour = "00";
    if (left_minute < 10) left_minute = "0" + left_minute;
    else if (left_minute == 0) left_minute = "00";
    if (left_second < 10) left_second = "0" + left_second;
    else if (left_second == 0) left_second = "00";
    attime2 = left_hour + ":" + left_minute + ":" + left_second;
    document.getElementById("time").innerText = attime2 + "";
    if (left_time <= 0){
        clearInterval(setid);
        flag = 5;
        var tishi = "倒计时" + " " + input_hour + ":" + input_minute + ":" + input_second + "已结束";
        document.getElementById("hint").innerText = tishi;
        hide_button("pause");
    }
}


function countup() {
    second2 = second2 + 1;
    if (second2 == 10) { second = second + 1; second2 = 0; }
    if (second == 6) { minute2 = minute2 + 1; second = 0; }
    if (minute2 == 10) { minute = minute + 1; minute2 = 0; }
    if (minute == 6) { hour2 = hour2 + 1; minute = 0; }
    if (hour2 == 10) { hour = hour + 1; hour2 = 0; }
    attime2 = hour + "" + hour2 + ":" + minute + minute2 + ":" + second + second2;
    document.getElementById("time").innerText = attime2 + "";
    seti2 = setTimeout("countup()", 1000);
}


function cleartext(param) {
    if (document.getElementById(param) != null)
        document.getElementById(param).value = "";
}

function hide_button(param) {
    document.getElementById(param).style.display = "none";
}

function show_button(param) {
    document.getElementById(param).style.display = "block";
}