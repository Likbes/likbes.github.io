/* eslint-disable class-methods-use-this */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { hot } from 'react-hot-loader';
import style from './app.scss';

class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currLat: '',
      currLon: '',
      city: '',
      country: '',
      temp: '',
      tempCategory: 'Celsius',
      currTempK: '',
      currTempF: '',
      currTempC: '',
      weatherMain: '',
      weatherDetail: '',
      display: 'none',
    };
  }

  componentDidMount() {
    Promise.all([this.getLocation()]).then(this.getWeather.bind(this));
  }

  getLocation() {
    const key = '95cb98c3bced54804a8a4847c8021eeaf83e12ae57c49704500c6a1c';
    fetch(`https://api.ipdata.co/?api-key=${key}`)
      .then(data => data.json())
      .then(data => {
        this.setState({
          currLat: data.latitude,
          currLon: data.longitude,
          city: data.city,
          country: data.country_name,
        });
      })
      .then(this.getWeather.bind(this));
  }

  getWeather() {
    const key = '68430ea893f4619fe948159fb4637321';
    const { currLat, currLon } = this.state;
    console.log(currLat);
    fetch(
      // eslint-disable-next-line max-len
      `https://samples.openweathermap.org/data/2.5/weather?q=Zaporizhia,uk&appid=${key}`,
      // eslint-disable-next-line prettier/prettier
      { mode: 'no-cors' }
    ).then(data => console.log(data));
  }

  render() {
    return <h1>Hello World! </h1>;
  }
}

export default hot(module)(Weather);
