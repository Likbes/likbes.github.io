import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
  const { text } = props;
  return (
    <button type="button" {...props}>
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
