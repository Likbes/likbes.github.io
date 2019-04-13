/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import style from './app.scss';
import Block from './Block';

// imgs
import Game2048 from './assets/2048.png';
import BrickBreaker from './assets/BrickBreaker.png';
import TetrisGame from './assets/Tetris.png';

const VanillaProjects = [
  {
    name: '2048',
    descr: 'Join the numbers and get to the 2048 tile',
    url: '../../2048/2048.html',
    img: Game2048,
  },
  {
    name: 'Brick Breaker',
    descr: 'Break blocks to win in level and dynamic mode',
    url: '../../brick-breaker/home.html',
    img: BrickBreaker,
  },
  {
    name: 'TETRIS',
    descr: 'The goal is to drop blocks down into lines',
    url: '../../tetris/index.html',
    img: TetrisGame,
  },
];
class App extends React.Component {
  render() {
    return (
      <>
        <h1 className={style.title}>Pet Projects</h1>
        <h2 className={style.subTitle}>Vanilla JS</h2>
        <div className={style.vanilla}>
          {VanillaProjects.map(block => {
            const { name, descr, url, img } = block;
            return (
              <Block name={name} descr={descr} url={url} img={img} key={name} />
            );
          })}
        </div>
        <h2 className={style.subTitle}>React Projects</h2>
      </>
    );
  }
}

export default hot(module)(App);
