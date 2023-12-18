let LivingCreature = require("./LivingCreature")

module.exports = class Bomb extends LivingCreature {
    constructor(x, y) {
        super(x, y)
        this.energy = 12

    }

    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

    choosCell(char1, char2, char3, char4) {
        this.getNewCoordinates()
        return super.choosCell(char1, char2, char3, char4)
    }

    explode() {
        let charecters = this.choosCell(1, 2, 3, 6)
        let newChar = charecters[Math.floor(Math.random() * charecters.length)]
        let emptyCells = this.choosCell(0)

        if (newChar && emptyCells) {
            let newX = newChar[0]
            let newY = newChar[1]


            matrix[newY][newX] = 10
            

            for (let i in grassArr) {
                if (newX == grassArr[i].x && newY == grassArr[i].y) {
                    grassArr.splice(i, 1)


                    break;
                }
            }



            for (let i in grassEaterArr) {
                if (newX == grassEaterArr[i].x && newY == grassEaterArr[i].y) {
                    grassEaterArr.splice(i, 1)

                    break;
                }
            }

            for (let i in predatorArr) {
                if (newX == predatorArr[i].x && newY == predatorArr[i].y) {
                    predatorArr.splice(i, 1)

                    break;
                }
            }

            for (let i in eaterArr) {
                if (newX == eaterArr[i].x && newY == eaterArr[i].y) {
                    eaterArr.splice(i, 1)

                    break;
                }
            }


            for (let i in emptyCells) {
                let emptyX = emptyCells[i][0]
                let emptyY = emptyCells[i][1]

                matrix[emptyY][emptyX] = 10


            }

            matrix[this.y][this.x] = 0
            this.die()





        }
    }


    die() {
        for (let i in bombArr) {
            if (this.x == bombArr[i].x && this.y == bombArr[i].y) {
                bombArr.splice(i, 1)

                break;
            }
        }
    }
}