/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { hot } from 'react-hot-loader';
import cx from 'classnames';
import style from './app.scss';
import Result from './Result';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      birthday: '',
      origin: '',
      formOneDisplay: '',
      formTwoDisplay: 'none',
      titleDisplay: '',
      finalDisplay: 'none',
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitFirstForm = this.submitFirstForm.bind(this);
    this.submitSecondForm = this.submitSecondForm.bind(this);
    this.reset = this.reset.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  submitFirstForm(e) {
    e.preventDefault();
    this.setState({
      formOneDisplay: 'none',
      formTwoDisplay: '',
    });
  }

  submitSecondForm(e) {
    e.preventDefault();
    this.setState({
      formTwoDisplay: 'none',
      titleDisplay: 'none',
      finalDisplay: '',
    });
  }

  reset(e) {
    e.preventDefault();
    this.setState({
      firstName: '',
      lastName: '',
      birthday: '',
      origin: '',
      formOneDisplay: '',
      formTwoDisplay: 'none',
      titleDisplay: '',
      finalDisplay: 'none',
    });
    document.querySelectorAll('input').forEach(input => {
      input.value = '';
    });
  }

  render() {
    const {
      firstName,
      lastName,
      birthday,
      origin,
      formOneDisplay,
      formTwoDisplay,
      titleDisplay,
      finalDisplay,
    } = this.state;
    return (
      <div id="main" className={style.main}>
        <h1 style={{ display: titleDisplay }}>
          This is a simple form service built with React
        </h1>
        <form
          onSubmit={this.submitFirstForm}
          style={{ display: formOneDisplay }}
        >
          <label htmlFor="firstName">
            Type your first name:
            <input
              type="text"
              name="firstName"
              id="firstName"
              onChange={this.handleChange}
            />
          </label>
          <br />
          <br />
          <label htmlFor="lastName">
            Type your last name:
            <input
              type="text"
              name="lastName"
              id="lastName"
              onChange={this.handleChange}
            />
          </label>
          <br />
          <br />
          <button
            type="submit"
            className={cx(style.button, style.buttonSuccess)}
          >
            Proceed
          </button>
        </form>
        <form
          onSubmit={this.submitSecondForm}
          style={{ display: formTwoDisplay }}
        >
          <label htmlFor="birthday">
            Type the year of your birthday:
            <input
              type="text"
              name="birthday"
              id="birthday"
              onChange={this.handleChange}
            />
          </label>
          <br />
          <br />
          <label htmlFor="origin">
            Type where you are from:
            <input
              type="text"
              name="origin"
              id="origin"
              onChange={this.handleChange}
            />
          </label>
          <br />
          <br />
          <button
            type="submit"
            className={cx(style.button, style.buttonSuccess)}
            onSubmit={this.submitSecondForm}
          >
            Proceed
          </button>
        </form>
        <div style={{ display: finalDisplay }}>
          <Result
            firstName={firstName}
            lastName={lastName}
            birthday={birthday}
            origin={origin}
            reset={this.reset}
          />
        </div>
      </div>
    );
  }
}

export default hot(module)(Form);
