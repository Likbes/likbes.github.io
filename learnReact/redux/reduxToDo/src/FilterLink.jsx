/* eslint-disable react/forbid-prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { hot } from 'react-hot-loader';
import PropTypes from 'prop-types';
import Link from './Link';

const visibilityFilterAction = filter => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter,
  };
};

class FilterLink extends React.Component {
  componentDidMount() {
    const { store } = this.context;
    this.unsubscribe = store.subscribe(() => this.forceUpdate());
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const { filter, children } = this.props;
    const { store } = this.context;
    const state = store.getState();
    return (
      <Link
        active={filter === state.visibilityFilter}
        onClick={() => store.dispatch(visibilityFilterAction(filter))}
      >
        {children}
      </Link>
    );
  }
}

FilterLink.propTypes = {
  filter: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

FilterLink.contextTypes = {
  store: PropTypes.object,
};

export default hot(module)(FilterLink);
