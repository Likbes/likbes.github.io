import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import Footer from './Footer'

import { filterTodos } from '../lib/utils';

import {
  saveTodo,
  loadTodos,
  destroyTodo,
  updateTodo
} from '../lib/service';

export default class TodoApp extends Component {
  constructor(props) {
    super(props)

    this.state = {
      todos: [],
      currentTodo: '',
      error: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      currentTodo: e.target.value,
    })
  }

  handleDelete(id) {
    destroyTodo(id)
      .then(() => this.setState(prevState => ({
        todos: prevState.todos.filter(t => t.id !== id)
      })));
  }

  handleToggle(id) {
    const { todos } = this.state;
    const targetTodo = todos.find(t => t.id === id);
    const updated = {
      ...targetTodo,
      isComplete: !targetTodo.isComplete,
    };

    updateTodo(updated)
      .then(({ data }) => {
        const { todos } = this.state;
        const newTodos = todos.map(
          t => t.id === data.id ? data : t
        );

        this.setState({ todos: newTodos });
      });
  }

  handleSubmit(e) {
    e.preventDefault();

    const newTodo = {
      name: this.state.currentTodo,
      isComplete: false,
    };

    saveTodo(newTodo)
      .then(({ data }) => this.setState({
        todos: this.state.todos.concat(data),
        currentTodo: ''
      }))
      .catch(() => this.setState({ error: true }));
  }

  componentDidMount() {
    loadTodos()
      .then(({ data }) => {
        this.setState({ todos: data });
      })
      .catch(() => this.setState({ error: true }));
  }

  render() {
    const { todos, currentTodo, error } = this.state;
    const remaining = todos.filter(t => !t.isComplete).length;

    return (
      <Router>
        <div>
          <header className="header">
            <h1>todos</h1>
            {
              error
                ? <span className="error">Oh no!</span>
                : null
            }
            <TodoForm
              currentTodo={currentTodo}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
            />
          </header>
          <section className="main">
            <Route path='/:filter?' render={({ match }) =>
              <TodoList
                todos={filterTodos(match.params.filter, todos)}
                handleToggle={this.handleToggle}
                handleDelete={this.handleDelete}
              />
            } />
          </section>
          <Footer remaining={remaining} />
        </div>
      </Router>
    );
  }
}
