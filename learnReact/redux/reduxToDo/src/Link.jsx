/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { hot } from 'react-hot-loader';
import PropTypes from 'prop-types';

const Link = ({ active, children, onClick }) => {
  if (active) return <span>{children}</span>;
  return (
    <a
      href="#"
      onClick={e => {
        e.preventDefault();
        onClick();
      }}
    >
      {children}
    </a>
  );
};

Link.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired,
};

export default hot(module)(Link);
