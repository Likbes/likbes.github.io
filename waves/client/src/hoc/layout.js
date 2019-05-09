import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default class Layout extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="page_container">
          {this.props.children}
        </div>
        <Footer />
      </>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.element,
};
