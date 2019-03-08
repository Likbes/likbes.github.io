/* eslint-disable no-unused-expressions */
/* eslint-disable prettier/prettier */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { hot } from 'react-hot-loader';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      gender: '',
      favColor: 'red',
      isFriendly: true,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    // GET the data I need to correctly display
  }

  handleChange(e) {
    const { name, value, type, checked } = e.target;
    type === 'checkbox' ?
      this.setState({ [name]: checked }) :
      this.setState({ [name]: value });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="firstName"
          value={this.state.firstName}
          placeholder="First name"
          onChange={this.handleChange}
        />
        <br />
        <br />
        <input
          type="text"
          name="lastName"
          value={this.state.lastName}
          placeholder="Last name"
          onChange={this.handleChange}
        />
        <br />
        <br />
        <textarea
          value={
            `some default text with fN: ${this.state.firstName}`
          }
        />
        <br />
        <br />
        <label htmlFor="check">
          <input
            type="checkbox"
            id="check"
            checked={this.state.isFriendly}
            onChange={this.handleChange}
            name="isFriendly"
          /> Is Friendly?
        </label>
        <br />
        <br />
        <label htmlFor="radioOne">
          <input
            type="radio"
            id="radioOne"
            name="gender"
            value="male"
            checked={this.state.gender === 'male'}
            onChange={this.handleChange}
          /> Male?
        </label>
        <br />
        <br />
        <label htmlFor="radioTwo">
          <input
            type="radio"
            id="radioTwo"
            name="gender"
            value="female"
            checked={this.state.gender === 'female'}
            onChange={this.handleChange}
          /> Female?
        </label>
        <br />
        <br />
        <select
          value={this.state.favColor}
          name="favColor"
          onChange={this.handleChange}
        >
          <option value="red">Red</option>
          <option value="white">White</option>
          <option value="black">Black</option>
          <option value="yellow">Yellow</option>
        </select>
        <br />
        <br />
        <h1>
          {this.state.firstName} {this.state.lastName}
        </h1>
        <h2>You are a {this.state.gender}</h2>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default hot(module)(App);
