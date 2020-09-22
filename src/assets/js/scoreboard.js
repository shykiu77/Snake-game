import * as dom from './dom.js'

export class Scoreboard{
    constructor(score){
        this.score = score
        this.element = dom.makeElement('div','score')
        this.element.innerHTML = this.score
    }
    increaseScore = () =>{
        this.score = this.score + 1
        this.element.innerHTML = this.score
    }
}