let socket = io()

let side = 45

function setup() {
    frameRate(10)
    createCanvas(matrix[0].length * side, matrix.length * side)
    
}


function nkarel() {
    for (let y = 0; y < matrix.length; y++) {
        for (x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                fill("green")
                rect(x * side, y * side, side, side)
                textSize(side + 12)
                text("🌱", x * side, y * side + 32)

            } else if (matrix[y][x] == 2) {
                fill("yellow")
                rect(x * side, y * side, side, side)
                textSize(side - 12)
                text("🐮", x * side, y * side + 32)
            } else if (matrix[y][x] == 3) {
                fill("brown")
                rect(x * side, y * side, side, side)
                textSize(side - 12)
                text("🦧", x * side, y * side + 32)
            } else if (matrix[y][x] == 4) {
                fill("black")
                rect(x * side, y * side, side, side)
                textSize(side - 12)
                text("💣", x * side, y * side + 32)
            } else if (matrix[y][x] == 10) {
                reserv.push(10)
                fill("orange")
                rect(x * side, y * side, side, side)
                textSize(side - 12)
                text("🔥", x * side, y * side + 32)
            } else if (matrix[y][x] == 5 && reserv.length > 0) {
                fill("peru")
                rect(x * side, y * side, side, side)
                textSize(side - 12)
                text("🧸", x * side, y * side + 32)
            } else if (matrix[y][x] == 6) {
                fill("dimGray")
                rect(x * side, y * side, side, side)
                textSize(side - 12)
                text("🌪", x * side, y * side + 32)
            } else if (matrix[y][x] == 7) {
                fill("white")
                rect(x * side, y * side, side, side)
                textSize(side - 12)
                text("🐼", x * side, y * side + 32)
            }
            else if (matrix[y][x] == 8) {
                fill("darkolivegreen")
                rect(x * side, y * side, side, side)
                textSize(side - 12)
                text("🎋", x * side, y * side + 32)
            }
            else {
                fill("silver")
                rect(x * side, y * side, side, side)
            }


        }
    }

}

setInterval(
    function () {
        socket.on('send matrix', nkarel)
    }, 1000
)

let grassArr = []
let grassEaterArr = []
let predatorArr = []
let bombArr = []
let patapArr = []
let eaterArr = []
let pandaArr = []
let bambukArr = []



let reserv = []




let patnesh = 0;
