import React, { Component } from 'react'

export default class Counter extends Component {

  state = {
    count: 0,
  }

  makeIncrement = amount => () => {
    this.setState((prevState) => {
      return { count: prevState.count + amount };
    });
  }

  render() {
    const { count } = this.state;
    return (
      <div>
        <p>Current count: {count}</p>
        <button
          type="button"
          onClick={this.makeIncrement(1)}
          className="increment"
        >Increment</button>
        <button
          type="button"
          onClick={this.makeIncrement(-1)}
          className="decrement"
        >Decrement</button>
      </div>
    )
  }
}
