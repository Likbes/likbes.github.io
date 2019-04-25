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

export const firebaseLooper = snapshot => {
  const data = [];
  snapshot.forEach(childSnapshot => {
    data.push({
      ...childSnapshot.val(),
      id: childSnapshot.key,
    });
  });
  return data;
};

export const reverseArray = array => {
  let reverseArray = [];

  for (let i = array.length - 1; i >= 0; i--) {
    reverseArray.push(array[i]);
  }

  return reverseArray;
};
