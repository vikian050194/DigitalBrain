var express = require('express'),
    router = express.Router();

function logRequest(requestType){
    var message = `${requestType} request: ${new Date().toLocaleTimeString()}`;
    console.log(message);
    return message;
};

router.route('/')
    .get(function (req, res) {
        res.send(logRequest('GET'));
    })
    .post(function(req,res){
        res.send(logRequest('POST'));
    })
    .put(function(req,res){
        res.send(logRequest('PUT'));
    })
    .delete(function(req,res){
        res.send(logRequest('DELETE'));
    });

module.exports = router;