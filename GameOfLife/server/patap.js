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
        let food = random(foods)

        if (food) {
            reserv.pop();

            let newX = food[0]
            let newY = food[1]

            matrix[newY][newX] = 5
            matrix[this.y][this.x] = 0



            this.x = newX
            this.y = newY
            //     if(this.energy >= 27){
            //         this.mul()
            // }

        } else {
            this.move()
        }

    }

    move() {
        let emptyCells = this.choosCell(0)
        let newCell = random(emptyCells)

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

    // mul(){
    //     let emptyCells = this.choosCell(0)
    //     let newCell = random(emptyCells)

    //     if(newCell){

    //         let newX = newCell[0]
    //         let newY = newCell[1]

    //         matrix[newY][newX] = 2

    //         let patap = new Patap(newX,newY)
    //         patapArr.push(patap)



    //     }
    // }

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