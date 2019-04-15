import { combineReducers } from 'redux';
import { hot } from 'react-hot-loader';
import tasks from './tasks';

const rootReducer = combineReducers({ tasks });

export default hot(module)(rootReducer);
