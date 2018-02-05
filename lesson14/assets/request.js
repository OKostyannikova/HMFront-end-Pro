var Request = (function () {
    function Request(url) {
        this.url = url;
    }
    Request.prototype.ask = function (data) {
        var xhr = new XMLHttpRequest();
        xhr.open("post", this.url, true);
        xhr.setRequestHeader("Content-type", "application/json");
        xhr.addEventListener("load", function (data) {
            console.log(data);
        });
        xhr.send(JSON.stringify(data));

        console.log("Request sent...");
    }

    return Request;

}());