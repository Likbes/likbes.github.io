class Shadow {
  constructor(tetris) {
    this.tetris = tetris;
    this.pos = {
      x: 0,
      y: 0
    };
    this.matrix = null;
  }

  // shadow matrix

  draw(offset) {
    this.matrix.forEach((row, y) => {
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

  fall() {
    out: while (true) {
      this.pos.y++;
      if (this.tetris.arena.collide(this)) {
        this.pos.y--;
        break out;
      }
    }

    this.draw(this.pos);
  }
}
