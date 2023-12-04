class Bomb{
    constructor (x,y){
        this.x = x
        this.y = y
        this.energy = 12
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

    choosCell(char1,char2,char3,char4){
        this.getNewCoordinates()
        let found = []
    
        for(let i in this.directions){
            let x = this.directions[i][0]
            let y = this.directions[i][1]
    
            if(x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length){
                if (matrix[y][x] == char1){
                    found.push(this.directions[i])
                }  

                if (matrix[y][x] == char2){
                    found.push(this.directions[i])
                }

                if (matrix[y][x] == char3){
                    found.push(this.directions[i])
                }

                if (matrix[y][x] == char4){
                    found.push(this.directions[i])
                }
            }
        }
    
        return found
    }

    explode (){
        let charecters  = this.choosCell(1,2,3,6)
        let newChar = random(charecters)
        let emptyCells = this.choosCell(0)
        // let newCell = random(emptyCells)

             if(newChar  &&  emptyCells ){
                let newX = newChar[0]
                let newY = newChar[1]

         

                matrix[newY][newX] = 10
                // for(let i = 0; i , matrix.length; i++){
                //     for(let j = 0; j , matrix){

                //     }
                // }
                // reserv.push(10)
                console.log("rrrr", reserv);


                for(let i in grassArr){
                    if(newX == grassArr[i].x && newY == grassArr[i].y){
                        grassArr.splice(i,1)
                        
    
                        break;
                    }
                }
                
    
    
                for(let i in grassEaterArr){
                    if(newX == grassEaterArr[i].x && newY == grassEaterArr[i].y){
                        grassEaterArr.splice(i,1)
                         
                        break;
                    }
                }

                for(let i in predatorArr){
                    if(newX == predatorArr[i].x && newY == predatorArr[i].y){
                        predatorArr.splice(i,1)
                        
                        break;
                    }
                }

                for(let i in eaterArr){
                    if(newX == eaterArr[i].x && newY == eaterArr[i].y){
                        eaterArr.splice(i,1)
                         
                        break;
                    }
                }


                for(let i in emptyCells){
                    let emptyX = emptyCells[i][0]
                    let emptyY = emptyCells[i][1]

                         matrix[emptyY][emptyX] = 10
                       
                    
                  }
              
                  matrix[this.y][this.x] = 0
                  this.die()


          
                

             }
    }


    die(){
        for(let i in bombArr){
            if(this.x == bombArr[i].x && this.y == bombArr[i].y){
                bombArr.splice(i,1)

                      break;
          }
      }
    }
}