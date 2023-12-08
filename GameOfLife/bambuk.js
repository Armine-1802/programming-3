class Bambuk extends LivingCreature {

    mul() {
        this.multiply++
        let emptyCells = this.choosCell(0)
        let newCell = random(emptyCells)

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