// Board.js
export default class Board {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    drawLine(ctx) {
        ctx.setLineDash([15, 15]);
        ctx.beginPath();
        ctx.moveTo(this.width / 2, 0);
        ctx.lineTo(this.width / 2, this.height);
        // ctx.strokeStyle = "white";
        ctx.stroke();
    }
    render(ctx) {
    ctx.clearRect(0, 0, this.width, this.height);
        this.drawLine(ctx);
    }
}
