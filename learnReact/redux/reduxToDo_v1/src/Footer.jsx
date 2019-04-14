/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable react/prop-types */
import React from 'react';
import { hot } from 'react-hot-loader';
import FilterLink from './FilterLink';

const Footer = () => {
  return (
    <p>
      Show:
      {'  '}
      <FilterLink filter="SHOW_ALL">All</FilterLink>
      {',  '}
      <FilterLink filter="SHOW_ACTIVE">Active</FilterLink>
      {',  '}
      <FilterLink filter="SHOW_COMPLETED">Completed</FilterLink>
    </p>
  );
};

export default hot(module)(Footer);
