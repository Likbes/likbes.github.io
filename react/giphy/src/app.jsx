/* eslint-disable react/destructuring-assignment */
/* eslint-disable max-len */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { hot } from 'react-hot-loader';
import Button from './Button';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      copy: [],
    };
    this.loadTrendingGIF = this.loadTrendingGIF.bind(this);
    this.selectOneRandom = this.selectOneRandom.bind(this);
    this.randomizeOrder = this.randomizeOrder.bind(this);
    this.reverseOrder = this.reverseOrder.bind(this);
    this.clearAll = this.clearAll.bind(this);
  }

  loadTrendingGIF(e) {
    // eslint-disable-next-line prettier/prettier
    e.preventDefault();
    fetch('http://api.giphy.com/v1/gifs/trending?api_key=yMcWHbNz3IByrlaS1RBcYNw1XmARTUWL')
      .then(data => data.json())
      .then(gifs => {
        const urls = gifs.data.reduce((arr, gifObj) => {
          const url = gifObj.images.fixed_height.url;
          return [...arr, url];
        }, []);
        this.setState({ data: urls, copy: urls });
      });
  }

  selectOneRandom(e) {
    e.preventDefault();
    // implicit coercion array to string
    if (this.state.data != '') {
      this.setState({ copy: [this.state.data[this.randomMinMax(0, 24)]] });
    }
  }

  randomizeOrder(e) {
    e.preventDefault();
    if (this.state.data == '') return;
    this.setState(prev => {
      return { copy: prev.data.sort(() => Math.random() - .5) }
    })
  }

  reverseOrder(e) {
    e.preventDefault();
    if (this.state.data != '') {
      this.setState(prev => {
        return { copy: prev.copy.reverse() }
      });
    }
  }

  clearAll(e) {
    e.preventDefault();
    this.setState({
      data: [],
      copy: [],
    });
  }

  randomMinMax(min, max) {
    return Math.floor(Math.random() * (max - min)) + min
  }

  render() {
    const { copy } = this.state;
    return (
      <>
        <h1>
          Trending GIFs courtesy of the
          <a href="https://github.com/Giphy/GiphyAPI"> Giphy API</a>
        </h1>
        <Button
          text="Load (or Reload) Trending GIFs"
          handleClick={this.loadTrendingGIF}
        />
        <Button
          text="Select One at Random"
          handleClick={this.selectOneRandom}
        />
        <Button text="Randomize Order" handleClick={this.randomizeOrder} />
        <Button text="Reverse Order" handleClick={this.reverseOrder} />
        <Button text="Clear All" handleClick={this.clearAll} />
        <div id="container">
          {copy.map(url => (
            <img src={url} alt="gif" key={url} />
          ))}
        </div>
      </>
    );
  }
}

export default hot(module)(App);
