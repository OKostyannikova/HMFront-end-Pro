setInterval(function () {
    var time = new Date(),
        hours = time.getHours(),
        minutes = time.getMinutes(),
        seconds = time.getSeconds();
    if (hours < 10) hours = "0" + hours;
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;
    watchDisplay.innerHTML = hours + ":" + minutes + ":" + seconds;
    newPlanner.showActiveTask(hours, minutes);
    changeBackground(hours);
}, 1000);

function changeBackground(hours) {
    var watchBackground = document.getElementById("planner");
    if (hours >= 21 || hours < 5) {
        watchBackground.style.backgroundColor = "#f9f2e2";
    } else if (hours >= 17) {
        watchBackground.style.backgroundColor = "#f8bfb9";
    } else if (hours >= 10) {
        watchBackground.style.backgroundColor = "#a0ab44";
    } else if (hours >= 5) {
        watchBackground.style.backgroundColor = "#dcd2d7";
    }
};