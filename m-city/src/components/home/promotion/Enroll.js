import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import FormField from '../../ui/formFields';

export default class Enroll extends Component {

  state = {
    formError: false,
    formSuccess: '',
    formData: {
      email: {
        element: 'input',
        value: '',
        config: {
          name: 'email_input',
          type: 'email',
          placeholder: 'Enter your email'
        },
        validation: {
          required: true,
          email: true,
        },
        valid: false,
        validationMessage: '',
      },
    },
  }

  submitForm(e) {

  }

  render() {

    const { email } = this.state.formData;

    return (
      <Fade>
        <div className="enroll_wrapper">
          <form onSubmit={e => this.submitForm(e)}>
            <h3 className="enroll_title">Enter your email</h3>
            <div className="enroll_input">
              <FormField
                id={'email'}
                formData={email}
              />
            </div>
          </form>
        </div>
      </Fade>
    );
  }
}
