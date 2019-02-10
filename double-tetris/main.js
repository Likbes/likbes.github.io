const playerElements = document.querySelectorAll('.player');
const tetrises = [];

[...playerElements].forEach(element => {
  const canvas = element.querySelector('.tetris');
  const tetris = new Tetris(canvas);
  tetrises.push(tetris);
});


document.addEventListener('keydown', e => {

  [
    [65, 68, 83, 81, 69],
    [37, 39, 40, 16, 34]
  ].forEach((key, index) => {

    const player = tetrises[index].player;

    // left
    if (e.keyCode == key[0]) {
      player.move(-1);
    }

    // right
    if (e.keyCode == key[1]) {
      player.move(1);
    }

    // down
    if (e.keyCode == key[2]) {
      player.drop();
    }

    // rotate 1
    if (e.keyCode == key[3]) {
      player.rotate(-1);
    }

    // rotate 2
    if (e.keyCode == key[4]) {
      player.rotate(1);
    }
  });
});
