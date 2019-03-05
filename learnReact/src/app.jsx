import React from 'react';
import { hot } from 'react-hot-loader';

import Joke from './Joke';
import jokes from './jokes';

const App = () =>
  jokes.map(joke => (
    <Joke question={joke.question} punchLine={joke.punchLine} />
  ));

export default hot(module)(App);
