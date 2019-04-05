/* eslint-disable class-methods-use-this */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { hot } from 'react-hot-loader';
import style from './app.scss';

class Channel extends React.Component {
  handleClick(url) {
    window.open(url);
  }

  render() {
    const { name, bio, isStreaming, game, viewers, logo } = this.props;
    let isStreamingText;
    let styles;
    const url = `https://www.twitch.tv/${name}`;
    if (isStreaming) {
      // eslint-disable-next-line max-len
      isStreamingText = `User is currently streaming ${game} with ${viewers} viewers`;
      styles = { background: '#67D5B5', color: '#232323' };
    } else {
      isStreamingText = `User is not currently streaming`;
      styles = { background: '#FFC857', color: '#232323' };
    }
    return (
      <div
        className={style.resultsWrapper}
        onClick={this.handleClick.bind(null, url)}
        style={styles}
      >
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div className={style.channel}>
          <h1 className={style.username}>{name}</h1>
          <h2 className={style.streaming}>{isStreamingText}</h2>
          <p className={style.bio}>{bio}</p>
        </div>
      </div>
    );
  }
}

export default hot(module)(Channel);
