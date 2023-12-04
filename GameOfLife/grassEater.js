class GrassEater extends LivingCreature{
    constructor (x,y){
        super(x,y)
        this.energy = 20
    }


    getNewCoordinates(){
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x , this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y ],
            [this.x + 1, this.y ],
            [this.x - 1, this.y + 1],
            [this.x , this.y + 1],
            [this.x + 1, this.y + 1]
            ];
    }


    choosCell(char){
        this.getNewCoordinates()
        return super.choosCell(char)

    }

    mul(){
        let emptyCells = this.choosCell(0)
        let newCell = random(emptyCells)

        if(newCell){

            let newX = newCell[0]
            let newY = newCell[1]

            matrix[newY] [newX] = 2

            let grEat = new GrassEater(newX,newY)
            grassEaterArr.push(grEat)

           

        }
    }

    eat(){
        let foods = this.choosCell(1)
        let food = random(foods)

        if(food){
            this.energy += 5
            let newX = food[0]
            let newY= food[1]

        matrix[newY][newX] = 2
        matrix[this.y][this.x] = 0 

            for(let i in grassArr){
                if(newX == grassArr[i].x && newY == grassArr[i].y){
                    grassArr.splice(i,1)

                    break;
                }
            }

            this.x = newX
            this.y = newY
            if(this.energy >= 27){
                this.mul()
        }

            }else{
                this.move()
            }
        
    }
    move(){
        let emptyCells = this.choosCell(0)
        let newCell = random(emptyCells)

            if(newCell){
                this.energy--
                let newX = newCell[0]
                let newY = newCell[1]

                matrix[newY][newX] = 2
                matrix[this.y][this.x] = 0


                this.x = newX
                this.y = newY

                if(this.energy <= 0 ){
                    this.die()
                }
            }

    }

    die(){
        matrix[this.y][this.x] = 0

        for(let i in grassEaterArr){
            if(this.x == grassEaterArr[i].x && this.y == grassEaterArr[i].y){
                grassEaterArr.splice(i,1)

                break;
            }
        }
    }

}

