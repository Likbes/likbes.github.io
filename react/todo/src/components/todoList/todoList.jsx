import React from 'react';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';

import ToDoItem from '../todoItem/todoItem';

import style from './todoList.scss';

const ToDoList = ({ tasksList, removeTask, completeTask }) => (
  <ul className={style.todoList}>
    {tasksList.map(({ id, text, isCompleted }) => (
      <ToDoItem
        key={id}
        id={id}
        text={text}
        isCompleted={isCompleted}
        removeTask={removeTask}
        completeTask={completeTask}
      />
    ))}
  </ul>
);

ToDoList.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  tasksList: PropTypes.array,
  removeTask: PropTypes.func,
  completeTask: PropTypes.func,
};

ToDoList.defaultProps = {
  tasksList: [],
  // eslint-disable-next-line prettier/prettier
  removeTask: () => { },
  // eslint-disable-next-line prettier/prettier
  completeTask: () => { },
};

export default hot(module)(ToDoList);
