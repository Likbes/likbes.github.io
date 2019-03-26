/* eslint-disable no-plusplus */
/* eslint-disable react/prop-types */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable class-methods-use-this */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { hot } from 'react-hot-loader';

class Create extends React.Component {
  render() {
    const array = Array(this.props.counter);
    for (let i = 0; i < array.length; i++) {
      array[i] = i;
    }
    function getRand() {
      return Math.floor(Math.random() * 255);
    }

    function randColor() {
      return {
        background: `rgb(${getRand()}, ${getRand()}, ${getRand()})`,
      };
    }

    const divs = array.map(val => {
      return <div style={randColor()} className="box" key={val} />;
    });

    return <div className="container">{divs}</div>;
  }
}

export default hot(module)(Create);
