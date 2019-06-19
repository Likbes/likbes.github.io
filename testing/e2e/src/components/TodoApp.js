import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import Footer from './Footer'

import {
  saveTodo,
  loadTodos,
  destroyTodo
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
            <TodoList todos={todos} handleDelete={this.handleDelete} />
          </section>
          <Footer remaining={remaining} />
        </div>
      </Router>
    );
  }
}
