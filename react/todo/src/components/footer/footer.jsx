import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { hot } from 'react-hot-loader';

import style from './footer.scss';

const FILTER_BTN = [
  {
    text: 'All',
    id: 'all',
  },
  {
    text: 'Active',
    id: 'active',
  },
  {
    text: 'Completed',
    id: 'completed',
  },
];

const Footer = ({ amount, activeFilter = 'all' }) => (
  <div className={style.footer}>
    <span className={style.amount}>{amount} tasks left</span>
    <div className={style.btnGround}>
      {FILTER_BTN.map(({ text, id }) => (
        <button
          key={id}
          type="button"
          className={
            id === activeFilter
              ? classnames(style.filterBtn, style.active)
              : style.filterBtn
          }
        >
          {text}
        </button>
      ))}
    </div>
  </div>
);

Footer.propTypes = {
  amount: PropTypes.number.isRequired,
  activeFilter: PropTypes.string,
};

Footer.defaultProps = {
  activeFilter: 'all',
};

export default hot(module)(Footer);
