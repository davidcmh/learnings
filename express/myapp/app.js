/**
 * Express.js Hello World
 *
 * Created by david.mhchia on 07/10/15.
 * Following tutorial from: http://expressjs.com/starter/hello-world.html
 */

var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.send('Hello World!');
});

var server = app.listen(3000, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});