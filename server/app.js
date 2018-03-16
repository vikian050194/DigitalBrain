var port = process.env.PORT || 8080;

var express = require('express'),
    app = express();

app.use(express.static('client'));
// app.use('/',express.static('client/build'));

var router = require('./router');
app.use('/', router);

app.listen(port, function () {
    console.log('Listening on port ' + port);
});