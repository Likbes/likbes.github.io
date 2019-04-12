/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import style from './app.scss';

class App extends React.Component {
  render() {
    return (
      <>
        <h1>Pet Projects</h1>
        <h2>Vanilla JS</h2>
        <div className="vanilla">
          <a href="likbes.github.io/2048/2048.html" className={style.block}>
            <img src="../img/2048.png" alt="2048 game" />
            <h3>2048</h3>
          </a>
          <a href="" className={style.block}></a>
          <a href="" className={style.block}></a>
        </div>
      </>
    );
  }
}

export default hot(module)(App);
