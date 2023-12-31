var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var fs = require("fs");

app.use(express.static("../client"));

app.get('/', function (req, res) {
    res.redirect('index.html');
});
server.listen(3001, () => {
    console.log('connected');
});

function matrixGenerator(matrixSize, grassCount, grassEaterCount, predatorCount, bombCount, patapCount, eaterCount, pandaCount, bambukCount) {
    let matrix = []

    for (let i = 0; i < matrixSize; i++) {
        matrix.push([])
        for (let j = 0; j < matrixSize; j++) {
            matrix[i].push(0)
        }
    }
    for (let i = 0; i < grassCount; i++) {
        let x = Math.floor(Math.random() * matrixSize)
        let y = Math.floor(Math.random() * matrixSize)

        if (matrix[y][x] == 0) {
            matrix[y][x] = 1
        }

    }

    for (let i = 0; i < grassEaterCount; i++) {
        let x = Math.floor(Math.random() * matrixSize)
        let y = Math.floor(Math.random() * matrixSize)

        if (matrix[y][x] == 0) {
            matrix[y][x] = 2
        }

    }


    for (let i = 0; i < predatorCount; i++) {
        let x = Math.floor(Math.random() * matrixSize)
        let y = Math.floor(Math.random() * matrixSize)

        if (matrix[y][x] == 0) {
            matrix[y][x] = 3
        }

    }


    for (let i = 0; i < bombCount; i++) {
        let x = Math.floor(Math.random() * matrixSize)
        let y = Math.floor(Math.random() * matrixSize)

        if (matrix[y][x] == 0) {
            matrix[y][x] = 4
        }

    }

    for (let i = 0; i < patapCount; i++) {
        let x = Math.floor(Math.random() * matrixSize)
        let y = Math.floor(Math.random() * matrixSize)

        if (matrix[y][x] == 0) {
            matrix[y][x] = 5
        }

    }


    for (let i = 0; i < eaterCount; i++) {
        let x = Math.floor(Math.random() * matrixSize)
        let y = Math.floor(Math.random() * matrixSize)

        if (matrix[y][x] == 0) {
            matrix[y][x] = 6
        }

    }


    for (let i = 0; i < pandaCount; i++) {
        let x = Math.floor(Math.random() * matrixSize)
        let y = Math.floor(Math.random() * matrixSize)

        if (matrix[y][x] == 0) {
            matrix[y][x] = 7
        }

    }


    for (let i = 0; i < bambukCount; i++) {
        let x = Math.floor(Math.random() * matrixSize)
        let y = Math.floor(Math.random() * matrixSize)

        if (matrix[y][x] == 0) {
            matrix[y][x] = 8
        }

    }


    return matrix
}

matrix = matrixGenerator(20, 50, 17, 9, 3, 7, 3, 9, 5)

io.sockets.emit('send matrix', matrix)
grassArr = []
grassEaterArr = []
predatorArr = []
bombArr = []
patapArr = []
eaterArr = []
pandaArr = []
bambukArr = []
reserv = []

patnesh = 0;

Grass = require("./grass")
GrassEater = require("./grassEater")
Predator = require("./predator")
Bomb = require("./bomb")
Patap = require("./patap")
Eater = require("./eater")
Panda = require("./panda")
Bambuk = require("./bambuk")

function createObject(matrix) {
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                let grass = new Grass(x, y)
                grassArr.push(grass)
            } else if (matrix[y][x] == 2) {
                let grEat = new GrassEater(x, y)
                grassEaterArr.push(grEat)
            } else if (matrix[y][x] == 3) {
                let pred = new Predator(x, y)
                predatorArr.push(pred)

            } else if (matrix[y][x] == 4) {
                let bomb = new Bomb(x, y)
                bombArr.push(bomb)
            } else if (matrix[y][x] == 5) {
                let patap = new Patap(x, y)
                patapArr.push(patap)
            } else if (matrix[y][x] == 6) {
                let eater = new Eater(x, y)
                eaterArr.push(eater)
            } else if (matrix[y][x] == 7) {
                let panda = new Panda(x, y)
                pandaArr.push(panda)
            } else if (matrix[y][x] == 8) {
                let bambuk = new Bambuk(x, y)
                bambukArr.push(bambuk)
            }
        }
    }
}

io.sockets.emit('send matrix', matrix)

function game() {
    for (let i in grassArr) {
        grassArr[i].mul()
    }

    for (let i in grassEaterArr) {
        grassEaterArr[i].eat()
    }

    for (let i in predatorArr) {
        predatorArr[i].eat()
    }

    for (let i in bombArr) {
        bombArr[i].explode()

        if (bombArr.length == 0) {
            let x = Math.floor(Math.random() * matrix.length)
            let y = Math.floor(Math.random() * matrix.length)

            matrix[y][x] = 4
            let bomb = new Bomb(x, y)
            bombArr.push(bomb)


        }
    }

    for (let i in patapArr) {
        patapArr[i].eat()

    }

    // console.log("dddddd", reserv.length);

    if (reserv.length > 0) {
        // for (let i in patapArr) {
        //     patapArr[i].eat()
        // }


    } else if (reserv.length <= 0 && patapArr.length > 0) {
        // patapArr = [];
    }

    for (let i in eaterArr) {
        eaterArr[i].eat()
    }

    for (let i in bambukArr) {
        bambukArr[i].mul()
    }
    for (let i in pandaArr) {
        pandaArr[i].eat()
    }

    io.sockets.emit("send matrix", matrix);

}
setInterval(game, 1000)


io.on('connection', function () {
    createObject(matrix)
})

let objStatistic = {
    patap: 0,
    panda: 0,
    bambuk: 0,
    bomb: 0,
    eater: 0,
    grass: 0,
    grassEaterArr: 0,
    predator: 0,
}


setInterval(function () {
    objStatistic.patap = patapArr.length;
    objStatistic.panda = pandaArr.length;
    objStatistic.bambuk = bambukArr.length;
    objStatistic.bomb = bombArr.length;
    objStatistic.eater = eaterArr.length;
    objStatistic.grass = grassArr.length;
    objStatistic.grassEater = grassEaterArr.length;
    objStatistic.predator = predatorArr.length;
    fs.writeFile("statistic.json", JSON.stringify(objStatistic), function(){
        console.log("write statistics info ")
    })

}, 6000)


