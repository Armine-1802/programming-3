let LivingCreature = require("./LivingCreature")

module.exports = class Bambuk extends LivingCreature {

    mul() {
        this.multiply++
        let emptyCells = super.choosCell(0)
        let newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]

        if (newCell && this.multiply >= 8) {

            let newX = newCell[0]
            let newY = newCell[1]

            matrix[newY][newX] = 8

            let bambuk = new Bambuk(newX, newY)
            bambukArr.push(bambuk)

            this.multiply = 0

        }
    }

}