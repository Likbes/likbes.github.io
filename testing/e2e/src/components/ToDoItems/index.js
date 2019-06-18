import React, { Component } from 'react';
import FlipMove from 'react-flip-move';

class TodoItems extends Component {

  delete = key => {
    this.props.delete(key);
  }

  createTasks = ({ key, text }) => {
    return (
      <li onClick={() => this.delete(key)} key={key}>{text}</li>
    );
  }

  render() {
    const todoEntries = this.props.entries;
    const listItems = todoEntries.map(this.createTasks);

    return (
      <ul className="theList">
        <FlipMove duration={250} easing="ease-in">
          {listItems}
        </FlipMove>
      </ul>
    );
  }
}

export default TodoItems;
