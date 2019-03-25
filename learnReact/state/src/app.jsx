/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { hot } from 'react-hot-loader';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isLogged: false,
    };
  }

  render() {
    return (
      <div>
        <h1>
          You are currently logged (
          <span style={{ color: !!this.state.isLogged && 'red' }}>in</span>/
          <span style={{ color: !this.state.isLogged && 'red' }}>out</span>)
        </h1>
      </div>
    );
  }
}

export default hot(module)(App);
