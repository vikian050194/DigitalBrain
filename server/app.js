var port = process.env.PORT || 9000;

var express = require("express"),
    morgan = require("morgan"),
    bodyParser = require("body-parser"),
    app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const loggerOutputPredefinedFormat = "dev";
app.use(morgan(loggerOutputPredefinedFormat));

app.use(express.static("client/build"));

var router = require("./router");
app.use("/", router);

app.listen(port, function () {
    console.info("Listening on port " + port);
});