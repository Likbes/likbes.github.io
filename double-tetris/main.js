const playerElements = document.querySelectorAll('.player');
const tetrises = [];

[...playerElements].forEach(element => {
  const canvas = element.querySelector('.tetris');
  const tetris = new Tetris(canvas);
  tetrises.push(tetris);
})
