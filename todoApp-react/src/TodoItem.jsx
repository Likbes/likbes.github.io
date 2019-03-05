import React from 'react';
import { hot } from 'react-hot-loader';

import styles from './app.scss';

const TodoItem = () => {
  return (
    <div className={styles.todoItem}>
      <input type="checkbox" />
      <p>Placeholder for checkbo</p>
    </div>
  );
};

export default hot(module)(TodoItem);
