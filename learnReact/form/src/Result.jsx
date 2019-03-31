/* eslint-disable no-restricted-globals */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import React from 'react';
import { hot } from 'react-hot-loader';
import cx from 'classnames';
import style from './app.scss';

function Result(props) {
  const { firstName, lastName, birthday: birth, reset } = props;
  let { origin } = props;
  let age;
  if (origin.length === 0) {
    origin = (
      <h2 className={cx(style.h2, style.title)}>
        We don't know where you are from...
      </h2>
    );
  } else if (origin.length !== 0) {
    origin = (
      <h2 className={cx(style.h2, style.title)}>You are from {origin}</h2>
    );
  }
  if (isNaN(birth) || birth === '') {
    age = (
      <h2 className={cx(style.h2, style.title)}>
        We couldn't understand your birthday..
      </h2>
    );
  } else {
    const yearsOld = parseInt(new Date().toString().substr(10, 5), 10) - birth;
    age = <h2 className={cx(style.h2, style.title)}>You are {yearsOld}</h2>;
  }
  return (
    <>
      <h1>
        Hello {firstName} {lastName}!
      </h1>
      {origin}
      {age}
      <button
        type="button"
        onClick={reset}
        className={cx(style.button, style.buttonReset)}
      >
        Reset Form
      </button>
    </>
  );
}

export default hot(module)(Result);
