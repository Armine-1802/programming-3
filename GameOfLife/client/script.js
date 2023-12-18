let socket = io()

let side = 45

function setup() {
    // frameRate(10)
    createCanvas(20 * side, 20 * side)
    
}


function nkarel(matrix) {
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
                fill("orange")
                rect(x * side, y * side, side, side)
                textSize(side - 12)
                text("🔥", x * side, y * side + 32)
            } else if (matrix[y][x] == 5) {
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