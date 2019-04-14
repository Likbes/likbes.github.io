/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { hot } from 'react-hot-loader';
import PropTypes from 'prop-types';
import style from './app.scss';

const CalcDisplay = ({ input, del, clear, enter }) => {
  return (
    <div>
      <div className={style.calcUI}>
        <button
          type="button"
          className={style.numberBtn}
          onClick={() => input('7')}
        >
          7
        </button>
        <button
          type="button"
          className={style.numberBtn}
          onClick={() => input('8')}
        >
          8
        </button>
        <button
          type="button"
          className={style.numberBtn}
          onClick={() => input('9')}
        >
          9
        </button>
        <button
          type="button"
          className={style.operationBtn}
          onClick={() => input('/')}
        >
          /
        </button>
        <button
          type="button"
          className={style.numberBtn}
          onClick={() => input('4')}
        >
          4
        </button>
        <button
          type="button"
          className={style.numberBtn}
          onClick={() => input('5')}
        >
          5
        </button>
        <button
          type="button"
          className={style.numberBtn}
          onClick={() => input('6')}
        >
          6
        </button>
        <button
          type="button"
          className={style.operationBtn}
          onClick={() => input('*')}
        >
          *
        </button>
        <button
          type="button"
          className={style.numberBtn}
          onClick={() => input('1')}
        >
          1
        </button>
        <button
          type="button"
          className={style.numberBtn}
          onClick={() => input('2')}
        >
          2
        </button>
        <button
          type="button"
          className={style.numberBtn}
          onClick={() => input('3')}
        >
          3
        </button>
        <button
          type="button"
          className={style.operationBtn}
          onClick={() => input('+')}
        >
          +
        </button>
        <button
          type="button"
          className={style.delBtn}
          onClick={() => del()}
        >
          del
        </button>
        <button
          type="button"
          className={style.numberBtn}
          onClick={() => input('0')}
        >
          0
        </button>
        <button
          type="button"
          className={style.clearBtn}
          onClick={() => clear()}
        >
          CE
        </button>
        <button
          type="button"
          className={style.operationBtn}
          onClick={() => input('-')}
        >
          -
        </button>
      </div>
      <button type="button" className={style.enterBtn} onClick={() => enter()}>
        ENTER
      </button>
    </div>
  );
};

CalcDisplay.propTypes = {
  input: PropTypes.func.isRequired,
  enter: PropTypes.func.isRequired,
  del: PropTypes.func.isRequired,
  clear: PropTypes.func.isRequired,
};

export default hot(module)(CalcDisplay);
