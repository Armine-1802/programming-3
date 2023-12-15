let LivingCreature = require("./LivingCreature")

module.exports = class Panda extends LivingCreature {
    constructor(x, y) {
        super(x, y)
        this.energy = 50
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


    choosCell(char) {
        this.getNewCoordinates()
        return super.choosCell(char)
    }

    mul() {
        let emptyCells = super.choosCell(0)
        let newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]

        if (newCell) {

            let newX = newCell[0]
            let newY = newCell[1]

            matrix[newY][newX] = 7

            let panda = new Panda(newX, newY)
            pandaArr.push(panda)



        }
    }

    eat() {
        let foods = super.choosCell(8)
        let food = foods[Math.floor(Math.random() * foods.length)]

        if (food) {
            this.energy += 5
            let newX = food[0]
            let newY = food[1]

            matrix[newY][newX] = 7
            matrix[this.y][this.x] = 0

            for (let i in bambukArr) {
                if (newX == bambukArr[i].x && newY == bambukArr[i].y) {
                    bambukArr.splice(i, 1)

                    break;
                }
            }

            this.x = newX
            this.y = newY
            if (this.energy >= 75) {
                this.mul()
            }

        } else {
            this.move()
        }

    }
    move() {
        let emptyCells = super.choosCell(0)
        let newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]

        if (newCell) {
            this.energy--
            let newX = newCell[0]
            let newY = newCell[1]

            matrix[newY][newX] = 7
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

        for (let i in pandaArr) {
            if (this.x == pandaArr[i].x && this.y == pandaArr[i].y) {
                pandaArr.splice(i, 1)

                break;
            }
        }
    }

}

