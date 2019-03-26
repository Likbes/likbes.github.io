/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unused-vars */
import React from 'react';
import { hot } from 'react-hot-loader';
import Create from './Create';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 5,
      substract: false,
    };
  }

  componentDidMount() {
    this.autoPlay();
  }

  autoPlay() {
    const play = setInterval(() => {
      const { counter, substract } = this.state;
      if (counter === 74) {
        this.setState({ substract: true });
      } else if (counter === 1) {
        this.setState({ substract: false });
      }

      if (substract) {
        this.setState({ counter: counter - 1 });
      } else {
        this.setState({ counter: counter + 1 });
      }
      console.log(counter);
    }, 40);
  }

  render() {
    return (
      <div className="mainContainer">
        <Create counter={this.state.counter} />
      </div>
    );
  }
}

export default hot(module)(Main);
