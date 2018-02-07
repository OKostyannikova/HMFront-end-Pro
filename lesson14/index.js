var express = require("express");
var join = require("path").join;
var bodyParser = require("body-parser");
var dataList = require("./data/requests.json");
var fs = require('fs');

var app = express();
var port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use("/assets", express.static(__dirname + "/assets"));

function checkExistingData(data) {
    var check = dataList.find(function (obj) {
        return obj.key === data.key;
    });

    if (!check) {
        dataList.push(data);
        console.log(dataList);
        writeData(function () {
        })
    }
}

function writeData(cb) {
    fs.writeFile("./data/requests.json",
        JSON.stringify(dataList), cb);
};

function getRelevant(data) {
    var regexp = new RegExp("^" + data.key);
    var relevantArr = dataList.filter(function (obj) {
        return regexp.test(obj.key);
    })
    return relevantArr;
}


app.get("/", function (request, response) {
    console.log(request.query);
    response.sendFile(join(__dirname, "./index.html"));
})

app.post("/search", function (request, response) {
    var dataItem = request.body;
    var dataResult = getRelevant(dataItem)
    checkExistingData(dataItem);
    response.json(dataResult);
});

app.listen(port, function () {
    console.log("Server is running on port " + port);
});
