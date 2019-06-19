import React from 'react'

export default ({
  currentTodo,
  handleChange,
  handleSubmit
}) =>
  <form onSubmit={handleSubmit}>
    <input
      autoFocus
      value={currentTodo}
      onChange={handleChange}
      type='text'
      className="new-todo"
      placeholder="What needs to be done?" />
  </form>
