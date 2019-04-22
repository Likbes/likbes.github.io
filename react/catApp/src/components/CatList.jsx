/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import CatItem from './CatItem';

class CatList extends Component {
  render() {
    const { cats } = this.props;
    return (
      <ul className="cat-list">
        {cats.map((cat, index) => {
          return (
            <CatItem key={`${index}`} src={cat.url} className="cat-item" />
          );
        })}
      </ul>
    );
  }
}

export default CatList;
