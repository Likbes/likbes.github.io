/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
import { combineReducers } from 'redux';
import { hot } from 'react-hot-loader';
import tasks from './tasks';
import filters from './filters';

const rootReducer = combineReducers({ tasks, filters });

export default hot(module)(rootReducer);
