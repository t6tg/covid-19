var express = require("express");
var app = express();
const bodyParser = require("body-parser");
var path = require("path");
// var cors = require("cors");

app.use(express.static(path.join(__dirname, "./data")));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/v1/", require("./api_data"));

app.listen(8081, () => {
  console.log("Server start at port : 8081");
});
