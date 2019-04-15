import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { hot } from 'react-hot-loader';

import style from './todoItem.scss';

const ToDoItem = ({ text, isCompleted }) => (
  <li className={style.todoItem}>
    <i
      className={
        isCompleted
          ? classnames(style.mark, 'far', style.faCheckCircle)
          : classnames(style.mark, 'far', style.faCircle)
      }
    />
    <span
      className={
        isCompleted ? classnames(style.completed, style.text) : style.text
      }
    >
      {text}
    </span>
    <i className={classnames('fa', style.faTimes)} />
  </li>
);

ToDoItem.propTypes = {
  text: PropTypes.string,
  isCompleted: PropTypes.bool,
};

ToDoItem.defaultProps = {
  text: '',
  isCompleted: false,
};

export default hot(module)(ToDoItem);
