/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { hot } from 'react-hot-loader';

import style from './todoItem.scss';

const ToDoItem = ({ text, isCompleted, id, removeTask, completeTask }) => (
  <li className={style.todoItem}>
    <i
      onClick={() => completeTask(id)}
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
    <i
      className={classnames('fa', style.faTimes)}
      onClick={() => removeTask(id)}
    />
  </li>
);

ToDoItem.propTypes = {
  text: PropTypes.string,
  isCompleted: PropTypes.bool,
  removeTask: PropTypes.func,
  completeTask: PropTypes.func,
  id: PropTypes.number,
};

ToDoItem.defaultProps = {
  text: '',
  isCompleted: false,
  // eslint-disable-next-line prettier/prettier
  removeTask: () => { },
  // eslint-disable-next-line prettier/prettier
  completeTask: () => { },
  id: 0,
};

export default hot(module)(ToDoItem);
