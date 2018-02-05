var Request = (function () {
    function Request(url) {
        this.url = url;
        this.list;
    }
    Request.prototype.ask = function (data) {
        var self = this;
        var xhr = new XMLHttpRequest();
        xhr.open("post", this.url, true);
        xhr.setRequestHeader("Content-type", "application/json");
        xhr.addEventListener("load", function (data) {
            var json = JSON.parse(data.target.responseText);
            self.list = json;
            console.log(self.list);
        })
        xhr.send(JSON.stringify(data));
        console.log("Request sent...");
    }

    return Request;

}());