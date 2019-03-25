import React from 'react';
import { hot } from 'react-hot-loader';
import style from './app.scss';

const Header = () => {
  return (
    <header className={style.header}>
      <img
        src="http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png"
        alt="Ploblem?"
      />
      <p>Meme Generator</p>
    </header>
  );
};

export default hot(module)(Header);
