/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { hot } from 'react-hot-loader';

class InputSearch extends React.Component {
  render() {
    return (
      <input
        type="text"
        placeholder="Search the list"
        onChange={e => this.props.handleChange(e)}
        value={this.props.value}
      />
    );
  }
}

export default hot(module)(InputSearch);
