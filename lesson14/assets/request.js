var Request = (function () {
    var quary = function (url, string) {
        return new Promise(function (res, rej) {
            var xhr = new XMLHttpRequest();
            xhr.open("post", url, true);
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.addEventListener("load", function (data) {
                var json = JSON.parse(data.target.responseText);
                res(json);
            })
            xhr.send(JSON.stringify({ key: string }));
        })
    };

    function Request(url) {
        this.url = url;
    };

    Request.prototype.ask = function (string) {
        return quary(this.url, string);
    };
    return Request;

}());