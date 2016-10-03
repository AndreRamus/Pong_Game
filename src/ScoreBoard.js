export default class ScoreBoard {
   constructor(x, y, score) {
      this.x = x;
      this.y = y;
      this.score = 0;
   }
   render(ctx, player) {
      ctx.font = "30px Helvetica";
      ctx.fillText(player.score, this.x, this.y);
   }
}
