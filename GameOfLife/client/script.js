function matrixGenerator(matrixSize, grassCount, grassEaterCount, predatorCount, bombCount, patapCount,eaterCount,pandaCount,bambukCount) {
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

let matrix = matrixGenerator(20, 30, 17, 9, 3, 15,3,9,5)

let side = 45


let grassArr = []
let grassEaterArr = []
let predatorArr = []
let bombArr = []
let patapArr = []
let eaterArr = []
let pandaArr = []
let bambukArr = []



let reserv = []




function setup() {
    frameRate(10)
    createCanvas(matrix[0].length * side, matrix.length * side)
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
let patnesh = 0;
function draw() {
    for (let y = 0; y < matrix.length; y++) {
        for (x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                fill("green")
                rect(x * side, y * side, side, side)
                textSize(side + 12)
                text("🌱", x * side,y * side + 32)
                
            } else if (matrix[y][x] == 2) {
                fill("yellow")
                rect(x * side, y * side, side, side)
                textSize(side - 12)
                text("🐮", x * side,y * side + 32)
            } else if (matrix[y][x] == 3) {
                fill("brown")
                rect(x * side, y * side, side, side)
                textSize(side - 12)
                text("🦧", x * side,y * side + 32)
            } else if (matrix[y][x] == 4) {
                fill("black")
                rect(x * side, y * side, side, side)
                textSize(side - 12)
                text("💣", x * side,y * side + 32)
            } else if (matrix[y][x] == 10) {
                reserv.push(10)
                fill("orange")
                rect(x * side, y * side, side, side)
                textSize(side - 12)
                text("🔥", x * side,y * side + 32)
            } else if (matrix[y][x] == 5 && reserv.length > 0) {
                fill("peru")
                rect(x * side, y * side, side, side)
                textSize(side - 12)
                text("🧸", x * side,y * side + 32)
            } else if (matrix[y][x] == 6) {
                fill("dimGray")
                rect(x * side, y * side, side, side)
                textSize(side - 12)
                text("🌪", x * side,y * side + 32)
            } else if (matrix[y][x] == 7) {
                fill("white")
                rect(x * side, y * side, side, side)
                textSize(side - 12)
                text("🐼", x * side,y * side + 32)
            }
            else if (matrix[y][x] == 8) {
                fill("darkolivegreen")
                rect(x * side, y * side, side, side)
                textSize(side - 12)
                text("🎋", x * side,y * side + 32)
            }
            else {
                fill("silver")
                rect(x * side, y * side, side, side)
            }

            
        }
    }

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
    // console.log("dddddd", reserv.length);

    if (reserv.length > 0) {
        for (let i in patapArr) {
            patapArr[i].eat()
        }


    } else if(reserv.length <=0 && patapArr.length > 0){
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

}
