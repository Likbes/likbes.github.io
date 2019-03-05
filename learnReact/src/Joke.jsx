/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import { hot } from 'react-hot-loader';

const Joke = props => {
  return (
    <div className="contact-card">
      <h3 style={{ display: !props.question && 'none' }}>{props.question}</h3>
      <p style={{ color: !props.question && '#cecece' }}>{props.punchLine}</p>
    </div>
  );
};

export default hot(module)(Joke);
