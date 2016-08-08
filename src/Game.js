import Paddle from './Paddle';
import Board from './Board';
import Ball from './Ball';
const gap = 10;
const p1Keys = {up: 65, down:90 }
const p2Keys = {up: 38, down:40 }

export default class Game {
	   	constructor() {
			const canvas = document.getElementById('game');
			this.width = canvas.width;
			this.height = canvas.height;
			this.ctx = canvas.getContext('2d');
			this.ctx.fillStyle = 'white';
		//this.board= new Board(this.width);
			this.board= new Board(this.width, this.height);
			this.ball = new Ball(this.height, this.width);
	    this.player1 = new Paddle(this.height, gap, p1Keys);
	    this.player2 = new Paddle(this.height, this.width - 4 - gap,p2Keys);
	      // check your console for paddles
	      console.log(this.player1, this.player2);
	   }

		render() {
      this.board.render(this.ctx);
      this.player1.render(this.ctx);
      this.player2.render(this.ctx);
   		this.ball.render(this.ctx, this.player1, this.player2);
			// add here
   }
}

//C02QQCNSFVH3