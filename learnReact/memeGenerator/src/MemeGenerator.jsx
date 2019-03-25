/* eslint-disable react/button-has-type */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable no-param-reassign */
/* eslint-disable class-methods-use-this */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { hot } from 'react-hot-loader';
import style from './app.scss';

class MemeGenerator extends React.Component {
  constructor() {
    super();
    this.state = {
      topText: '',
      bottomText: '',
      src: '',
      allMemeImgs: [],
      randomImg: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    fetch('https://api.imgflip.com/get_memes')
      .then(response => response.json())
      .then(response => {
        const { memes } = response.data;
        this.setState({
          allMemeImgs: memes,
        });
      })
      .then(() => this.handleClick());
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  randomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  handleClick(e) {
    if (e) e.preventDefault();
    const randomNum = this.randomNumber(0, 100);
    this.setState({
      randomImg: this.state.allMemeImgs[randomNum].url,
    });
  }

  render() {
    return (
      <div>
        <form className={style.memeForm}>
          <input
            type="text"
            placeholder="Top text"
            name="topText"
            value={this.state.topText}
            onChange={this.handleChange}
          />
          <input
            type="text"
            placeholder="Bottom text"
            name="bottomText"
            value={this.state.bottomText}
            onChange={this.handleChange}
          />
          <button onClick={this.handleClick}>Generate</button>
        </form>
        <div className={style.meme}>
          <img src={this.state.randomImg} alt="random meme" />
          <h2 className={style.top}>{this.state.topText}</h2>
          <h2 className={style.bottom}>{this.state.bottomText}</h2>
        </div>
      </div>
    );
  }
}

export default hot(module)(MemeGenerator);
