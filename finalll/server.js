var statistics = {};
var express = require('express');
var app = express();
var server = require('http').CreateServer(app);
var io = require('socket.io')(server);
var fs = require("fs");


setInterval(function () {
    statistics.grass = grassArr.length;
    statistics.grassEater = grassEaterArr.length;
    statistics.mahahaArr = predatorArr.length;
    statistics.monsterArr = birdArr.length;
    statistics.virusArr = snakeArr.length;
    statistics.wolfArr = lionArr.length;
    fs.writeFile("statistics.json", JSON.stringify(statistics), function () {
        console.log("send")
    })
}, 1000)

function weather() {
    if (weath == "winter") {
        weath = "spring"
    }
    else if (weath == "spring") {
        weath = "summer"
    }
    else if (weath == "summer") {
        weath = "autumn"
    }
    else if (weath == "autumn") {
        weath = "winter"
    }
    io.sockets.emit('weather', weath)
}
setInterval(weather, 7000);
///////////////////////////////


function lightning() {

    let y = Math.floor(Math.random() * matrix.length - 1)
    let x = Math.floor(Math.random() * matrix[0].length - 1)



    if (y > 0 && x > 0) {

        for (let i in matrix) {

            if (y > matrix.length - 1 || x > matrix[0].length - 1) {
                break
            }
            matrix[y][x] = 3
            eat(x,y)
           
            y += 1
            x += 1

        }
    }
    io.sockets.emit("send matrix", matrix)
    setTimeout(function () {
        for (let y in matrix) {
            for (let x in matrix[y]) {
                if (matrix[y][x] == 3) {
                    matrix[y][x] = 0


                }
            }
        }
        io.sockets.emit("send matrix", matrix)
    }, 2000)
}






///////////////////////////////

// function bomb() {
    
//     let randomCordinat = Math.floor(Math.random() * matrix.length - 1)

//     if (randomCordinat > 0) {
//         matrix[randomCordinat][randomCordinat] = 8

//         setTimeout(function () {
//             for (let i in matrix[0]) {
//                 matrix[randomCordinat][i] = 5
//                 eatFunc(i, randomCordinat)
//             }
//             for (let i in matrix) {
//                 matrix[i][randomCordinat] = 5
//                 eatFunc(randomCordinat, i)
//             }
//         }, 1000)
//         io.sockets.emit("send matrix", matrix)
//         setTimeout(function () {
//             for (let y in matrix) {
//                 for (let x in matrix[y]) {
//                     if (matrix[y][x] == 5) {
//                         matrix[y][x] = 0


//                     }
//                 }
//             }
//             io.sockets.emit("send matrix", matrix)
//         }, 2000)
//     }

// }

////////////////////////////


if (fs.existsSync("public/stats.json")) {
    var stats = require("./public/stats.json");
}

app.use(express.static("."));
app.use('/socket', express.static(__dirname + '/node_modules/socket.io-client/dist/'));
app.use('/p5', express.static(__dirname + '/node_modules/p5/lib/'));

app.get("/", function (req, res) {
    res.redirect('public/index.html');
});
app.get('/stats', function (req, res) {
    res.redirect('stats.html');
});

server.listen(3000);

io.on("connection", function (socket) {
    socket.on("send stats", function (data) {
        stats.push(data);
        fs.writeFile('public/stats.json', JSON.stringify(stats));
        
    });
    socket.on("get stats", function () {
        fs.readFile('public/stats.json', "utf8", function(err, statisFromFile) {
            socket.emit("send stats", statisFromFile);    
        });
        
    });
});

