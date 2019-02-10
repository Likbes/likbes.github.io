class Tetris {
  constructor(element) {

    this.element = element;
    this.canvas = element.querySelector('.tetris');
    this.context = this.canvas.getContext('2d');
    this.context.scale(20, 20);

    this.shadow = new Shadow(this);
    this.arena = new Arena(12, 20);
    this.player = new Player(this);

    this.colors = [
      null,
      '#FF0D72',
      '#0DC2FF',
      '#0DFF72',
      '#F538FF',
      '#FF8E0D',
      '#FFE138',
      '#3877FF',
      'grey'
    ]

    let lastTime = 0;
    // draw movement tetrix every second

    const update = (time = 0) => {
      const deltaTime = time - lastTime;
      lastTime = time;

      this.player.update(deltaTime);

      this.draw();
      requestAnimationFrame(update);
    };

    update();
    this.player.reset();
    this.updateScore(this.player.score);
  }

  drawMatricks(matrix, offset) {
    matrix.forEach((row, y) => {
      row.forEach((value, x) => {
        if (value != 0) {
          this.context.fillStyle = this.colors[value];
          this.context.fillRect(
            x + offset.x,
            y + offset.y,
            1, 1);
        }
      });
    });
  }

  draw() {
    this.context.fillStyle = '#000';
    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
    this.drawMatricks(this.arena.matrix, {
      x: 0,
      y: 0,
    });
    [this.shadow.pos.x, this.shadow.pos.y] = [this.player.pos.x, this.player.pos.y]
    this.shadow.fall();

    this.drawMatricks(this.player.matrix, this.player.pos);
  }

  updateScore(score) {
    this.element.querySelector('.score').innerText = score;
  }
}
