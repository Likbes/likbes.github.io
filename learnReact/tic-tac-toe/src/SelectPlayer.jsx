/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { hot } from 'react-hot-loader';
import style from './app.scss';

// eslint-disable-next-line react/prefer-stateless-function
class SelectPLayer extends React.Component {
  render() {
    const { handleSelect } = this.props;
    return (
      <div className={style.selectPlayer} id="selectMenu">
        <p>Choose your side:</p>
        <div className={style.sides}>
          <div
            className={style.chooseSide}
            onClick={handleSelect.bind(this, 'X')}
          >
            X
          </div>
          <div
            className={style.chooseSide}
            onClick={handleSelect.bind(this, 'O')}
          >
            O
          </div>
        </div>
      </div>
    );
  }
}

export default hot(module)(SelectPLayer);
