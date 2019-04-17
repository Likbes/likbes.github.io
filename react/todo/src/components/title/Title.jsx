import React from 'react';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';

import style from './Title.scss';

const Title = ({ title }) => <h1 className={style.title}>{title}</h1>;

Title.propTypes = {
  title: PropTypes.string,
};

Title.defaultProps = {
  title: 'Simple title',
};

export default hot(module)(Title);
