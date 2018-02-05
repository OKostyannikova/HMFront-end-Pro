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


app.get("/", function (request, response) {
    console.log(request.query);
    response.sendFile(join(__dirname, "./index.html"));
})

app.post("/search", function (request, response) {
    var dataItem = request.body;
    console.log(dataItem);
    dataList.push(dataItem);
    console.log(dataList);
    fs.writeFile("./data/requests.json",
        JSON.stringify(dataList), function () {
            response.send(dataItem);
        });
});

app.listen(port, function () {
    console.log("Server is running on port " + port);
});

/* function checkExistData(data) {
    dataList.forEach(function (obj) {
        console.log(obj.key);
        console.log(data.key);
        if (obj.key !== data.key) {
            dataList.push(data);
        }
    })
}

function writeData(cb) {
    fs.writeFile("./data/requests.json",
        JSON.stringify(dataList), cb);
}; */
