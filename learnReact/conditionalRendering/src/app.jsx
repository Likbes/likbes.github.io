/* eslint-disable prettier/prettier */
/* eslint-disable react/button-has-type */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { hot } from 'react-hot-loader';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isLogIn: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => {
      return {
        isLogIn: !prevState.isLogIn,
      };
    });
  }

  render() {
    const buttonText = this.state.isLogIn ? 'Log out' : 'Log in';
    const paragText = this.state.isLogIn ?
      'You are already logged in' :
      'You are logged out. Please log in';
    return (
      <div>
        <button onClick={this.handleClick}>{buttonText}</button>
        <h1>{paragText}</h1>
      </div>
    );
  }
}

export default hot(module)(App);
