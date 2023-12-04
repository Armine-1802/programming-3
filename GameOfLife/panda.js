class Panda{
    constructor (x,y){
        this.x = x
        this.y = y
        this.energy = 50
        this.directions = []
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
        let found = []
    
        for(let i in this.directions){
            let x = this.directions[i][0]
            let y = this.directions[i][1]
    
            if(x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length){
                if (matrix[y][x] == char){
                    found.push(this.directions[i])
                }
            }
        }
    
        return found
    }

    mul(){
        let emptyCells = this.choosCell(0)
        let newCell = random(emptyCells)

        if(newCell){

            let newX = newCell[0]
            let newY = newCell[1]

            matrix[newY] [newX] = 7

            let panda = new Panda(newX,newY)
            pandaArr.push(panda)

           

        }
    }

    eat(){
        let foods = this.choosCell(8)
        let food = random(foods)

        if(food){
            this.energy += 5
            let newX = food[0]
            let newY= food[1]

        matrix[newY][newX] = 7
        matrix[this.y][this.x] = 0 

            for(let i in bambukArr){
                if(newX == bambukArr[i].x && newY == bambukArr[i].y){
                    bambukArr.splice(i,1)

                    break;
                }
            }

            this.x = newX
            this.y = newY
            if(this.energy >= 75){
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

                matrix[newY][newX] = 7
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

        for(let i in pandaArr){
            if(this.x == pandaArr[i].x && this.y == pandaArr[i].y){
                pandaArr.splice(i,1)

                break;
            }
        }
    }

}

