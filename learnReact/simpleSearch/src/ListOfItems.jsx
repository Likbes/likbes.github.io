/* eslint-disable react/prop-types */
/* eslint-disable max-len */
/* eslint-disable class-methods-use-this */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { hot } from 'react-hot-loader';
import Item from './Item';

class ListOfItems extends React.Component {
  showItems() {
    if (this.props.data) {
      return this.props.data.map(item => {
        return <Item value={item} key={item} />;
      });
    }
    return <li>Loading...</li>;
  }

  render() {
    return <ul>{this.showItems()}</ul>;
  }
}

export default hot(module)(ListOfItems);
