/* eslint-disable react/no-array-index-key */
/* eslint-disable max-len */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { hot } from 'react-hot-loader';
import SliderControl from './SliderControl';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      array: [],
      slider: 10,
    };
    this.handleRange = this.handleRange.bind(this);
  }

  componentDidMount() {
    // eslint-disable-next-line prettier/prettier
    fetch('https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json')
      .then(data => data.json())
      .then(res => {
        const array = res.data;
        this.setState({
          data: array,
          array,
        });
      });
  }

  handleRange(e) {
    const num = parseInt(e.target.value, 10);
    const curData = this.state.data.slice(0);
    const scaledData = curData.splice(num, curData.length - 1);
    this.setState({
      array: scaledData,
      slider: num,
    });
  }

  render() {
    const data = this.state.array;
    const dates = [];
    if (!data) return '';
    const renderData = data.map((item, index) => {
      if (index % 25 === 0) {
        dates[index] = item[0].substr(0, 4);
      }
      return (
        <div key={index}>
          <div
            className="bar"
            style={{
              height: Math.round(parseFloat(item[1])) / 30,
              width: 1000 / data.length,
            }}
          >
            <span className="barValue">
              Data: {item[0]}
              <br />
              GDP: ${item[1]} (billions)
            </span>
          </div>
          <div>
            <span className="dates">{dates[index]}</span>
          </div>
        </div>
      );
    });
    return (
      <div className="outerwrapper">
        <h1>Modeling US GDP Economic Data with React</h1>
        <p>
          — A remix of the
          <a href="https://www.freecodecamp.com/challenges/visualize-data-with-a-bar-chart">
            Free Code Camp D3.js Bar Chart Zipline —
          </a>
        </p>
        <div className="chart">{renderData}</div>
        <SliderControl
          handleRange={this.handleRange}
          slider={this.state.slider}
        />
      </div>
    );
  }
}

export default hot(module)(App);
