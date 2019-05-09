import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const MyButton = (props) => {

  const { type, linkTo, title, addStyles } = props;

  const buttons = () => {
    let temp = '';

    switch (type) {

      case 'default':
        temp = (
          <Link
            className="link_default"
            to={linkTo}
            {...addStyles}
          >
            {title}
          </Link>
        );
        break;
      default:
        temp = '';
    }

    return temp;
  };

  return (
    <div className="my_link">
      {buttons()}
    </div>
  );
};

MyButton.propTypes = {
  type: PropTypes.string,
  linkTo: PropTypes.string,
  title: PropTypes.string,
  addStyles: PropTypes.object,
};

export default MyButton;
