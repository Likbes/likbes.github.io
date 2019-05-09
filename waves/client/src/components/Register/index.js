import React, { Component } from 'react';
import FormField from '../utils/Form/formField';

import { update, generateData, isFormValid } from '../utils/Form/formActions';
import { connect } from 'react-redux';

import { loginUser } from '../../store/actions/userActions';

class Register extends Component {

  state = {
    formError: false,
    formSuccess: '',
    formdata: {
      name: {
        element: 'input',
        value: '',
        config: {
          name: 'name_input',
          type: 'text',
          placeholder: 'Enter your name',
        },
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
        validationMessage: '',
      },
      lastname: {
        element: 'input',
        value: '',
        config: {
          name: 'lastname_input',
          type: 'text',
          placeholder: 'Enter your lastname',
        },
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
        validationMessage: '',
      },
      email: {
        element: 'input',
        value: '',
        config: {
          name: 'email_input',
          type: 'email',
          placeholder: 'Enter your email',
        },
        validation: {
          required: true,
          email: true,
        },
        valid: false,
        touched: false,
        validationMessage: '',
      },
      phone: {
        element: 'input',
        value: '',
        config: {
          name: 'phone_input',
          type: 'tel',
          placeholder: 'Enter your phone',
        },
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
        validationMessage: '',
      },
      password: {
        element: 'input',
        value: '',
        config: {
          name: 'password_input',
          type: 'password',
          placeholder: 'Enter your password',
        },
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
        validationMessage: '',
      },
      confirmPassword: {
        element: 'input',
        value: '',
        config: {
          name: 'confirm_password_input',
          type: 'password',
          placeholder: 'Confirm your password',
        },
        validation: {
          required: true,
          confirm: 'password',
        },
        valid: false,
        touched: false,
        validationMessage: '',
      },
    },
  }

  updateForm = e => {
    const { formdata } = this.state;
    const newFormdata = update(e, formdata, 'register');

    this.setState({
      formError: false,
      formdata: newFormdata,
    });
  }

  submitForm = e => {
    e.preventDefault();

    const { formdata } = this.state;
    const { dispatch, history } = this.props;
    let dataToSubmit = generateData(formdata, 'register');
    let formIsValid = isFormValid(formdata, 'register');

    if (formIsValid) {
      console.log(dataToSubmit);
    } else {
      this.setState({
        formError: true,
      });
    }
  }

  render() {

    const { formError, formdata } = this.state;

    return (
      <div className="page_wrapper">
        <div className="container">
          <div className="register_login_container">
            <div className="left">
              <form onSubmit={e => this.submitForm(e)}>
                <h2>Personal infomation</h2>

                <div className="form_block_two">
                  <div className="block">
                    <FormField
                      id="name"
                      formdata={formdata.name}
                      change={e => this.updateForm(e)}
                    />
                  </div>

                  <div className="block">
                    <FormField
                      id="lastname"
                      formdata={formdata.lastname}
                      change={e => this.updateForm(e)}
                    />
                  </div>
                </div>

                <div className="form_block_two">
                  <div className="block">
                    <FormField
                      id="email"
                      formdata={formdata.email}
                      change={e => this.updateForm(e)}
                    />
                  </div>

                  <div className="block">
                    <FormField
                      id="phone"
                      formdata={formdata.phone}
                      change={e => this.updateForm(e)}
                    />
                  </div>
                </div>

                <h2>Verify password</h2>

                <div className="form_block_two">
                  <div className="block">
                    <FormField
                      id="password"
                      formdata={formdata.password}
                      change={e => this.updateForm(e)}
                    />
                  </div>

                  <div className="block">
                    <FormField
                      id="confirmPassword"
                      formdata={formdata.confirmPassword}
                      change={e => this.updateForm(e)}
                    />
                  </div>
                </div>
                {
                  formError ?
                    <div className="error_label">
                      Please check your data
                    </div> :
                    ''
                }
                <button onClick={e => this.submitForm(e)}>
                  Create an account
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(Register);
