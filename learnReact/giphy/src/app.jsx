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
    };
    this.loadTrendingGIF = this.loadTrendingGIF.bind(this);
  }

  loadTrendingGIF() {
    // eslint-disable-next-line prettier/prettier
    fetch('http://api.giphy.com/v1/gifs/trending?api_key=yMcWHbNz3IByrlaS1RBcYNw1XmARTUWL')
      .then(data => data.json())
      .then(gifs => {
        const urls = gifs.data.reduce((arr, gifObj) => {
          return [...arr, gifObj.url];
        }, []);
        this.setState({ data: urls });
      });
  }

  render() {
    const { data } = this.state;
    return (
      <>
        <h1>
          Trending GIFs courtesy of the
          <a href="https://github.com/Giphy/GiphyAPI">Giphy API</a>
        </h1>
        <Button
          text="Load (or Reload) Trending GIFs"
          handleClick={this.loadTrendingGIF}
        />
        <Button
          text="Select One at Random"
          handleClick={this.loadTrendingGIF}
        />
        <Button text="Randomize Order" handleClick={this.loadTrendingGIF} />
        <Button text="Reverse Order" handleClick={this.loadTrendingGIF} />
        <Button text="Clear All" handleClick={this.loadTrendingGIF} />
        <div id="container">
          {data.map(url => (
            <img src={url} alt="gif" key={url} />
          ))}
        </div>
      </>
    );
  }
}

export default hot(module)(App);
