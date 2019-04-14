/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { hot } from 'react-hot-loader';
import style from './app.scss';

class Button extends React.Component {
  render() {
    const { text, handleClick } = this.props;
    return (
      <button className={style.button} onClick={handleClick} type="button">
        {text}
      </button>
    );
  }
}

export default hot(module)(Button);
