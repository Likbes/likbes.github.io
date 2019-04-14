/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { hot } from 'react-hot-loader';
import ResultsContainer from './ResultsContainer';
import style from './app.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      range: 3,
      data: [],
    };
    this.searchWiki = this.searchWiki.bind(this);
    this.handleRange = this.handleRange.bind(this);
  }

  searchWiki(e) {
    e.preventDefault();
    const { text: search, range: limit } = this.state;
    // eslint-disable-next-line max-len
    const url = `https://en.wikipedia.org/w/api.php?action=opensearch&search=${search}&limit=${limit}&format=json&origin=*`;
    fetch(url)
      .then(data => data.json())
      .then(data => {
        const { range } = this.state;
        const finalData = [];

        for (let i = 0; i < range; i += 1) {
          const title = data[1][i];
          const info = data[2][i];
          const link = data[3][i];
          finalData.push({ title, info, link });
        }
        this.setState({ data: finalData });
      });
  }

  handleRange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    const { text, range, data } = this.state;
    return (
      <>
        <h1 className={style.title}>Wikipedia Viewer</h1>
        <h3 className={style.subtitle}>Search Wikipedia:</h3>
        <div className={style.search}>
          <input
            type="text"
            name="text"
            placeholder="Type here..."
            className={style.inputBox}
            onChange={this.handleRange}
            value={text}
          />
          <button
            type="button"
            className={style.submitBtn}
            onClick={this.searchWiki}
          >
            Submit Search
          </button>
        </div>
        <a
          className={style.randomBtn}
          href="https://en.wikipedia.org/wiki/Special:Random"
          rel="noopener noreferrer"
          target="_blank"
        >
          or generate a random article
        </a>
        <div>
          <input
            type="range"
            name="range"
            value={range}
            min="3"
            max="50"
            className={style.range}
            onChange={this.handleRange}
          />
          <span className={style.counter}>count: {range}</span>
        </div>
        <ResultsContainer data={data} />
      </>
    );
  }
}

export default hot(module)(App);
