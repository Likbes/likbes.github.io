/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import style from './app.scss';
import Game2048 from './assets/2048.png';

class App extends React.Component {
  render() {
    return (
      <>
        <h1>Pet Projects</h1>
        <h2>Vanilla JS</h2>
        <div className="vanilla">
          <a href="../../2048/2048.html" className={style.block}>
            <div className={style.imgWrapper}>
              <img src={Game2048} alt="2048 game" />
              <h3 className={style.name}>2048</h3>
              <p className={style.descr}>Join the numbers and get to the 2048 tile</p>
            </div>
          </a>
          <a href="" className={style.block}></a>
          <a href="" className={style.block}></a>
        </div>
      </>
    );
  }
}

export default hot(module)(App);
