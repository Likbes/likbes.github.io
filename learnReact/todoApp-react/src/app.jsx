/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unused-expressions */
/* eslint-disable class-methods-use-this */
import React from 'react';
import { hot } from 'react-hot-loader';
import TodoItem from './TodoItem';
import todoData from './todoData';

import style from './app.scss';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: todoData,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id) {
    this.setState(prevState => {
      const updateTodos = prevState.todos.map(todo => {
        if (todo.key === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      });

      return {
        todos: updateTodos,
      };
    });
  }

  render() {
    return (
      <div className={style.todoList}>
        {this.state.todos.map(item => (
          <TodoItem
            todo={item.target}
            id={item.key}
            completed={item.completed}
            changeEvent={this.handleChange}
          />
        ))}
      </div>
    );
  }
}

export default hot(module)(App);
