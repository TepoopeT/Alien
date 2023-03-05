var stats = {};
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var fs = require("fs");


app.use(express.static("."));
fs.writeFileSync('stats.json', '');
app.get("/", function (req, res) {
    res.redirect('index.html');
});

server.listen(3000);

io.on("connection", function (socket) {
    socket.on("send stats", (data) =>{
        console.log(data)
        fs.appendFileSync('stats.json', JSON.stringify(data)+"\n");
        
    });
});

