let LivingCreature = require("./LivingCreature")

module.exports = class Patap extends LivingCreature {
    constructor(x, y) {
        super(x, y)
        this.energy = 150

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

    choosCell(char1, char2) {
        this.getNewCoordinates()
        return super.choosCell(char1, char2)
    }

    eat() {
        let foods = this.choosCell(10, 4)
        let food = foods[Math.floor(Math.random() * foods.length)]

        if (food) {
            
            let newX = food[0]
            let newY = food[1]

            for (let i = 0; i < matrix.length; i++) {
                for (let j = 0; j < matrix[i].length; j++) {

                    if (matrix[newY][newX] == 10) {

                        matrix[newY][newX] = 5
                        matrix[this.y][this.x] = 0

                    }
                }

            }



            this.x = newX
            this.y = newY


        } else {
            this.move()
        }

    }

    move() {
        let emptyCells = this.choosCell(0)
        let newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]

        if (newCell) {
            this.energy--
            let newX = newCell[0]
            let newY = newCell[1]

            matrix[newY][newX] = 5
            matrix[this.y][this.x] = 0


            this.x = newX
            this.y = newY

            if (this.energy <= 0) {
                this.die()
            }
        }

    }

    die() {
        matrix[this.y][this.x] = 0

        for (let i in patapArr) {
            if (this.x == patapArr[i].x && this.y == patapArr[i].y) {
                patapArr.splice(i, 1)

                break;
            }
        }
    }

}