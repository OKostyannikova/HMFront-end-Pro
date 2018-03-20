import {watchDisplay, newPlanner} from "./planner";

(function () {
    setInterval(function () {
        let time = new Date(),
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

    const MORNING_COLOR = "#f9f2e2";
    const DAY_COLOR = "#f8bfb9";
    const EVENING_COLOR = "#a0ab44";
    const NIGHT_COLOR = "#dcd2d7";

    function changeBackground(hours) {
        let watchBackground = document.getElementById("planner");
        if (hours >= 21 || hours < 5) {
            watchBackground.style.backgroundColor = MORNING_COLOR;
        } else if (hours >= 17) {
            watchBackground.style.backgroundColor = DAY_COLOR;
        } else if (hours >= 10) {
            watchBackground.style.backgroundColor = EVENING_COLOR;
        } else if (hours >= 5) {
            watchBackground.style.backgroundColor = NIGHT_COLOR;
        }
    };
}());


