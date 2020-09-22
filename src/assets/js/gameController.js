import * as utils from './utils.js'

export function GameController(snake,gameboard,scoreboard){
    document.onkeydown = e => {
        if(/Arrow/.test(e.key)){
            const direction = e.key.split('Arrow')[1].toLowerCase()
            const [lineIncrement,columnIncrement] = utils.deconcat(utils.directionToPosition(direction))
            const [lineHead,columnHead] = utils.deconcat(snake.headPosition)
            if(gameboard.board[+lineHead + +lineIncrement][+columnHead + +columnIncrement] && gameboard.board[+lineHead + +lineIncrement][+columnHead + +columnIncrement].style.background != 'black')
                snake.move(direction)
        }
    }
    gameboard.board[Math.floor(gameboard.lineNumber/2)][Math.floor(gameboard.columnNumber/2)].style.background = 'black'
    snake.eat(scoreboard.increaseScore)
    let kickstart = true
    setInterval(() => {
        if(snake.headDirection){
            const [lineHead,columnHead] = utils.deconcat(snake.headPosition)
            const [lineTail,columnTail] = utils.deconcat(snake.tailPosition)
            
            if(kickstart || gameboard.board[lineHead][columnHead] && gameboard.board[lineHead][columnHead].style.background != 'black'){
                snake.updatePositions()
                gameboard.board[lineHead][columnHead].style.background = 'black'
                gameboard.board[lineTail][columnTail].style.background = 'white'
                if(kickstart){
                    kickstart = false
                    snake.eat(scoreboard.increaseScore)
                }
            }
        }
    },120)
}