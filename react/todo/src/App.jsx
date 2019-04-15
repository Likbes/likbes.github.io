/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { hot } from 'react-hot-loader';

import ToDo from './containers/todo/ToDo';
import Title from './components/title/Title';

class App extends React.Component {
  render() {
    return (
      <>
        <Title title="Todo App" />
        <ToDo />
      </>
    );
  }
}

export default hot(module)(App);
