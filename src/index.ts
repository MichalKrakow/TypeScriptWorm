import Game from './Game';

let gameCanvas: HTMLCanvasElement = <HTMLCanvasElement> document.getElementById('game');
let game: Game = new Game(gameCanvas);
(<any>window).game = game;      // haxy :(

interface Animal {
    traveled: number
    weight: number

    walk() : number
    grow() : number
}

class Cat implements Animal {
    traveled: number = 0
    weight: number = 100

    walk() {
       return this.traveled += 10; 
    }
    grow(){
        return this.weight += 10;
    }
}

let cat : Animal = new Cat();
cat.walk();
cat.grow();

console.log(cat);