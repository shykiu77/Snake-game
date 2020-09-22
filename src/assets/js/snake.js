import * as utils from './utils.js'

export class Snake{
    constructor(initialPosition){
        this.headPosition = initialPosition
        this.tailPosition = initialPosition
        this.movementQueue = new Array()
    }

    move(direction){
        this.headDirection = direction
    }
    eat(cb){
        this.hasEaten = true
        cb()
    }

    updatePositions(){
        const directionVector = utils.directionToPosition(this.headDirection)
        
        let [lineIncrement,columnIncrement] = utils.deconcat(directionVector)

        this.headPosition = utils.concat(+utils.deconcat(this.headPosition)[0] + +lineIncrement,+utils.deconcat(this.headPosition)[1] + +columnIncrement)
        this.movementQueue.push(directionVector)

        if(!this.hasEaten){
            [lineIncrement,columnIncrement] = utils.deconcat(this.movementQueue.shift())
            this.tailPosition = utils.concat(+utils.deconcat(this.tailPosition)[0] + +lineIncrement,+utils.deconcat(this.tailPosition)[1] + +columnIncrement)
        }
        else{
            this.hasEaten = false
        }
    }
}