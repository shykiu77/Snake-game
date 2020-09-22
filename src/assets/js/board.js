import * as dom from './dom.js'
import * as utils from './utils.js'

export class Board{
    constructor(cellSize,width,height){
        this.lineNumber = Math.floor(height/cellSize)
        this.columnNumber = Math.floor(width/cellSize)

        this.element = dom.makeElement('div','board')
        this.element.style.height = `${cellSize*this.lineNumber}px`
        this.element.style.width = `${cellSize*this.columnNumber}px`
        
        this.board = utils.makeMatrix(this.lineNumber,this.columnNumber)

        for(let i=0;i<this.lineNumber;i++){
            const line = dom.makeElement('div','line')
            line.style.height = `${cellSize}px`
            line.style.width = `${cellSize*this.columnNumber}px`
            for(let j=0;j<this.columnNumber;j++){
                this.board[i][j] = dom.makeElement('div','tile')
                this.board[i][j].style.height = `${cellSize}px`
                this.board[i][j].style.width = `${cellSize}px`
                this.board[i][j].style.background = 'white'
                line.appendChild(this.board[i][j])
            }
            this.element.appendChild(line)
        }
    }

    changeColor(position,color){
        const [i,j] = utils.deconcat(position)
        this.board[i][j].style.background = color
    }
}