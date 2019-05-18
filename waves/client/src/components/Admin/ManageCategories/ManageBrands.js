import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FormField from '../../utils/Form/formField';
import { update, generateData, isFormValid, reset } from '../../utils/Form/formActions';

import { connect } from 'react-redux';
import { getBrands, addBrand } from '../../../store/actions/products';

class ManageBrands extends Component {

  static propTypes = {
    dispatch: PropTypes.func,
    products: PropTypes.object,
  }

  state = {
    formError: false,
    formSuccess: false,
    formdata: {
      name: {
        element: 'input',
        value: '',
        config: {
          name: 'name_input',
          type: 'text',
          placeholder: 'Enter the brand'
        },
        validation: {
          required: true
        },
        valid: false,
        touched: false,
        validationMessage: ''
      },
    }
  }

  showCategoryItems = () => {
    const { products } = this.props;
    return products.brands ?
      products.brands.map(item => (
        <div className="category_item" key={item._id}>
          {item.name}
        </div>
      ))
      : '';
  }

  updateForm = (element) => {
    const { formdata } = this.state;
    const newFormdata = update(element, formdata, 'brands');
    this.setState({
      formError: false,
      formdata: newFormdata
    });
  }

  resetFieldsHandler = () => {
    const { formdata } = this.state;
    const newFormData = reset(formdata, 'brands');

    this.setState({
      formdata: newFormData,
      formSuccess: true
    });
  }


  submitForm = (event) => {
    event.preventDefault();

    const { dispatch, products } = this.props;
    let dataToSubmit = generateData(this.state.formdata, 'brands');
    let formIsValid = isFormValid(this.state.formdata, 'brands');
    let existingBrands = products.brands;

    if (formIsValid) {
      dispatch(addBrand(dataToSubmit, existingBrands)).then(response => {
        if (response.payload.success) {
          this.resetFieldsHandler();
        } else {
          this.setState({ formError: true });
        }
      });
    } else {
      this.setState({
        formError: true
      });
    }
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getBrands());
  }


  render() {
    return (
      <div className="admin_category_wrapper">
        <h1>Brands</h1>
        <div className="admin_two_column">
          <div className="left">
            <div className="brands_container">
              {this.showCategoryItems()}
            </div>
          </div>
          <div className="right">

            <form onSubmit={(event) => this.submitForm(event)}>

              <FormField
                id={'name'}
                formdata={this.state.formdata.name}
                change={(element) => this.updateForm(element)}
              />


              {this.state.formError ?
                <div className="error_label">
                  Please check your data
                </div>
                : null}
              <button
                type="button"
                className="button"
                onClick={(event) => this.submitForm(event)}
              >
                Add brand
              </button>

            </form>

          </div>

        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products
  };
};

export default connect(mapStateToProps)(ManageBrands);
