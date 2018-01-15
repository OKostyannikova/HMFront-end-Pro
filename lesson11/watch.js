var watch = (function () {

    setInterval(function () {
        var watch = new Date(),
            formatter = new Intl.DateTimeFormat("ru", {
                hour: "numeric",
                minute: "numeric",
                second: "numeric"
            });

        // watch.setHours(6);

        var hours = watch.getHours(),
            watchText = document.getElementById("watch");
        watchText.innerHTML = formatter.format(watch);

        changeBackground(watchText, hours);

    }, 1000);

    function changeBackground(watchText, hours) {
        var watchBackground = document.getElementById("watch-wrapper");
        if (hours >= 21 || hours < 5) {
            watchBackground.style.backgroundImage = "url('images/night.jpg')";
            watchText.style.color = "rgba(220, 220, 220, 0.7)";
        } else if (hours >= 17) {
            watchBackground.style.backgroundImage = "url('images/sunset.jpg')";
            watchText.style.color = "rgba(256, 256, 256, 0.9)";
        } else if (hours >= 10) {
            watchBackground.style.backgroundImage = "url('images/day.jpg')";
        } else if (hours >= 5) {
            watchBackground.style.backgroundImage = "url('images/sunrise.jpg')";
        }
    }

}());