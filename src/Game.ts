import Worm from './Worm';

export default class Game {
    
    canvas: HTMLCanvasElement
    context: CanvasRenderingContext2D
    gameIntervalId: number
    worms: Worm[]

    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas
        this.worms = Array()
        this.context = canvas.getContext("2d")
        this.showScores()
        this.start()
    }

    public addWorm(name: string) {
        this.worms.push(new Worm(name))
    }

    start() {
        this.gameIntervalId = setInterval(this.update, 1000, this)
    }

    stop() {
        clearInterval(this.gameIntervalId)
    }

    showScores() : void {
        this.context.fillText("Score: ", 10, 10)
    }

    update(game: Game) {
        for(let worm of game.worms) {
            game.drawWorm(worm)
        }
    }

    drawWorm(worm: Worm) {
        
    }

    updateScore(){

    }

}