import React from 'react';
import { Link } from 'react-router-dom';

export const Tag = props => {
  const { link, linkTo, bck, size, color, add, children } = props;
  const temp = (
    <div
      style={{
        background: bck,
        fontSize: size,
        color,
        padding: '5px',
        display: 'inline-block',
        fontFamily: 'Righteous',
        ...add,
      }}
    >
      {children}
    </div>
  );

  if (link) {
    return (
      <Link to={linkTo}>
        {temp}
      </Link>
    );
  }
  return temp;
};
