import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UserLayout from '../../../hoc/user';
import ProductBlock from '../../utils/User/productBlock';

import { connect } from 'react-redux';
import { getCartItems } from '../../../store/actions/user';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import faFrown from '@fortawesome/fontawesome-free-solid/faFrown';
import faSmile from '@fortawesome/fontawesome-free-solid/faSmile';

library.add(faFrown, faSmile);

class Cart extends Component {

  state = {
    isLoading: true,
    total: 0,
    showTotal: false,
    showSuccess: false,
  }

  static propTypes = {
    user: PropTypes.shape({
      userData: PropTypes.shape({
        cart: PropTypes.array,
      }),
      cartDetail: PropTypes.object,
    }),
    dispatch: PropTypes.func,
  }

  componentDidMount() {
    const { dispatch, user } = this.props;
    const { cart } = user.userData;
    let cartItems = [];

    if (cart) {
      if (cart.length > 0) {
        cart.forEach(item => {
          cartItems.push(item.id);
        });

        dispatch(getCartItems(cartItems, cart))
          .then(() => {
            const { cartDetail } = this.props.user;
            if (cartDetail.length > 0) {
              this.calculateTotal(cartDetail);
            } else {
              //
            }
          });
      } else {
        //
      }
    }
  }

  // add a clear state req

  calculateTotal = cartDetail => {
    let total = 0;

    cartDetail.forEach(item => {
      total += parseInt(item.price, 10) * item.quantity;
    });

    this.setState({ total, showTotal: true });
  }

  showNoItems = showSuccess => {
    return (
      showSuccess ?
        <div className="cart_success">
          <FontAwesomeIcon icon="smile" />
          <p>Thank you!</p>
          <p>Your order is complete</p>
        </div> :
        <div className="cart_no_items">
          <FontAwesomeIcon icon="frown" />
          <p>You have no items</p>
        </div>
    );
  }

  removeItem = id => {

  }

  render() {
    const { user } = this.props;
    const { showTotal, showSuccess, total } = this.state;

    return (
      <UserLayout>
        <>
          <h1> My cart </h1>
          <div className="user_cart">
            <ProductBlock
              products={user}
              type="cart"
              removeItem={id => this.removeItem(id)}
            />
            {
              showTotal ?
                <div className="user_cart_sum">
                  Total amount ${total}
                </div> : this.showNoItems(showSuccess)
            }
            {
              showTotal ?
                <div className="paypal_button_container">

                </div> : ''
            }
          </div>
        </>
      </UserLayout>
    );
  }
}

export default connect(state => {
  return {
    user: state.user
  };
})(Cart);
