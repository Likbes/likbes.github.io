import React from 'react'

const TodoItem = ({ name, id, isComplete, handleDelete }) =>
  <li className={isComplete ? 'completed' : ''}>
    <div className="view">
      <input
        className="toggle"
        type="checkbox"
        checked={isComplete}
      />
      <label>
        {name}
      </label>
      <button
        className="destroy"
        type="button"
        onClick={() => handleDelete(id)}
      />
    </div>
  </li>

export default ({ todos, handleDelete }) =>
  <ul className="todo-list">
    {
      todos.map(({ name, isComplete, id }) => (
        <TodoItem
          key={id}
          id={id}
          name={name}
          isComplete={isComplete}
          handleDelete={handleDelete}
        />
      ))
    }
  </ul>
