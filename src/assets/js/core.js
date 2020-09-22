import * as Board from './board.js'
import * as Snake from './snake.js'
import * as Scoreboard from './scoreboard.js'
import * as gc from './gameController.js'


const game = new Board.Board(10,500,500)
document.querySelector('[gameArea]').appendChild(game.element)

const snake = new Snake.Snake(`${Math.floor(game.lineNumber/2)},${Math.floor(game.columnNumber/2)}`)
//fix this shit.
const scoreboard = new Scoreboard.Scoreboard(-2)
document.querySelector('[gameArea]').appendChild(scoreboard.element)

gc.GameController(snake,game,scoreboard)

