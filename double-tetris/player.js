class Player {
  constructor(tetris) {
    this.tetris = tetris;
    this.arena = this.tetris.arena;

    this.dropCounter = 0;
    this.dropInterval = 1000;

    this.pos = {
      x: 0,
      y: 0
    };
    this.matrix = null;
    this.score = 0;

    this.reset();
    this.addEvents();
  }

  move(dir) {
    this.pos.x += dir;
    if (this.arena.collide(this)) {
      this.pos.x -= dir;
    }

    [this.tetris.shadow.pos.x, this.tetris.shadow.pos.y] = [this.pos.x, this.pos.y];
  }

  rotate(dir) {
    const pos = this.pos.x;
    let offset = 1;
    this._rotateMatrix(this.matrix, dir);
    while (this.arena.collide(this)) {
      this.pos.x += offset;
      offset = -(offset + (offset > 0 ? 1 : -1))
      if (offset > this.matrix[0].length) {
        this._rotateMatrix(this.matrix, -dir);
        this.pos.x = pos;
        this.tetris.shadow.matrix = this.matrix;
        [this.tetris.shadow.pos.x, this.tetris.shadow.pos.y] = [this.pos.x, this.pos.y];
        return;
      }
    }
  }

  _rotateMatrix(matrix, dir) {
    for (let y = 0; y < matrix.length; ++y) {
      for (let x = 0; x < y; ++x) {
        [
          matrix[x][y],
          matrix[y][x],
        ] = [
          matrix[y][x],
          matrix[x][y]
        ]
      }
    }

    if (dir > 0) {
      matrix.forEach(row => row.reverse());
    } else {
      matrix.reverse();
    }
  }

  drop() {
    this.pos.y++;
    if (this.arena.collide(this)) {
      this.pos.y--;
      this.arena.merge(this);
      this.reset();
      this.arena.sweap();
      this.updateScore();
    }
    this.dropCounter = 0;
  }

  reset() {
    const pieces = 'ILJOTSZ';
    this.matrix = this.createPiece(pieces[pieces.length * Math.random() | 0]);
    this.pos.y = 0;
    this.pos.x =
      (this.arena.matrix[0].length / 2 | 0) -
      (this.matrix[0].length / 2 | 0);

    if (this.arena.collide(this)) {
      this.arena.clear();
      this.score = 0;
      this.updateScore();
    }

    this.tetris.shadow.matrix = this.matrix;
    [this.tetris.shadow.pos.x, this.tetris.shadow.pos.y] = [this.pos.x, this.pos.y];

  }

  update(deltaTime) {
    this.dropCounter += deltaTime;
    if (this.dropCounter > this.dropInterval) this.drop();
  }

  updateScore() {
    document.getElementById('score').innerText = this.score;
  }

  createPiece(type) {
    if (type == 'T') {
      return [
        [0, 0, 0],
        [1, 1, 1],
        [0, 1, 0]
      ];
    }

    if (type == 'J') {
      return [
        [0, 2, 0],
        [0, 2, 0],
        [2, 2, 0]
      ];
    }

    if (type == 'L') {
      return [
        [0, 3, 0],
        [0, 3, 0],
        [0, 3, 3]
      ];
    }

    if (type == 'O') {
      return [
        [4, 4],
        [4, 4]
      ];
    }

    if (type == 'I') {
      return [
        [0, 5, 0, 0],
        [0, 5, 0, 0],
        [0, 5, 0, 0],
        [0, 5, 0, 0]
      ];
    }

    if (type == 'S') {
      return [
        [0, 6, 6],
        [6, 6, 0],
        [0, 0, 0]
      ];
    }

    if (type == 'Z') {
      return [
        [7, 7, 0],
        [0, 7, 7],
        [0, 0, 0]
      ];
    }
  }

  addEvents() {

    document.addEventListener('keydown', e => {
      // left
      if (e.keyCode == 37) {
        this.move(-1);
      }

      // right
      if (e.keyCode == 39) {
        this.move(1);
      }

      // down
      if (e.keyCode == 40) {
        this.drop();
      }

      // q
      if (e.keyCode == 81) {
        this.rotate(-1);
      }

      // w
      if (e.keyCode == 87) {
        this.rotate(1);
      }

    });
  }
}
