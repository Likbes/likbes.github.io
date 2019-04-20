import { hot } from 'react-hot-loader';
import { SELECT_SUBREDDIT } from '../constants';

function selectedSubreddit(state = 'reactjs', action) {
  switch (action.type) {
    case SELECT_SUBREDDIT:
      return action.subreddit;
    default:
      return state;
  }
}

export default hot(module)(selectedSubreddit);
