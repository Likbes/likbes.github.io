import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Root from './containers/Root';

import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <Root />
  </Provider>,
  // eslint-disable-next-line prettier/prettier
  document.getElementById('root')
);
