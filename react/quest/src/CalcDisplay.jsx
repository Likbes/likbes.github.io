/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { hot } from 'react-hot-loader';
import PropTypes from 'prop-types';
import style from './app.scss';

const CalcDisplay = ({ input, del, clear, enter }) => {
  return <div></div>;
};

CalcDisplay.propTypes = {
  input: PropTypes.func.isRequired,
  enter: PropTypes.func.isRequired,
  del: PropTypes.func.isRequired,
  clear: PropTypes.func.isRequired
};

export default hot(module)(CalcDisplay);
