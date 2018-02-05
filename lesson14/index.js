var express = require("express");
var join = require("path").join;
var bodyParser = require("body-parser");

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

app.post("/search", function(request, response){
    console.log(request.body);
    response.send(request.body);
})

app.listen(port, function () {
    console.log("Server started at port " + port);
})