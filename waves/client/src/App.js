import React, { Component } from 'react';
import axios from 'axios';

export default class App extends Component {

  componentDidMount() {
    axios.get('/api/product/woods')
      .then(res => console.log(res))
  }

  render() {
    return (
      <div>
        my app
      </div>
    )
  }
};
