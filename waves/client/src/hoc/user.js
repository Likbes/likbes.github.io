import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const links = [
  { name: 'My account', linkTo: '/user/dashboard' },
  { name: 'User information', linkTo: '/user/profile' },
  { name: 'My cart', linkTo: '/user/cart' },
];

const UserLayout = ({ children }) => {

  const generateLinks = (links) => {
    return links.map(link => (
      <Link to={link.linkTo} key={link.name}>
        {link.name}
      </Link>
    ));
  };

  return (
    <div className="container">
      <div className="user_container">
        <div className="user_left_nav">
          <h2>My account</h2>
          <div className="links">
            {generateLinks(links)}
          </div>
        </div>
        <div className="user_right">
          {children}
        </div>
      </div>
    </div>
  );
};

UserLayout.propTypes = {
  children: PropTypes.element,
};

export default UserLayout;
