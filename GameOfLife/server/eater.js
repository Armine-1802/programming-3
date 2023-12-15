let LivingCreature = require("./LivingCreature")

module.exports = class Eater extends LivingCreature {
    constructor(x, y) {
        super(x, y)
        this.energy = 20

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

    choosCell(char1, char2, char3,) {
        this.getNewCoordinates()
        return super.choosCell(char1, char2, char3)
    }

    mul() {
        let emptyCells = super.choosCell(0)
        let newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]

        if (newCell) {

            let newX = newCell[0]
            let newY = newCell[1]

            matrix[newY][newX] = 6

            let eater = new Eater(newX, newY)
            eaterArr.push(eater)



        }
    }

    eat() {
        let foods = super.choosCell(1, 2, 3,)
        let food = foods[Math.floor(Math.random() * foods.length)]

        if (food) {
            this.energy += 10
            let newX = food[0]
            let newY = food[1]

            matrix[newY][newX] = 6
            matrix[this.y][this.x] = 0

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

            // for(let i in pandaArr){
            //     if(newX == pandaArr[i].x && newY == pandaArr[i].y){
            //         pandaArr.splice(i,1)

            //         break;
            //     }
            // }

            this.x = newX
            this.y = newY

            if (this.energy >= 45) {
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

            matrix[newY][newX] = 6
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

        for (let i in eaterArr) {
            if (this.x == eaterArr[i].x && this.y == eaterArr[i].y) {
                eaterArr.splice(i, 1)

                break;
            }
        }
    }
}