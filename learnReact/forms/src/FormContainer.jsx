/* eslint-disable react/no-unused-state */
/* eslint-disable no-unused-expressions */
/* eslint-disable prettier/prettier */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { hot } from 'react-hot-loader';
import FormComponent from './FormComponent';

class FormContainer extends React.Component {
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
      <FormComponent
        handleChange={this.handleChange}
        data={this.state}
      />
    );
  }
}

export default hot(module)(FormContainer);
