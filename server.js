var express = require('express'),
    app = express(),
    server = require('http').createServer(app);


app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
    res.sendfile(__dirname + '/public/index.html');
})
.get('/logs', function(req, res) {
    res.sendfile(__dirname + '/public/logs.html');
})
.get('/help', function(req, res) {
    res.sendfile(__dirname + '/public/help.html');
})
.get('/contact', function(req, res) {
    res.sendfile(__dirname + '/public/contact.html');
})
.use(function(req, res, next){
    res.sendfile(__dirname + '/public/index.html');
});

server.listen(8080);
