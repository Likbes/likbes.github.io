import React, { Component } from 'react'

interface ICountState {
  count: number,
}

class Counter extends Component<{}, ICountState> {

  public state = {
    count: 0,
  }

  private incHandler = (value: number) => {
    this.setState(prevState => ({
      count: prevState.count + value,
    }));
  }

  public render() {
    const { count } = this.state;

    return (
      <div>
        <p>{count}</p>

        <br />
        <button
          type="button"
          className="inc"
          onClick={() => this.incHandler(1)}
        >+1</button>

        <button
          type="button"
          className="dec"
          onClick={() => this.incHandler(-1)}
        >-1</button>

      </div>
    )
  }
}

export default Counter;
