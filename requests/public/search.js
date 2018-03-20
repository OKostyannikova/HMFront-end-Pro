let Req = (function () {
    let query = function (address, method, data) {
        return new Promise(function (res, rej) {
            let xhr = new XMLHttpRequest();
            xhr.open(method, address, true);
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.addEventListener("load", function (data) {
                let json = JSON.parse(data.target.responseText);
                res(json);
            });
            xhr.send(data ? JSON.stringify(data) : null);
        });
    };

    function Req() { }

    Req.prototype.get = function (url) {
        return query(url, "GET");
    };

    Req.prototype.post = function (url, data) {
        return query(url, "POST", data);
    };

    return Req;
}());