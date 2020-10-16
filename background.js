
var countDays = new Date();

function reset() {
    countDays.setDate(8);
    countDays.setHours(0,0,0,0);
    console.log(countDays.getDay());
    console.log(countDays.getMinutes());
    console.log(countDays.getSeconds());
}

var minute = countDays.getMinutes();
    var hour = countDays.getHours();
    var day = countDays.getDay();
    var minute = countDays.getMinutes();
    document.getElementById("timerday").innerHTML = `Days : ${day} <br/> Hours : ${hour} <br/> Minutes : ${minute}` ;