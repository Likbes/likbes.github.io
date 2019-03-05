import React from 'react';
import { hot } from 'react-hot-loader';
import TodoItem from './TodoItem';

import style from './app.scss';

const App = () => {
  return (
    <div className={style.todoList}>
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </div>
  );
};

export default hot(module)(App);
