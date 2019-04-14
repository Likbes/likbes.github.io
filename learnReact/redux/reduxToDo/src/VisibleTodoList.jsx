/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { hot } from 'react-hot-loader';
import PropTypes from 'prop-types';
import TodoList from './TodoList';
import Todo from './Todo';

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed);
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed);
    default:
      return todos;
  }
};

class VisibleTodoList extends React.Component {
  componentDidMount() {
    const { store } = this.context;
    this.unsubscribe = store.subscribe(() => this.forceUpdate());
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const { store } = this.context;
    const state = store.getState();
    return (
      <TodoList
        todos={getVisibleTodos(state.todos, state.visibilityFilter)}
        onTodoClick={id =>
          store.dispatch({
            type: 'TOGGLE_TODO',
            id,
          })
        }
      />
    );
  }
}

VisibleTodoList.contextTypes = {
  store: PropTypes.object,
};

export default hot(module)(VisibleTodoList);
