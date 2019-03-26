/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { hot } from 'react-hot-loader';
import InputSearch from './InputSearch';
import ListOfItems from './ListOfItems';

class App extends React.Component {
  constructor(props) {
    super(props);
    const path =
      'https://gist.githubusercontent.com/Likbes/2cbe677dd6c0ea0028ecd9543de0eb51/raw/ddee9b59b3a5354070552ca0b784d12148a10a7a/gist.json';
    this.state = {
      data: this.getList(path),
      value: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  getList(path) {
    fetch(path)
      .then(data => data.json())
      .then(data => this.setState({ data: data.Reggae }));
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  render() {
    const { data = [], value } = this.state;

    const renderData = data.filter(item => {
      return item.toLowerCase().match(value.trim().toLowerCase());
    });

    return (
      <>
        <InputSearch
          data={data}
          value={value}
          handleChange={this.handleChange}
        />
        <ListOfItems data={renderData === '' ? data : renderData} />
      </>
    );
  }
}

export default hot(module)(App);
