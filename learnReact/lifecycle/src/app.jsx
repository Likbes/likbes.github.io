/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { hot } from 'react-hot-loader';

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  static getDerivedStateFromProps(props, state) {
    // return new, updated state upon the props
  }

  componentWillMount() {
    // remove event listener
    // teardown or cleanup code before your component disapper
  }

  componentDidMount() {
    // GET the data I need to correctly display
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.whatever !== this.props.whatever) {
      // do something important
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    // return true if want to update
    // return false if not
  }

  componentWillUpdate() {
    // smth important
  }

  componentWillUnmount() {
    // remove event listener
    // teardown or cleanup code before your component disapper
  }

  getSnapshotBeforeUpdate() {
    // create a backup of the current things are
  }

  render() {
    return (
      <div>
        <h1>Hellow World</h1>
      </div>
    );
  }
}

export default hot(module)(App);
