/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { hot } from 'react-hot-loader';
import Field from './Feild';
import style from './app.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      left: 50,
      top: 50,
      speed: 5,
    };
    this.handleChange = this.handleChange.bind(this);
    this.keyPress = this.keyPress.bind(this);
  }

  componentWillMount() {
    document.addEventListener('keydown', this.keyPress);
  }

  keyPress(e) {
    let { speed, left, top } = this.state;
    speed = +speed;
    // Left Arrow
    if (e.keyCode === 37) {
      left -= speed;
      if (left <= speed) {
        this.setState({ left: 5 });
      } else if (left > 5) {
        this.setState({ left });
      }
    }
    // Top Arrow
    if (e.keyCode === 38) {
      top -= speed;
      if (top <= speed) {
        this.setState({ top: 5 });
      } else if (top > 5) {
        this.setState({ top });
      }
    }
    // Right Arrow
    if (e.keyCode === 39) {
      left += speed;
      const distanceRight = 450 - left;
      if (speed >= distanceRight) {
        this.setState({ left: 445 });
      } else if (left < 450) {
        this.setState({ left });
      }
    }
    // Down Arrow
    if (e.keyCode === 40) {
      top += speed;
      const distanceDown = 450 - top;
      if (distanceDown <= speed) {
        this.setState({ top: 445 });
      } else if (top < 445) {
        this.setState({ top });
      }
    }
  }

  handleChange(e) {
    this.setState({
      speed: e.target.value,
    });
  }

  render() {
    const { speed, left, top } = this.state;
    return (
      <>
        <h1 className={style.title}>Move React with the Arrow Keys</h1>
        <Field left={left} top={top} speed={speed} />
        <h2 style={{ color: '#f26d5b' }}>Control Movement Speed</h2>
        <input
          className={style.range}
          value={speed}
          onChange={this.handleChange}
          type="range"
          min="1"
          max="50"
        />
      </>
    );
  }
}

export default hot(module)(App);
