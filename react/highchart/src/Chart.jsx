/* eslint-disable react/prop-types */
import React from 'react';
import { hot } from 'react-hot-loader';
import Highcharts from 'highcharts';

class Chart extends React.Component {
  componentDidMount() {
    this.updateChart();
  }

  componentDidUpdate() {
    this.updateChart();
  }

  updateChart() {
    const { data, occupation } = this.props;
    Highcharts.chart('container', {
      chart: {
        type: 'bar',
        backgroundColor: '#FCFFC5',
      },
      title: {
        text: 'StackOverflow 2016 Developer Survey Results for Occupation',
      },
      plotOptions: {
        series: {
          dataLabels: {
            enabled: true,
            formatter: function formatter() {
              return `${Highcharts.numberFormat(this.y)}%`;
            },
          },
        },
      },
      xAxis: {
        categories: occupation,
      },
      yAxis: {
        title: {
          text: 'Percentage of Respondants',
        },
      },
      series: [
        {
          name: 'Developer Occupations',
          data,
        },
      ],
    });
  }

  render() {
    return (
      <div style={{ marginTop: '25px', marginBottom: '0px' }} id="container" />
    );
  }
}

export default hot(module)(Chart);
