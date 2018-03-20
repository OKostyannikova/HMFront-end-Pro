const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 3000;
const path = require("path");
let dataList = require("./data/requests.json");
const _ = require("lodash");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use('/scripts', express.static(__dirname + '/node_modules'));
app.use('/static', express.static(__dirname + '/public'));

function checkAndPushData(data) {
    let check = dataList.find(function (obj) {
        return obj.key === data.key;
    });

    if (!check) {
        dataList.push(data);
    }
}

function getRelevant(data) {
    const regexp = new RegExp("^" + data.key);
    let relevantList = dataList.filter(function (obj) {
        return regexp.test(obj.key);
    });
    return relevantList;
}

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "./index.html"));
});

app.get("/search", function (req, res) {
    let dataItem = req.query;
    let dataResult = getRelevant(dataItem);
    checkAndPushData(dataItem);
    res.send(dataResult);
});

app.listen(port, function () {
    console.log("Server is running on port " + port);
})