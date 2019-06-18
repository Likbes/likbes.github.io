import React from 'react'

const TodoItem = ({ name }) =>
  <li>
    <div className="view">
      <input className="toggle" type="checkbox" />
      <label>
        {name}
      </label>
      <button className="destroy" />
    </div>
  </li>

export default props =>
  <ul className="todo-list">
    {props.todos.map(({ name, id }) => <TodoItem key={id} name={name} />)}
  </ul>
