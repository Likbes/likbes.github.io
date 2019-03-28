/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { hot } from 'react-hot-loader';
import Chart from './Chart';

class RootComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        28,
        12.2,
        11.4,
        8.4,
        6.9,
        5.8,
        5.2,
        3.0,
        2.6,
        2.2,
        1.9,
        1.8,
        1.6,
        1.5,
        1.4,
        1.2,
        0.1,
        0.1,
      ],
      occupation: [
        'Full-Stack Web Developer',
        'Back-End Web Developer',
        'Student',
        'Mobile Developer (Android, iOS, WP, and MultiPlatform)',
        'Desktop Develop',
        'Front-End Web Developer',
        'Other',
        'Enterprise Level Services Developer',
        'Embedded Application Developer',
        'DevOps',
        'Developer with a Statistics or Mathematics Background',
        'Executive (VP of Engineering, CTO, CIO, etc.)',
        'Data Scientist',
        'System Administrator',
        'Engineering Manager',
        'Analyst',
        'Business Intelligence or Data WWarehousing Expert',
        'Maching Learning Developer',
      ],
    };
    this.reverseOrder = this.reverseOrder.bind(this);
  }

  reverseOrder() {
    this.setState(prevState => {
      return {
        data: prevState.data.reverse(),
        occupation: prevState.occupation.reverse(),
      };
    });
  }

  render() {
    const { data, occupation } = this.state;
    const btnStyle = {
      border: 'none',
      fontSize: '18px',
      background: '#0EB0D6',
      padding: '7px',
      borderRadius: '7px',
      marginTop: '25px',
    };
    return (
      <>
        <Chart data={data} occupation={occupation} />
        <button style={btnStyle} type="button" onClick={this.reverseOrder}>
          Click to reverse the data order!
        </button>
      </>
    );
  }
}

export default hot(module)(RootComponent);
