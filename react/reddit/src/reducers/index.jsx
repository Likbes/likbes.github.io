/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
import { combineReducers } from 'redux';
import { hot } from 'react-hot-loader';
import postsBySubreddit from './postsBySubreddit';
import selectedSubreddit from './selectedSubreddit';

const rootReducer = combineReducers({ postsBySubreddit, selectedSubreddit });

export default hot(module)(rootReducer);
