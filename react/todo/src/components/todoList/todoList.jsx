import React from 'react';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';

import ToDoItem from '../todoItem/todoItem';

import style from './todoList.scss';

const ToDoList = ({ tasksList }) => (
  <ul className={style.todoList}>
    {tasksList.map(({ id, text, isCompleted }) => (
      <ToDoItem key={id} text={text} isCompleted={isCompleted} />
    ))}
  </ul>
);

ToDoList.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  tasksList: PropTypes.array,
};

ToDoList.defaultProps = {
  tasksList: [],
};

export default hot(module)(ToDoList);
