/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { hot } from 'react-hot-loader';
import style from './app.scss';

// eslint-disable-next-line react/prefer-stateless-function
class ResultsContainer extends React.Component {
  render() {
    const { result, replay } = this.props;
    return (
      <div
        className={style.gameEnd}
        id="gameEndMenu"
        style={{ display: result === 'gameplay' ? 'none' : 'block' }}
      >
        <h1>{result}</h1>
        <button type="button" onClick={replay} className={style.replay}>
          Play again?
        </button>
      </div>
    );
  }
}

export default hot(module)(ResultsContainer);
