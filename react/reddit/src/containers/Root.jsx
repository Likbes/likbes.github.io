import React from 'react';
import { Provider } from 'react-redux';
import store from '../store';
import AsyncApp from './AsyncApp';

export default function Root() {
  return (
    <Provider store={store}>
      <AsyncApp />
    </Provider>
  );
}
