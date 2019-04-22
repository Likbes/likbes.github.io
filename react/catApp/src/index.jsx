import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import watchFetchMoreCatsSaga from './saga/fetchMoreCats';
import rootReducer from './reducers/index';
import App from './App.jsx';
import './scss/index.scss';

const loggerMiddleware = createLogger();
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware, sagaMiddleware, loggerMiddleware),
);

sagaMiddleware.run(watchFetchMoreCatsSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  // eslint-disable-next-line prettier/prettier
  document.getElementById('app')
);
