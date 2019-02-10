const playerElements = document.querySelectorAll('.player');
const tetrises = [];

[...playerElements].forEach(element => {
  const tetris = new Tetris(element);
  tetrises.push(tetris);
});

const keyListeners = e => {

  [
    [65, 68, 83, 81, 69],
    [37, 39, 40, 16, 34]
  ].forEach((key, index) => {

    const player = tetrises[index].player;
    if (e.type == 'keydown') {
      // left
      if (e.keyCode == key[0]) {
        player.move(-1);
      }

      // right
      if (e.keyCode == key[1]) {
        player.move(1);
      }

      // rotate 1
      if (e.keyCode == key[3]) {
        player.rotate(-1);
      }

      // rotate 2
      if (e.keyCode == key[4]) {
        player.rotate(1);
      }
    }

    // down
    if (e.keyCode == key[2]) {
      if (e.type == 'keydown' && player.dropInterval != player.DROP_FAST) {
        player.drop();
        player.dropInterval = player.DROP_FAST;
      } else {
        player.dropInterval = player.DROP_SLOW;
      }
    }
  });
}

document.addEventListener('keydown', keyListeners);
document.addEventListener('keyup', keyListeners);
