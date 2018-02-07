var express = require("express");
var fs = ("fs");
var app = express();
var bodyParser = require("body-parser");
var port = 3000;
var path = require("path");
var dataList = require("./data/requests.json");
var _ = require("lodash");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use('/scripts', express.static(__dirname + '/node_modules'));
app.use('/static', express.static(__dirname + '/public'));

function checkAndPushData(data) {
    var check = dataList.find(function (obj) {
        return obj.key === data.key;
    });

    if (!check) {
        dataList.push(data);
    }
}

/* function writeData(cb) {
    fs.writeFile("./data/requests.json",
        JSON.stringify(dataList), cb);
}; */

function getRelevant(data) {
    var regexp = new RegExp("^" + data.key);
    var relevantList = dataList.filter(function (obj) {
        return regexp.test(obj.key);
    })
    return relevantList;
}

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "./index.html"));
})

app.get("/search", function (req, res) {
    var dataItem = req.query;
    var dataResult = getRelevant(dataItem);
    checkAndPushData(dataItem);
    res.send(dataResult);
})

app.listen(port, function () {
    console.log("Server is running on port " + port);
})