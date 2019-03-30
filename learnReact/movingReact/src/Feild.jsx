/* eslint-disable react/prop-types */
/* eslint-disable max-len */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { hot } from 'react-hot-loader';
import style from './app.scss';

class Field extends React.Component {
  render() {
    const { left, top } = this.props;
    return (
      <div className={style.container}>
        <img
          src="https://s3.amazonaws.com/media-p.slid.es/uploads/jhabdas/images/969312/react-logo-1000-transparent.png"
          alt="react logo"
          style={{ left, top }}
        />
      </div>
    );
  }
}

export default hot(module)(Field);
