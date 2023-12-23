let socket = io()

let seasons = ""

let side = 45

function winterFunc() {
    seasons = "Winter"
}
function springFunc() {
    seasons = "Spring"
}
function summerFunc() {
    seasons = "Summer"
}
function autumnFunc() {
    seasons = "Autumn"
}

let Spring = document.getElementById('Spring')
let Summer = document.getElementById('Summer')
let Autumn = document.getElementById('Autumn')
let Winter = document.getElementById('Winter')

Spring.addEventListener("click", springFunc)
Summer.addEventListener("click", summerFunc)
Autumn.addEventListener("click", autumnFunc)
Winter.addEventListener("click", winterFunc)





function setup() {
    frameRate(10)
    createCanvas(20 * side, 20 * side)

}


function nkarel(matrix) {
    for (let y = 0; y < matrix.length; y++) {
        for (x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                if (seasons == "Winter") {
                    fill("White")
                    rect(x * side, y * side, side, side)
                    textSize(side - 12)
                    text("❄️", x * side, y * side + 32)
                } else if (seasons == "Summer") {
                    fill("lime")
                    rect(x * side, y * side, side, side)
                    textSize(side - 12)
                    text("🌿", x * side, y * side + 32)
                } else if (seasons == "Autumn") {
                    fill("#CC7722")
                    rect(x * side, y * side, side, side)
                    textSize(side - 12)
                    text("🍂", x * side, y * side + 32)
                } else if (seasons == "Spring") {
                    fill("green")
                    rect(x * side, y * side, side, side)
                    textSize(side - 12)
                    text("🍀", x * side, y * side + 32)
                } else {
                    fill("darkgreen")
                    rect(x * side, y * side, side, side)
                    textSize(side - 12)
                    text("🌱 ", x * side, y * side + 32)
                }


            } else if (matrix[y][x] == 2) {
                if (seasons == "Winter") {
                    fill("white")
                    rect(x * side, y * side, side, side)
                    textSize(side - 12)
                    text("🐮 ", x * side, y * side + 32)
                }if (seasons == "Spring"){
                    fill("#708238")
                    rect(x * side, y * side, side, side)
                    textSize(side - 12)
                    text("🐮", x * side, y * side + 32)
                }else if(seasons == "Summer"){
                    fill("#FFD300")
                    rect(x * side, y * side, side, side)
                    textSize(side - 12)
                    text("🐄", x * side, y * side + 32)
                }else if(seasons == "Autumn"){
                    fill("ORANGE")
                    rect(x * side, y * side, side, side)
                    textSize(side - 12)
                    text("🐄", x * side, y * side + 32)
                } else {
                    fill("yellow")
                    rect(x * side, y * side, side, side)
                    textSize(side - 12)
                    text("🐮", x * side, y * side + 32)
                }
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
                if(seasons == "Winter") {
                    fill("white")
                    rect(x * side, y * side, side, side)
                    textSize(side - 12)
                    text("🧸", x * side, y * side + 32)
                }else{
                    fill("peru")
                    rect(x * side, y * side, side, side)
                    textSize(side - 12)
                    text("🧸", x * side, y * side + 32)  
                }
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

socket.on('send matrix', nkarel)

// setInterval(
//     function () {
//         socket.on('send matrix', nkarel)
//     }, 1000
// )