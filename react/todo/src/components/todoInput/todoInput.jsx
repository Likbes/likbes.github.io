import React from 'react';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';
import classnames from 'classnames';

import style from './todoInput.scss';

const ToDoInput = ({ value, onChange, onKeyPress }) => (
  <div className={style.todoInputWrapper}>
    <i className={classnames('fas', style.faPlus)} />
    <input
      className={style.todoInput}
      placeholder="Click to add task"
      onChange={onChange}
      value={value}
      onKeyPress={onKeyPress}
    />
  </div>
);

ToDoInput.propTypes = {
  onChange: PropTypes.func,
  onKeyPress: PropTypes.func,
  value: PropTypes.string,
};

ToDoInput.defaultProps = {
  onChange: () => { },
  onKeyPress: () => { },
  value: '',
};

export default hot(module)(ToDoInput);
