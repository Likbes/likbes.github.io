class Shadow {
  constructor(tetris) {
    this.tetris = tetris;
    this.arena = this.tetris.arena;
    this.pos = {
      x: 0,
      y: 0
    };
    this.matrix = null;
    this.arenaMatrix = null;
  }

  // shadow matrix

  draw(matrix = this.matrix, offset = this.pos) {
    matrix.forEach((row, y) => {
      row.forEach((value, x) => {
        if (value != 0) {
          this.tetris.context.fillStyle = 'grey';
          this.tetris.context.fillRect(
            x + offset.x,
            y + offset.y,
            1, 1);
        }
      });
    });
  }

  fall(matrix) {
    out: while (true) {
      this.pos.y++;
      if (this.arena.collide(this, matrix)) {
        this.pos.y--;
        break out;
      }
    }

    this.draw(this.matrix, this.pos);
  }
}
