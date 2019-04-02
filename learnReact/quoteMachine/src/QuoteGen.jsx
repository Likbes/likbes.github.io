/* eslint-disable no-restricted-globals */
/* eslint-disable max-len */
/* eslint-disable class-methods-use-this */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { hot } from 'react-hot-loader';
import style from './app.scss';

class QuoteGen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: '',
      author: '',
    };
    this.getQuote = this.getQuote.bind(this);
    this.getTweet = this.getTweet.bind(this);
  }

  componentDidMount() {
    this.getQuote();
  }

  getRandom(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  getQuote() {
    // eslint-disable-next-line prettier/prettier
    fetch('https://gist.githubusercontent.com/nasrulhazim/54b659e43b1035215cd0ba1d4577ee80/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
      .then(data => data.json())
      .then(data => data.quotes)
      .then(quotes => {
        const item = quotes[this.getRandom(0, quotes.length)];
        this.setState({
          quote: item.quote,
          author: item.author,
        });
      });
  }

  getTweet() {
    let tweet = '';
    const { quote, author } = this.state;
    if (author.length === 0) {
      tweet = quote;
    } else {
      tweet = `${quote.substr(0, 100)} — ${author}`;
    }
    const left = (screen.width - 800) / 2;
    window.open(
      `http://twitter.com/home?status=${tweet} @freecodecamp`,
      '',
      `menubar = no, toolbar = no, resizable = yes, scrollbars = yes, height = 250, width = 800, left = ${left}, top = 150`
    );
  }

  render() {
    const { quote, author } = this.state;
    return (
      <>
        <h1 className={style.title}>
          <a
            className={style.link}
            href="http://freecodecamp.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Free Code Camp
          </a>
          Quote Machine
        </h1>
        <div className={style.buttons}>
          <button className={style.btn} onClick={this.getQuote} type="button">
            Show me a random quote
          </button>
          <button className={style.btn} onClick={this.getTweet} type="button">
            Tweet random quote
          </button>
        </div>
        <div className={style.quoteBlock}>
          <p className={style.quote}>{quote}</p>
          <p className={style.author}> — {author}</p>
        </div>
      </>
    );
  }
}

export default hot(module)(QuoteGen);
